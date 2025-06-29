import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown, Container, Modal, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookies';
import { useEffect, useState } from 'react';
import {
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
  FaShoppingCart,
  FaHome,
  FaBoxOpen,
} from 'react-icons/fa';

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const token = Cookies.getItem('jwtToken');
  const adminToken = localStorage.getItem('adminJwtToken');
  const navigate = useNavigate();

  useEffect(() => {
    setIsAdmin(!!adminToken);
  }, [adminToken]);

  const handleLogout = () => {
    localStorage.clear();
    Cookies.removeItem('jwtToken');
    Cookies.removeItem('adminJwtToken');
    setShowLogoutModal(false);
    navigate('/login');
  };

  const onLogout = () => {
    setShowLogoutModal(true);
  };

  // Text-white added for visibility against dark almond background
  const linkStyle = 'nav-link d-flex align-items-center gap-2 text-white fw-semibold';

  const userLinks = (
    <>
      <NavLink to="/" className={linkStyle}><FaHome /> <span>Home</span></NavLink>
      <NavLink to="/my-cart" className={linkStyle}><FaShoppingCart /> <span>MyCart</span></NavLink>
      <NavLink to="/my-orders" className={linkStyle}><FaBoxOpen /> <span>Orders</span></NavLink>
      <NavLink to="/about-us" className={linkStyle}><span>About Us</span></NavLink>

      {!token ? (
        <div className="d-flex align-items-center">
          <NavLink to="/login" className={linkStyle}><FaSignInAlt /> <span>User Login</span></NavLink>
          <span className="nav-link px-1 text-white">/</span>
          <NavLink to="/alogin" className={linkStyle}><FaUser /> <span>Admin Login</span></NavLink>
        </div>
      ) : (
        <NavLink to="#" className={linkStyle} onClick={onLogout}>
          <FaSignOutAlt /> <span>Logout</span>
        </NavLink>
      )}
    </>
  );

  const adminLinks = (
    <>
      <NavLink to="/admin/dashboard" className={linkStyle}><FaHome /> <span>Dashboard</span></NavLink>
      <NavLink to="/admin/all-products" className={linkStyle}><span>Products</span></NavLink>
      <NavLink to="/admin/orders" className={linkStyle}><span>Orders</span></NavLink>
      <NavLink to="/admin/users" className={linkStyle}><span>Users</span></NavLink>

      <NavDropdown title="More" id="adminDropdown">
        <NavDropdown.Item href="#">Manage Categories</NavDropdown.Item>
        <NavDropdown.Item href="#">Add Product</NavDropdown.Item>
      </NavDropdown>

      <NavLink to="#" className={linkStyle} onClick={onLogout}>
        <FaSignOutAlt /> <span>Logout</span>
      </NavLink>
    </>
  );

  return (
    <>
      <Navbar
        fixed="top"
        expand="lg"
        className="px-4 shadow"
        style={{
          backgroundColor: '#a47148', // Deep almond
          color: '#fff',
        }}
      >
        <Container fluid>
          <Navbar.Brand
            href={isAdmin ? '/admin/dashboard' : '/'}
            className="fw-bold fs-4 text-white"
          >
            🛒 G-Mart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-content" />
          <Navbar.Collapse id="navbar-content">
            <Nav className="ms-auto">
              {isAdmin ? adminLinks : userLinks}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Logout Confirmation Modal */}
      <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} centered>
        <Modal.Body className="text-center">
          <p className="fs-5 mb-4">Do you want to log out?</p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>No</Button>
            <Button variant="danger" onClick={handleLogout}>Yes</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
