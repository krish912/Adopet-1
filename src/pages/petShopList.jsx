import React, { useState, useEffect } from 'react';
// import './PetShopList.css'; // Import custom styles
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import shop1 from '../assets/images/acclogo.png'
const PetShopList = () => {
  const [petShops, setPetShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://adopet-1-server.onrender.com/getpetShop")
      .then(response => response.json())
      .then(data => {
        setPetShops(data.message);
        setLoading(false);
      });
  }, []);

  const handleViewPetsClick = (shopId) => {
    // Navigate to the shop's pet list page with the shop ID as a parameter
    navigate(`/petShops/${shopId}`);
  };

  return (
    <div className="pet-shop-list-container">
      <br/><br/><br/><br/><br/>
      <h1 style={{fontFamily:"revert"}}>pet shops available on Adopet</h1>
      <br/><br/><br/>  
      
      {loading ? (
        <p>Loading pet shops...</p>
      ) : petShops.length > 0 ? (
        <div className="pet-shop-list grid grid-cols-3 gap-4" style={{marginLeft:"10%"}}>
          {petShops.map(shop => (
            // <div key={shop.id} className="pet-shop-card">
            //   <h3 className="shop-name">{shop.name}</h3>
            //   <p className="shop-location">{shop.location}</p>
            //   <button className="view-pets-button" onClick={() => handleViewPetsClick(shop.id)}>View Pets</button>
            // </div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={shop.images} />
      <Card.Body>
        <Card.Title>{shop.name}</Card.Title>
        <Card.Title>location: {shop.location}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button className="view-pets-button" onClick={() => handleViewPetsClick(shop.id)}>View Pets</button>
      </Card.Body>
    </Card>
          ))}
        </div>
      ) : (
        <p className="no-results-message">No pet shops available.</p>
      )}
    </div>
  );
};

export default PetShopList;
