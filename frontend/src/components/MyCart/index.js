import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookies";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import {
  ProductContainer,
  ProductName,
  ProductPrice,
  ProductImage,
} from "../ProductItem/styledComponents";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MyCart = () => {
  const userId = Cookies.getItem("userId");
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = () => {
    axios
      .get(`http://localhost:5100/cart/${userId}`)
      .then((response) => {
        setCartData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  };

  const handleCancelClick = (productId) => {
    axios
      .delete(`http://localhost:5100/remove-from-cart/${productId}`)
      .then(() => {
        toast.warning("Item removed from cart!", { autoClose: 2000 });
        getProductsList();
      })
      .catch((error) => {
        console.error("Error removing product from cart:", error);
      });
  };

  const handleQuantityChange = async (cartItemId, type) => {
    const item = cartData.find((i) => i._id === cartItemId);
    if (!item) return;

    const currentQuantity = item.quantity || 1;

    if (type === "dec" && currentQuantity === 1) {
      handleCancelClick(cartItemId);
      return;
    }

    const newQuantity = type === "inc" ? currentQuantity + 1 : currentQuantity - 1;

    const updatedCart = cartData.map((item) =>
      item._id === cartItemId ? { ...item, quantity: newQuantity } : item
    );

    setCartData(updatedCart);

    try {
      await axios.put("http://localhost:5100/update-cart", {
        userId,
        productId: item.productId || item.product?._id || item._id,
        quantity: newQuantity,
      });
    } catch (error) {
      console.error("Update quantity failed:", error.response?.data || error.message);
      toast.error("Failed to update quantity");
    }
  };

  const totalPrice = cartData.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  // const handleBuyAll = () => {
  //   if (cartData.length === 0) {
  //     toast.info("Your cart is empty!");
  //     return;
  //   }
  //   navigate("/order-details", { state: { cartItems: cartData } });
  // };
const handleBuyAll = () => {
  if (cartData.length === 0) {
    toast.info("Your cart is empty!");
    return;
  }

  navigate(`/order-details`, { state: { cartItems: cartData } });
};

  return (
    <div>
      <Header />
      <ToastContainer />
      <br /><br />
      <h1 className="text-3xl font-semibold mt-8">My Cart</h1>

      <div className="container mx-auto px-4 my-4">
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {cartData.map((product) => (
            <ProductContainer key={product._id}>
              <ProductImage src={product.image} alt={product.productname} />
              <div className="p-4">
                <ProductName className="text-xl font-semibold mb-2">
                  {product.productname}
                </ProductName>
                <p className="text-gray-700">₹{product.price}</p>
                <div className="flex items-center gap-3 justify-center">
                  <span className="font-semibold">Quantity</span>
                  <button
                    onClick={() => handleQuantityChange(product._id, "dec")}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    −
                  </button>
                  <span className="font-medium">{product.quantity || 1}</span>
                  <button
                    onClick={() => handleQuantityChange(product._id, "inc")}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => handleCancelClick(product._id)}
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </ProductContainer>
          ))}
        </ul>

        {cartData.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-lg font-semibold mb-2">Total Price: ₹{totalPrice}</p>
            <button
              onClick={handleBuyAll}
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Buy Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;

