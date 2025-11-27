import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserShield, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast.error("⚠️ Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const result = await login({ email, password });
      
      if (result.success) {
        toast.success("✅ Login successful! Redirecting...", {
          autoClose: 1500,
        });
        setTimeout(() => {
          navigate("/admin");
        }, 1500);
      } else {
        toast.error(`❌ ${result.error || "Login failed"}`);
      }
    } catch (error) {
      toast.error("❌ Network error. Please try again.");
      console.error('Login error:', error);
    }
    
    setLoading(false);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="login-card shadow-lg border-0" style={{ maxWidth: "450px", width: "100%" }}>
        <Card.Body className="p-5">
          <div className="text-center mb-4">
            <div className="login-icon mb-3">
              <FaUserShield className="text-primary" size={48} />
            </div>
            <h2 className="fw-bold text-dark mb-2">Admin Login</h2>
            <p className="text-muted">Access the Rynott Hospital admin panel</p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">
                <FaEnvelope className="me-2" />
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control-lg"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">
                <FaLock className="me-2" />
                Password
              </Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control-lg pe-5"
                  required
                />
                <Button
                  variant="link"
                  className="position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ zIndex: 10 }}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-muted" />
                  ) : (
                    <FaEye className="text-muted" />
                  )}
                </Button>
              </div>
            </Form.Group>

            <Button
              type="submit"
              className="btn-primary-custom w-100 py-3 fw-semibold"
              disabled={loading}
              size="lg"
            >
              {loading ? "Logging in..." : "Login to Admin Panel"}
            </Button>
          </Form>

          <div className="text-center mt-4">
            <small className="text-muted">
              Demo Credentials: admin@rynott.com / admin123
            </small>
          </div>
        </Card.Body>
      </Card>

      <style>{`
        .login-card {
          border-radius: 20px;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }
        
        .login-icon {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .btn-primary-custom {
          background: linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%);
          border: none;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(13, 110, 253, 0.3);
          transition: all 0.3s ease;
        }
        
        .btn-primary-custom:hover {
          background: linear-gradient(135deg, #0b5ed7 0%, #0a58ca 100%);
          box-shadow: 0 6px 20px rgba(13, 110, 253, 0.4);
          transform: translateY(-2px);
        }
        
        .form-control-lg {
          border-radius: 12px;
          border: 2px solid #e9ecef;
          padding: 12px 16px;
          transition: all 0.3s ease;
        }
        
        .form-control-lg:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }
        
        .min-vh-100 {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
      `}</style>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
}

export default AdminLogin;