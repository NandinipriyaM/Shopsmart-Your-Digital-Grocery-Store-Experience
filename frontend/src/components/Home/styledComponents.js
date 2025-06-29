import styled from 'styled-components';

export const HomeContainer = styled.section`
  background-image: url('/home-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  color: #000;
  height: 100vh;
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align to top */
  text-align: center;
  padding-top: 80px; /* Push card slightly down from top */
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  border-radius: 12px;
  // box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  // background-color: #fff;
  padding: 20px;
`;

export const ContentColumn = styled.div`
  flex: 1;
  text-align: center;
`;

// export const Heading = styled.h2`
//   font-size: 3rem;
//   font-weight: bold;
//   margin-bottom: 15px;
// `;
export const Heading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #2e7d32;
`;


export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 20px;
`;

export const PrimaryButton = styled.button`
  padding: 20px 40px;
  font-size: 26px;
  font-family: 'Bree Serif';
  border-radius: 50px;
  font-weight: bold;
  background-color: #f030b6;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #ff3781;
  }
`;
