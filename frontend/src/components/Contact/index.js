import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactContainer = styled.section`
  background: linear-gradient(to bottom right, #e0f7fa, #ffffff);
  padding: 80px 20px;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
`;

const Card = styled.div`
  background-color: #ffffff;
  max-width: 650px;
  margin: auto;
  padding: 40px 30px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #00796b;
  margin-bottom: 30px;
`;

const Info = styled.div`
  font-size: 18px;
  color: #444;
  margin: 18px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #00796b;
    margin-right: 10px;
    font-size: 20px;
  }

  strong {
    font-weight: 600;
    margin-right: 6px;
  }
`;

const Note = styled.p`
  margin-top: 25px;
  font-size: 16px;
  color: #333;
  opacity: 0.9;
`;

const ContactUs = () => {
  return (
    <ContactContainer>
      <Card>
        <Heading>📞 Contact Us</Heading>
        <Info><FaEnvelope /> <strong>Email:</strong> info@grocerymart.com</Info>
        <Info><FaPhoneAlt /> <strong>Phone:</strong> +1 (123) 456-7890</Info>
        <Note>
          Thank you for considering <strong>GroceryMart</strong>! We're always happy to help.
        </Note>
      </Card>
    </ContactContainer>
  );
};

export default ContactUs;
