import styled from 'styled-components';

export const ProductContainer = styled.div`
  border: 2px solid #a3d9a5;
  border-radius: 12px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;
export const ProductImage = styled.img`
  max-width: 100%;
  height: 220px;
  width: 300px;
  border-radius: 8px;
   border:2px solid #7ac74f;
  object-fit: cover;
  margin-bottom: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 👈 adds a subtle shadow */
`;

export const ProductName = styled.h3`
  font-size: 18px;
  color: #222;
  font-weight: 600;
  margin: 8px 0 4px;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #008080;
  margin: 0;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-top: 8px;
  line-height: 1.4;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items:center;
  margin-top: 14px;
`;

// View Description Button
export const ViewButton = styled.button`
  padding: 10px 16px;
  background: linear-gradient(90deg, #007bff, #00c6ff);
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: all 0.25s ease;
width:fit-content;
  &:hover {
    background: linear-gradient(90deg, #0056b3, #009fc7);
    transform: scale(1.03);
  }
`;
export const CartButton = styled.button`
  padding: 10px 16px;
  background: linear-gradient(90deg, #f9a825, #f57f17);
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  transition: all 0.25s ease;
width:fit-content;
  &:hover {
    background: linear-gradient(90deg, #ef6c00, #ff8f00);
    transform: scale(1.03);
  }
`;
