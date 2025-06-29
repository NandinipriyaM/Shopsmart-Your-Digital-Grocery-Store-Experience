import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookies';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContainer = styled.div`
  text-align: start;
  width: 600px;
  margin: 12vh auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const FormHeader = styled.h2`
  font-size: 1.5rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Checkout = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const cartItemsFromState = state?.cartItems || [];

  const [cartItems, setCartItems] = useState(cartItemsFromState);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    address: '',
    paymentMethod: 'cod',
  });

  useEffect(() => {
    if (cartItemsFromState.length === 0 && id) {
      axios.get(`http://localhost:5100/products/${id}`)
        .then((res) => {
          const product = res.data;
          setCartItems([{
            _id: product._id,
            productname: product.productname,
            price: product.price,
            quantity: 1,
          }]);
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
        });
    }
  }, [id, cartItemsFromState]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = Cookies.getItem('userId');

    try {
      for (const item of cartItems) {
        const payload = {
          firstname: formData.firstname,
          lastname: formData.lastname,
          phone: formData.phone,
          address: formData.address,
          paymentMethod: formData.paymentMethod,
          quantity: item.quantity || 1,
          user: userId,
          productId: item._id || item.productId || item.product?._id,
          price: item.price,
          productname: item.productname,
        };

        await axios.post('http://localhost:5100/orders', payload);
      }

      toast.success('Order(s) created successfully!', { autoClose: 3000 });
      setTimeout(() => {
        navigate('/my-orders');
      }, 3100);

    } catch (error) {
      console.error('Error creating order(s):', error.response?.data || error.message);
      toast.error('Failed to create order(s).', { autoClose: 3000 });
    }
  };

  return (
    <div>
      <Header />
      <ToastContainer position="top-center" autoClose={3000} />
      <FormContainer>
        <FormHeader>Order Details</FormHeader>

        {cartItems.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <h4>Items in your order:</h4>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.productname} - ₹{item.price} x {item.quantity || 1}
                </li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>First Name:</Label>
            <Input
              type="text"
              name="firstname"
              placeholder="Enter your first name"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name:</Label>
            <Input
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Phone:</Label>
            <Input
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Address:</Label>
            <textarea
              name="address"
              rows={5}
              style={{ width: '100%', border: '1px solid grey' }}
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Payment Method:</Label>
            <Select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="cod">Cash on Delivery (COD)</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
            </Select>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </FormContainer>
    </div>
  );
};

export default Checkout;
