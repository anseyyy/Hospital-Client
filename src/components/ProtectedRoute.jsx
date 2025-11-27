import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Spinner, Container } from 'react-bootstrap';

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading, verifyToken } = useAuth();
  const [tokenVerified, setTokenVerified] = useState(false);
  const [verificationComplete, setVerificationComplete] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      if (isAuthenticated) {
        // Token exists and user is authenticated, verify it with server
        const isValid = await verifyToken();
        setTokenVerified(isValid);
      } else {
        // No token or not authenticated
        setTokenVerified(false);
      }
      setVerificationComplete(true);
    };

    if (!loading) {
      checkToken();
    }
  }, [isAuthenticated, loading, verifyToken]);

  if (loading || !verificationComplete) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="text-center">
          <Spinner animation="border" variant="primary" size="lg" />
          <p className="mt-3 text-muted">Verifying authentication...</p>
        </div>
      </Container>
    );
  }

  if (!isAuthenticated || !tokenVerified) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default ProtectedRoute;