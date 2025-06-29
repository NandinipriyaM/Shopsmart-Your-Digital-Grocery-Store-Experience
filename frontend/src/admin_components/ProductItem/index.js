import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProductContainer,
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductImage,
  Button,
  ButtonContainer,
  ViewButton
} from "./styledComponents";

const AdminProductItem = ({ id, name, description, price, img, handleDeleteProduct }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleDelete = () => {
    handleDeleteProduct(id);
  };

  return (
    <ProductContainer>
      <ProductImage src={img} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>₹{price}</ProductPrice>

      {showDescription && (
        <ProductDescription>{description}</ProductDescription>
      )}

      <ButtonContainer>
        <Link to={`/admin/product-update/${id}`} className="btn btn-primary">
          Update
        </Link>
        <Button onClick={handleDelete}>
          Delete
        </Button>
      </ButtonContainer>
    </ProductContainer>
  );
};

export default AdminProductItem;
