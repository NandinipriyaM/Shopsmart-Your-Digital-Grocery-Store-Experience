import styled from 'styled-components';

export const ProductContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ProductName = styled.h3`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
  margin-bottom: 2px;
`;

export const ProductDescription = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  color: #22aaff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;
export const ProductImage = styled.img`
  width: 100%;
  max-width: 220px;         // Optional: control image width
  height: 200px;            // 👈 Fixed consistent height
  object-fit: cover;        // 👈 Crop while preserving aspect ratio
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;



export const Button = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

export const ViewButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  background-color: #17a2b8;
  color: white;
  margin: 10px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #138496;
  }
`;
