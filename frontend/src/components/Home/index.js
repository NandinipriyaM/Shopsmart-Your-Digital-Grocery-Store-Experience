import React from 'react';
import {
  HomeContainer,
  Container,
  CenteredRow,
  ContentColumn,
  Heading,
  Paragraph,
  PrimaryButton
} from './styledComponents';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import ContactUs from '../Contact';
import Header from '../Header';

const Home = () => {
  const onShop = () => {
    console.log('Shop Now clicked');
  };

  return (
    <div>
      <Header />

      {/* ✅ Background image is loaded from public/home-bg.jpg */}
      <HomeContainer
        className="home-container"
        style={{
          backgroundImage: `url('/home-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '60px'
        }}
      >
        <Container>
          <CenteredRow>
            <ContentColumn>
              <Heading style={{ fontSize: '3rem', color: '#2e7d32' }}>
                Fresh Groceries, Delivered to Your Doorstep!
              </Heading>

              <Paragraph style={{ fontSize: '1.25rem', color: 'black' }}>
                Enjoy fast delivery, daily discounts, and 100% fresh essentials for your home.
              </Paragraph>

              <PrimaryButton
                style={{
                  backgroundColor: '#2b9348',
                  padding: '12px 24px',
                  borderRadius: '30px'
                }}
              >
                <Link
                  to="/shopping"
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  🛒 Shop Now
                </Link>
              </PrimaryButton>
            </ContentColumn>
          </CenteredRow>
        </Container>
      </HomeContainer>

      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
