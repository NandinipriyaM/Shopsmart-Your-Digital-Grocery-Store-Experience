import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaCcVisa, FaCcMastercard, FaCcAmazonPay } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #111820;
  color: #f1f1f1;
  padding: 50px 20px 30px;
  font-family: 'Segoe UI', sans-serif;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BrandBlock = styled.div`
  max-width: 400px;

  h4 {
    font-size: 24px;
    color: #f4d03f;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    opacity: 0.85;
    margin-bottom: 20px;
  }
`;

const PaymentIcons = styled.div`
  font-size: 28px;
  color: #f1f1f1;
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 10px;

  a {
    color: #fff;
    font-size: 20px;

    &:hover {
      color: #1abc9c;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #333;
  margin-top: 30px;
  text-align: center;
  padding-top: 20px;
  font-size: 13px;
  opacity: 0.7;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <BrandBlock>
          <h4>🛒 G-Mart</h4>
          <p>Making grocery shopping simple, fast, and affordable.</p>
          <PaymentIcons>
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmazonPay />
          </PaymentIcons>
        </BrandBlock>
      </FooterTop>

      <FooterBottom>
        © {new Date().getFullYear()} G-Mart. All rights reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
