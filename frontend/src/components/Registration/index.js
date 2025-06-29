import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header';

const commonFields = [
  { controlId: "firstName", label: "First Name", type: "text" },
  { controlId: "lastName", label: "Last Name", type: "text" },
  { controlId: "username", label: "Username", type: "text" },
  { controlId: "email", label: "Email", type: "email" },
  { controlId: "password", label: "Password", type: "password" },
];

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5100/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('Registration successful!');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        const errorData = await response.json();
        toast.error('Registration failed: ' + errorData.message);
      }
    } catch (error) {
      console.error('Email already exists:', error);
      toast.error('Email already exists!');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <Header />
      <div
        style={{
          minHeight: '100vh',
          backgroundImage: `url('/signup-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingTop: '10vh',
          paddingLeft: '10vw'
        }}
      >
        <Card className="shadow p-4" style={{ width: '400px', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
          <Card.Body>
            <h2 className="mb-4" style={{ color: '#2e7d32', fontWeight: '700' }}>Sign Up</h2>
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
                  />
                </Form.Group>
              ))}
              {/* <Button type="submit" className="btn-primary w-100 mt-3">Sign Up</Button> */}
              <Button
  type="submit"
  className="w-100 mt-3"
  style={{ background: 'linear-gradient(90deg, #00c853, #64dd17)', border: 'none' }}
>
  Sign Up
</Button>
            </Form>
            <p className="mt-3">Already have an account? <Link to="/login" style={{ color: '#2e7d32', fontWeight: '600' }}>Log In</Link></p>
          </Card.Body>
        </Card>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default Registration;
