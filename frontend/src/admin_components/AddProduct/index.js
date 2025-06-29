import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AdminNavabar from '../AdminNavbar'
import { ToastContainer, toast } from 'react-toastify';

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 5vh auto;
  padding: 20px;
  text-align: start;

  
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: rgb(62, 62, 62);
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color:#cfead8; /* soft beige */
  padding: 20px;
  border-radius: 12px;
`;


const FormGroup = styled.div`
  margin-bottom: 20px;
  display:flex;
  flex-direction:column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;

  /* Hide number input spinners */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;


const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;


const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: green;
  }
`;



const InputRowsContainer = styled.div`
    display:flex;
    width:100;
    align-items:center;
    @media screen and (max-width:768px){
        flex-direction:column;
    }
`

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productname: '',
    description: '',
    price: '',
    image: '',
    category: '',
    countInStock: '',
    rating: '',
  });

  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    // Fetch available categories from your API
    axios.get('http://localhost:5100/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const { productname, description, price, image, category, countInStock, rating } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the category state directly
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!productname || !description || !price || !image || !category || !countInStock || !rating) {
    return toast.error('Please fill in all required fields');
  }

  try {
    const response = await axios.post('http://localhost:5100/add-products', {
      productname,
      description,
      price,
      image,
      category,
      countInStock,
      rating,
    });

    toast.success('Item added successfully');

    // Clear form
    setFormData({
      productname: '',
      description: '',
      price: '',
      image: '',
      category: '',
      countInStock: '',
      rating: '',
    });

    console.log('Product added:', response.data);
  } catch (error) {
    console.error('Error adding product:', error);
    toast.error('Failed to add product. Please try again.');
  }
};

  return (
   <div>
    <AdminNavabar/>
    {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    <ToastContainer
  position="top-center"
  autoClose={2000}
  closeOnClick
  pauseOnFocusLoss={false}
  draggable={false}
  pauseOnHover={false}
  style={{ zIndex: 9999 }}
/>

    <h1 style={{ marginTop: '20px' }}>Add Product</h1>
     <Container>
      <Form onSubmit={handleSubmit} className='shadow p-3'>
        <InputRowsContainer style={{gap:'10px'}} >
        <FormGroup className='w-100'>
          <Label htmlFor="productname">Product Name</Label>
          <Input
            type="text"
            name="productname"
            value={productname}
            onChange={handleChange}
            placeholder="Enter product name"
          />
        </FormGroup>
        <FormGroup className='w-100'>
          <Label htmlFor="rating">Rating</Label>
          <Input
            type="number"
            name="rating"
            value={rating}
            onChange={handleChange}
            placeholder="Enter product rating"
          />
        </FormGroup>
        
        <FormGroup className='w-100'>
          <Label htmlFor="price">Price</Label>
          <Input
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
            placeholder="Enter product price"
          />
        </FormGroup>
        </InputRowsContainer>
        <InputRowsContainer style={{gap:'10px'}} >
        <FormGroup className='w-100'>
          <Label htmlFor="image">Image URL</Label>
          <Input
            type="text"
            name="image"
            value={image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </FormGroup>
        <FormGroup className='w-100'>
          <Label htmlFor="category">Category</Label>
          <Select
  name="category"
  id="category"
  value={category}
  onChange={handleChange}
>
  <option value="">Select Category</option>
  <option value="fruits">Fruits</option>
  <option value="Vegetables">Vegetables</option>
  <option value="Dairy Products">Dairy Products</option>
   <option value="Grains & Pulses">Grains & Pulses</option>
  <option value="dryfruits">Dry Fruits</option>
  <option value="Bakery ">Bakery</option>
  <option value="Oils & Ghee">Oils & Ghee</option>
  <option value="Meat & Fish">Meat & Fish</option>
  <option value="Beverages">Beverages</option>
</Select>


        </FormGroup>
        <FormGroup className='w-100'>
          <Label htmlFor="countInStock">Count in Stock</Label>
          <Input
            type="number"
            name="countInStock"
            value={countInStock}
            onChange={handleChange}
            placeholder="Enter count in stock"
          />
        </FormGroup>
        </InputRowsContainer>
        <FormGroup className='w-100'>
          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="Enter product description"
          />
        </FormGroup>
        <Button type="submit">Add Product</Button>
      </Form>
    </Container>
   </div>
  );
};

export default AddProduct;
