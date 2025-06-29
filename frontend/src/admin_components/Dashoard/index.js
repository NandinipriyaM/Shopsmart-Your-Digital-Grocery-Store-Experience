import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminNavabar from '../AdminNavbar';

// Icons
import { FaBox, FaUsers, FaClipboardList, FaPlus } from 'react-icons/fa';

const Dashboard = () => {
  const [data, setData] = useState({
    products: 0,
    users: 0,
    orders: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, productsResponse, ordersResponse] = await Promise.all([
          axios.get('http://localhost:5100/users'),
          axios.get('http://localhost:5100/products'),
          axios.get('http://localhost:5100/orders'),
        ]);

        setData({
          users: usersResponse.data.length,
          products: productsResponse.data.length,
          orders: ordersResponse.data.length,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <AdminNavabar />
      <h1 className="text-center mt-4 mb-4">Dashboard</h1>

      <div className="dashboard container">
        <div className="card-container">
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title><FaBox /> Product Count</Card.Title>
              <Card.Text>{data.products} Products</Card.Text>
              <Link to="/admin/all-products">
                <Button className="orange-btn">View Products</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title><FaUsers /> User Count</Card.Title>
              <Card.Text>{data.users} Users</Card.Text>
              <Link to="/admin/users">
                <Button className="orange-btn">View Users</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title><FaClipboardList /> Order Count</Card.Title>
              <Card.Text>{data.orders} Orders</Card.Text>
              <Link to="/admin/orders">
                <Button className="orange-btn">View Orders</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card className="dashboard-card" >
            <Card.Body>
              <Card.Title><FaPlus /> Add Product</Card.Title>
              <Link to="/admin/add-product">
                <Button className="orange-btn" style={{width: '120px', marginTop: '30px' }}>Add</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
