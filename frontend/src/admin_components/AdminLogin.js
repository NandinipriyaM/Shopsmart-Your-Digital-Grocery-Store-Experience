import React, { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';

const commonFields = [
  { controlId: 'email', label: 'Email', type: 'email' },
  { controlId: 'password', label: 'Password', type: 'password' },
];

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const token = Cookies.getItem('jwtToken');
  const adminToken = localStorage.getItem('adminJwtToken');

  useEffect(() => {
    if (token) {
      navigate('/');
    } else if (adminToken) {
      navigate('/admin/all-products');
    }
  }, [navigate]);
    //   const handlelogin=()=>{
    //     alert('Login Successfull')
    //     navigate('/admin/dashboard')
    // }

const handlelogin = () => {
  toast.success('Login Successful!');
  // navigate('/admin/dashboard');
   setTimeout(() => navigate('/admin/dashboard'), 1500);
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5100/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.jwtToken) {
  localStorage.setItem('adminJwtToken', data.jwtToken);
  Cookies.setItem('userName', data.user.firstname);
  toast.success('Admin login successful!');
  navigate('/admin/dashboard');
} else if (data.token) {
  Cookies.setItem('jwtToken', data.token, { expires: 30 });
  Cookies.setItem('userId', data.user._id);
  Cookies.setItem('userName', data.user.firstname);
  toast.success('User login successful!');
  navigate('/');
}

      } 




      
      else {
        toast.error("Email or Password didn't match");
      }
    } catch (error) {
      toast.error('Login failed. Try again later.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
   
  return (
    <div>
      <Header />
     <ToastContainer position="top-center" autoClose={2000} className="z-100" />
      {/* ✅ Background Container */}
      <div
        style={{
          backgroundImage: `url('/admin-loginbg.jpg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          backgroundColor: '#fff',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingRight: '5%',
          marginTop: '62px', // adjust if header height changes
        }}
      >
        <Card
          className="shadow p-4"
          style={{
            width: '400px',
            background: 'rgba(255, 255, 255, 0.96)',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            marginRight: '40px'
          }}
        >
          <Card.Body>
            {/* <div className="text-center mb-3">
              <img
                src="/admin-logo.png" // optional logo
                alt="Admin Logo"
                style={{ width: '50px', height: '50px', objectFit: 'contain' }}
              />
            </div> */}
            <h2 className="mb-4 text-center" style={{ color: '#6a1b9a', fontWeight: 'bold' }}>
              Admin Login
            </h2>

            <Form onSubmit={handleSubmit}>
              {commonFields.map((field) => (
                <Form.Group
                  style={{ textAlign: 'start', marginBottom: '10px' }}
                  controlId={field.controlId}
                  key={field.controlId}
                >
                  <Form.Label>{field.label}</Form.Label>
                  <Form.Control
                    type={field.type}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    name={field.controlId}
                    value={formData[field.controlId]}
                    onChange={handleInputChange}
                    required
                    style={{ borderRadius: '8px' }}
                  />
                </Form.Group>
              ))}
              {/* onClick={handlelogin} */}
               <Button 
             onClick={handlelogin}
                type="button"
                className="w-100 mt-3"
                style={{
                  backgroundColor: '#6a1b9a',
                  border: 'none',
                  borderRadius: '30px',
                  fontWeight: '600',
                  padding: '10px',
                  fontSize: '16px',
                }}
              >
                Login
              </Button>
            </Form>

            <p className="mt-3 text-center">
              Don't have an account?{' '}
              <Link to="/asignup" style={{ color: '#6a1b9a', fontWeight: '600' }}>
                Sign Up
              </Link>
            </p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;

