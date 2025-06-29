import React, { useState } from "react";
import axios from "axios";
import Cookies from 'js-cookies';
import { ToastContainer, toast } from 'react-toastify';
import {
  ProductContainer,
  ProductName,
  ProductPrice,
  ProductImage,
  ViewButton,
  CartButton,
  ButtonContainer,
  ProductDescription
} from "./styledComponents";

const ProductItem = ({ id, name, description, price, img }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleAddToCart = async () => {
    const userId = Cookies.getItem("userId");

    try {
      await axios.post("http://localhost:5100/add-to-cart", {
        userId,
        productId: id,
      });

      toast.success('Product added to cart!', { toastId: 'cart-success' });
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add product to cart.");
    }
  };

  return (
    <ProductContainer>
      <ToastContainer position="top-center" autoClose={1500} />
      <ProductImage src={img} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>₹{price}</ProductPrice>

      {showDescription && <ProductDescription>{description}</ProductDescription>}

      <ButtonContainer>
        <ViewButton onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? "Hide Description" : "View Description"}
        </ViewButton>
        <CartButton onClick={handleAddToCart}>Add to Cart</CartButton>
      </ButtonContainer>
    </ProductContainer>
  );
};

export default ProductItem;


