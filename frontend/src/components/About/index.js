import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
//   background-color: #f7f7f7;
  padding: 40px 0;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const About = () => {
    return (
        <AboutContainer style={{ backgroundColor: "#f9fdf9", padding: "20px", borderRadius: "12px" }}>
  <div>
    <Heading style={{ color: "#2e7d32", fontSize: "2rem", marginBottom: "15px",fontWeight:'bold' }}>
      About ShopSmart
    </Heading>

    <Paragraph style={{ color: "#444", lineHeight: "1.6", marginBottom: "12px" }}>
      Welcome to <strong style={{ color: "#2e7d32" }}>ShopSmart</strong> – your go-to digital destination for fresh, high-quality groceries. 
      We bring the supermarket to your fingertips, making your shopping journey smooth, secure, and enjoyable.
    </Paragraph>

    <Paragraph style={{ color: "#444", lineHeight: "1.6", marginBottom: "12px" }}>
      Whether you're a busy professional, a home chef, or someone who simply loves fresh food, ShopSmart has something for everyone. 
      Explore a wide range of everyday essentials, fresh produce, and specialty items – all in one convenient place.
    </Paragraph>

    <Paragraph style={{ color: "#444", lineHeight: "1.6", marginBottom: "12px" }}>
      Our app is built for simplicity and speed. With a user-friendly interface, easy navigation, and smart cart features, 
      you can browse products, view details, add to cart, and check out seamlessly – anytime, anywhere.
    </Paragraph>

    <Paragraph style={{ color: "#444", lineHeight: "1.6", marginBottom: "12px" }}>
      For sellers and administrators, ShopSmart offers robust backend tools: manage product listings, track inventory, 
      handle orders, assist customers, and monitor performance – all from one secure dashboard.
    </Paragraph>

    <Paragraph style={{ color: "#444", lineHeight: "1.6", marginBottom: "12px" }}>
      We prioritize your privacy and data security. Every transaction is encrypted, and your information remains confidential. 
      Shop confidently and enjoy a safe online grocery experience.
    </Paragraph>

    <Paragraph style={{ color: "#2e7d32", fontWeight: "bold", marginTop: "20px" }}>
      Thank you for choosing ShopSmart. We're excited to serve you and bring the joy of hassle-free grocery shopping to your home. 
      <span style={{ color: "#1b5e20" }}> Happy shopping!</span>
    </Paragraph>
  </div>
</AboutContainer>

    );
};

export default About;
