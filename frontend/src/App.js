import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Registration from './components/Registration';
import ProtectedRoute from './components/ProtectedRoute';
import Products from './components/products';
import Checkout from './components/Checkout';
import MyOrders from './components/MyOrders';
import History from './components/History';
import MyCart from './components/MyCart';

import Users from './admin_components/Users';
import Orders from './admin_components/Orders';
import AddCategory from './admin_components/AddCategory';
import AddProduct from './admin_components/AddProduct';
import AdminProducts from './admin_components/Products';
import AdminProductItem from './admin_components/ProductItem';
import UpdateProduct from './admin_components/Update';
import AdminProtectedRoute from './admin_components/AdminProtectedRoute';
import Dashboard from './admin_components/Dashoard';
import AdminNavbar from './admin_components/AdminNavbar';
import AdminLogin from './admin_components/AdminLogin';
import AdminSignup from './admin_components/AdminSignup';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* User routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Registration />} />
          <Route path="/" element={<Home />} />
          <Route path='/shopping' element={<ProtectedRoute Component={Products} />} />
          <Route path='/order-details' element={<ProtectedRoute Component={Checkout} />} />

          <Route path='/order-details/:id' element={<ProtectedRoute Component={Checkout} />} />
          <Route path='/my-orders' element={<ProtectedRoute Component={MyOrders} />} />
          <Route path='/about-us' element={<ProtectedRoute Component={History} />} />
          <Route path='/my-cart' element={<ProtectedRoute Component={MyCart} />} />

          {/* Admin routes */}
          <Route path='/alogin' element={<AdminLogin />} />
          <Route path='/asignup' element={<AdminSignup />} />
          <Route path='/admin/navbar' element={<AdminNavbar />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/users' Component={Users} />
          <Route path='/admin/orders' Component={Orders} />
          <Route path='/admin/add-category' Component={AddCategory} />
          <Route path='/admin/all-products' Component={AdminProducts} />
          <Route path='/admin/product/:id' Component={AdminProductItem} />
          <Route path='/admin/add-product' Component={AddProduct} />
          <Route path='/admin/product-update/:id' Component={UpdateProduct} />

          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to='/not-found' />} />
        </Routes>
      </BrowserRouter>

      {/* Toast Container for global toast notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
