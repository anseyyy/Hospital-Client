import React from 'react';
import { Container } from 'react-bootstrap';
import './AdminLayout.css';
import { useAuth } from '../context/AuthContext';
import AdminHeader from './AdminHeader';

function AdminLayout({ children }) {
    const { isAuthenticated } = useAuth();

    // Only show admin layout when authenticated
    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="admin-layout">
            <AdminHeader />
            <main className="admin-main">
                <Container fluid className="admin-content">
                    {children}
                </Container>
            </main>
        </div>
    );
}

export default AdminLayout;