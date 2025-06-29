import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import Header from '../Header';
const Wrapper = styled.div`

  background-image: url('/Grocery-bg.jpg');
  background-size: contain;
  background-repeat: no-repeat;
margin-top:40px;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  margin-left:100px;
  

`;
const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 3rem;
  z-index: 2;
  width:60vw;
 // background-color:  #0288d1;

 // background: linear-gradient(to right, #0288d1, #00acc1);
 // background: linear-gradient(to right, #009fd4, #00b6e6);

`;

const LoginCard = styled.div`
  width: 400px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
   margin-left:50px;
  
`;

const Title = styled.h2`
  color: #2c3e50;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
  text-align: left;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 4px;
  display: block;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
`;
const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #00c853, #64dd17);
  color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: none; /* No hover transition */
`;



const TextLink = styled.p`
  margin-top: 12px;
  font-size: 14px;
  text-align: center;

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.getItem('jwtToken');
    const adminToken = localStorage.getItem('adminJwtToken');
    if (token) navigate('/');
    else if (adminToken) navigate('/admin/all-products');
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5100/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        Cookies.setItem('jwtToken', data.token, { expires: 30 });
        Cookies.setItem('userId', data.user._id);
        Cookies.setItem('userName', data.user.firstname);
        toast.success('Login Successful!');
        setTimeout(() => navigate('/'), 1500);
      } else if (data.jwtToken) {
        localStorage.setItem('adminJwtToken', data.jwtToken);
        Cookies.setItem('userName', data.user.firstname);
        toast.success('Admin Login Successful!');
        setTimeout(() => navigate('/admin/dashboard'), 1500);
      } else {
        toast.error("Email or Password didn't match");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Wrapper>
      <Header />
      <ToastContainer position="top-center" autoClose={4000} theme="colored" />
      <Content>
        <LoginCard>
          <Title style={{ color: '#2e7d32', fontWeight: '700' }}>Welcome Back 👋</Title>
          <SubTitle>Login to continue shopping fresh</SubTitle>
          <form onSubmit={handleSubmit}>
            {['email', 'password'].map(field => (
              <InputGroup key={field}>
                <Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                <Input
                  type={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder={`Enter your ${field}`}
                  required
                />
              </InputGroup>
            ))}
            <LoginButton type="submit">Login</LoginButton>
          </form>
          <TextLink>
            Don't have an account? <Link to="/signup" style={{ color: '#00796b', fontWeight: '600' }} >Sign Up</Link>
          </TextLink>
        </LoginCard>
      </Content>
    </Wrapper>
  );
};

export default Login;
