import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from '../ProductItem';
import Header from '../Header';

const ProductsContainer = styled.div`
  margin-top: 10vh;
  padding: 20px;
  text-align: start;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  margin-top: 40px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  max-width: 270px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  // margin-bottom: 20px;
`;

const CategoryFilter = styled.select`
  width: 50%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  // margin-bottom: 20px;
`;
const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; // aligns search & filters nicely
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content:center; // aligns to left
  align-items: center;
`;

const CategoryWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end; // aligns to right
  align-items: center;
  h3{
  margin-right:10px
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 8px 12px;
  background-color: ${(props) => (props.active ? '#2e7d32' : '#ccc')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Products = () => {
  const api = 'http://localhost:5100/products';
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.productname.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery.trim() === '';
    if (selectedCategory === 'all') return matchSearch;
    return matchSearch && product.category.toLowerCase() === selectedCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const categories = [...new Set(products.map((product) => product.category.toLowerCase()))];
  categories.unshift('all');

  return (
    <div>
      <Header />
      <ProductsContainer>
        {/* Carousel */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active"></div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://img.freepik.com/free-vector/beautiful-banner-floral-leaves-template_21799-2812.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://img.freepik.com/free-psd/spring-sale-social-media-cover-template_47987-15231.jpg" alt="Third slide" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <FiltersContainer>
          <SearchWrapper>
            {/* <h3>Search By Product Name</h3> */}
            <SearchBar
              type="text"
              placeholder="Search by product name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </SearchWrapper>

          <CategoryWrapper>
            <h3>Filter</h3>
            <CategoryFilter value={selectedCategory} onChange={handleCategoryChange}>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </CategoryFilter>
          </CategoryWrapper>
        </FiltersContainer>

        {/* Products List */}
        <Heading>Products</Heading>
        <StyledList>
          {currentProducts.map((product) => (
            <ListItem key={product._id}>
              <ProductItem
                id={product._id}
                img={product.image}
                name={product.productname}
                description={product.description}
                price={product.price}
              />
            </ListItem>
          ))}
        </StyledList>

        {/* Pagination */}
        <PaginationContainer>
          {Array.from({ length: totalPages }, (_, i) => (
            <PageButton
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              active={currentPage === i + 1}
            >
              {i + 1}
            </PageButton>
          ))}
        </PaginationContainer>
      </ProductsContainer>
    </div>
  );
};

export default Products;
