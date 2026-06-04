import { Dogs } from './dogs';
import dog2 from '../assets/images/dog2.jpg'
import cat1 from '../assets/images/cat1.jpg'
import doc from '../assets/images/doc.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import accountLogo from '../assets/images/acclogo.png'
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';

function Home(){

  const { isLoggedIn, signOut } = useAuth();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const [show, setShow] = useState(false);
  const navigate = useNavigate();


  const handleSignOut = () => {
    signOut();
    navigate('/');
};
    return(
        <div className='head-text'>

          <div>   
        <Carousel  >

      <Carousel.Item interval={3000} className='img-size '>
     
        <img
          className="d-block w-100"
          src={dog2}
          alt="dogs"
         
          
        />
        {/* <Carousel.Caption>
          <h5>DOG'S</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item >

      <Carousel.Item interval={3000} className='img-size '>
       
        <img
          className="d-block w-100"
          src={cat1}
          alt="Second slide"
            />
        {/* <Carousel.Caption>
          <h5>CAT'S</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item >

      <Carousel.Item interval={3000} className='img-size '>
        <img
          className="d-block w-100"
          src={doc}
          alt="Third slide"
         
        />
        {/* <Carousel.Caption>
          <h5>COW'S</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div >

    <div className='text-on-image notworking'>
    <h1 style={{fontSize:100, fontFamily:'Times-Italic'}}>ADOPET </h1>
    <p>

           
           <Link to="/"  className='lnkcolor  underline-hover' >Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/Dogs"  className='lnkcolor underline-hover'>Pets</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/petShops"  className='lnkcolor underline-hover'>Pet Shop</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/about"  className='lnkcolor underline-hover'>About</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/contact"  className='lnkcolor underline-hover'>Contact</Link> &nbsp;&nbsp;&nbsp;&nbsp;
           
          
           
    </p>
    </div >

    <div className='text-on-image-left'>
    {!isLoggedIn ? (
                                <>
                                    <Link as={Link} to="/login" className="underline-hover">Login</Link>&nbsp;&nbsp;&nbsp;
                                    <Link as={Link} to="/help"  className="underline-hover">Help</Link>
                                </>
                            ) : (
                              <p>
                                {/* <Link as={Link} to="/help">Help</Link>&nbsp;&nbsp; */}
                                <img src={accountLogo} alt="Account Logo" className="account-logo" style={{ width: '40px', height: '40px', borderRadius: '50%', marginTop:'20%', }} onClick={handleShow}   />
                                </p>
                            )}
    
    </div>


   
    {/* <div style={{color:"#777", backgroundColor:"white",  padding:"50px 80px",textAlign:"justify"}}>
<h3 style={{textAlign:"center"}}>DOG'S</h3>
</div> */}

<Offcanvas show={show} onHide={handleClose} placement='top' scroll='true'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        Hi,
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p className="underline-hover" onClick={()=>navigate('/upload-pet-details')}>Add Pets</p><br/>
                    <p className="underline-hover">Personal Information</p><br/>
                    <p className="underline-hover">Orders</p><br/>
                    <p className="underline-hover">Saved Items</p><br/>
                    <p className="underline-hover">Purchases</p><br/><r/><br/>
                    <p className="underline-hover" style={{ color: '#808080' }} onClick={handleSignOut}>Sign out</p>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    )
}
export default Home;