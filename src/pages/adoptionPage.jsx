// AdoptionPage.js

import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './AdoptionPage.css'; // Import your CSS styles here
import Card from 'react-bootstrap/Card';


const AdoptionPage = () => {
  const location = useLocation();

  const petId = useParams();
  const [pet, setPet] = useState(null);
  const [pets, setPets] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [petShops,setPetShops]=useState([]);
  const id1 = JSON.stringify(petId);
  const [minAge, maxAge] = id1.split(':').map(String);
  const id3 = parseInt(maxAge);
  const navigate = useNavigate();
  let matches = maxAge.match(/\d+/g);

  useEffect(() => {
    const fetchPetDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8000/pets/${matches}`);
        if (!response.ok) {
          throw new Error('Failed to fetch pet details');
        }
        const data = await response.json();
        setPet(data.message);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching pet details:', error.message);
        setIsLoading(false);
      }
    };

    fetchPetDetails();
  }, [petId]);


  useEffect(() => {
    fetch("http://localhost:8000/getpetshop")
      .then(response => response.json())
      .then(data => {
        const petsWithStringShopId = data.message.map(pet => ({
          ...pet,
          shopId: JSON.stringify(pet.shopId) // Ensure shopId is a string
        }));
       
        setPetShops(petsWithStringShopId);
        setIsLoading(false);
      });
  }, [petId]);

  useEffect(() => {
    fetch("http://localhost:8000/dogsList")
      .then(response => response.json())
      .then(data => {
        const petsWithStringShopId = data.message.map(pet => ({
          ...pet,
          shopId:JSON.stringify(pet.shopId) // Ensure shopId is a string
        }));
        setPets(petsWithStringShopId);
        setIsLoading(false);
      });
  }, []);

  const handleViewPetsClick = (shopId) => {
    // Navigate to the shop's pet list page with the shop ID as a parameter
    navigate(`/petShops/${shopId}`);
  };

  const relatedPets = pets ? pets.filter(p => p.type === pet.type && p.id !== pet.id) : [];

  return (
    <div className="adoption-page-container">
      <br/><br/><br/><br/>
      {/* <h2 className="page-title">Adopt Now</h2> */}
      {isLoading ? (
        <p>Loading pet details...</p>
      ) : pet ? (
        // <div className="adoptionPet-details">
          
            // {pet.images.map((image, index) => (
            //   <img key={index} src={image} alt={`Pet ${index + 1}`} className="pet-image" />
            // ))}
          
        //   <div className="pet-info">
        //     <h3 className="pet-name">{pet.name}</h3>
        //     <p className="pet-type">Type: {pet.type}</p>
        //     <p className="pet-breed">Breed: {pet.breed}</p>
        //     <p className="pet-age">Age: {pet.age} years old</p>
        //     <p className="pet-description">{pet.description}</p>
        //     <div className="adoption-info">
        //       <p className="adoption-fee">Adoption Fee: ${pet.adoptionFee}</p>
        //       <p className="adoption-location">Location: {pet.location}</p>
        //       <p className="contact-info">Contact: {pet.contact}</p>
        //       <p className="contact-info">Owner: {pet.contact}</p>
        //     </div>
        //     <button className="adopt-button">Adopt {pet.name}</button>
        //   </div>
        // </div>

        <body>

    {/* <!-- breadcrumb start --> */}
    <div className="breadcrumb-section">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="page-title">
                        <h2>product</h2>
                    </div>
                </div>
                <div className="col-sm-6">
                    <nav aria-label="breadcrumb" className="theme-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">product</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- breadcrumb End -->


    <!-- section start --> */}
    <section>
        <div className="collection-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-10 col-xs-12">
                        <div className="product-right-slick">
                            <div><img src={pet.images[0]} alt=""
                                    className="img-fluid blur-up lazyload image_zoom_cls-0"/></div>
                        </div>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-12">
                        <div className="row">
                            <div className="col-12 p-0">
                                <div className="slider-right-nav" style={{borderRadius:"50%"}}>
                                        {pet.images.map((image, index) => (
            //   <img key={index} src={image} alt={`Pet ${index + 1}`} className="pet-image" />
             <> <img key={index} src={image} alt={`Pet ${index + 1}`} className="img-fluid blur-up lazyload"/> <br/></>
            ))}
                                    {/* <div> <img src={tanish} alt=""
                                            className="img-fluid blur-up lazyload"/></div>
                                    <div><img src="https://images-na.ssl-images-amazon.com/images/I/61paqOv2LuL._AC_UX569_.jpg" alt=""
                                            className="img-fluid blur-up lazyload"/></div>
                                    <div><img src="https://images-na.ssl-images-amazon.com/images/I/61paqOv2LuL._AC_UX569_.jpg" alt=""
                                            className="img-fluid blur-up lazyload"/></div>
                                    <div><img src="https://images-na.ssl-images-amazon.com/images/I/61paqOv2LuL._AC_UX569_.jpg" alt=""
                                            className="img-fluid blur-up lazyload"/></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 rtl-text">
                        <div className="product-right">
                            <h2>Name: {pet.name}</h2>
                            <h3>Type: {pet.type}</h3>
                            <h3>Breed: {pet.breed}</h3>
                            <h3>Age: {pet.age}</h3>
                            <h3 className="pet-shop">Shop: {petShops.find(shop => shop.id === parseInt(pet.shopId))?.name}</h3>
                            <h3>Price: {pet.price}</h3>
                            
                           
                            <div className="product-description border-product">
                                <div className="modal fade" id="sizemodal" tabindex="-1" role="dialog"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                               
                                                <button type="button" className="close" data-dismiss="modal"
                                                    aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                            </div>
                                            <div className="modal-body"><img src="../assets/images/size-chart.jpg" alt=""
                                                    className="img-fluid blur-up lazyload"/></div>
                                        </div>
                                    </div>
                                </div>
                               
                                <h6 className="product-title">quantity</h6>
                                <div className="qty-box">
                                    <div className="input-group"><span className="input-group-prepend"><button type="button"
                                                className="btn quantity-left-minus" data-type="minus" data-field=""><i
                                                    className="ti-angle-left"></i></button> </span>
                                        <input type="text" name="quantity" className="form-control input-number" value="1"/>
                                        <span className="input-group-prepend"><button type="button"
                                                className="btn quantity-right-plus" data-type="plus" data-field=""><i
                                                    className="ti-angle-right"></i></button></span></div>
                                </div>
                            </div>
                            <div className="product-buttons"><a href="#" data-toggle="modal" data-target="#addtocart"
                                    className="btn btn-solid">add to cart</a> <a href="#" className="btn btn-solid">buy now</a>
                            </div>
                            <div className="border-product">
                                <h6 className="product-title">product details</h6>
                                <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam
                                    voluptatem,</p>
                            </div>
                           
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Section ends -->


    <!-- product-tab starts --> */}
    <section className="tab-product m-0">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-12">
                    <ul className="nav nav-tabs nav-material" id="top-tab" role="tablist">
                        <li className="nav-item"><a className="nav-link active" id="top-home-tab" data-toggle="tab"
                                href="#top-home" role="tab" aria-selected="true">Description</a>
                            <div className="material-border"></div>
                        </li>
                        <li className="nav-item"><a className="nav-link" id="profile-top-tab" data-toggle="tab"
                                href="#top-profile" role="tab" aria-selected="false">Details</a>
                            <div className="material-border"></div>
                        </li>
                        <li className="nav-item"><a className="nav-link" id="contact-top-tab" data-toggle="tab"
                                href="#top-contact" role="tab" aria-selected="false">Video</a>
                            <div className="material-border"></div>
                        </li>
                        <li className="nav-item"><a className="nav-link" id="review-top-tab" data-toggle="tab"
                                href="#top-review" role="tab" aria-selected="false">Write Review</a>
                            <div className="material-border"></div>
                        </li>
                    </ul>
                    <div className="tab-content nav-material" id="top-tabContent">
                        <div className="tab-pane fade show active" id="top-home" role="tabpanel"
                            aria-labelledby="top-home-tab">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className="tab-pane fade" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <div className="single-product-tables">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Febric</td>
                                            <td>Chiffon</td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
                                            <td>Red</td>
                                        </tr>
                                        <tr>
                                            <td>Material</td>
                                            <td>Crepe printed</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Length</td>
                                            <td>50 Inches</td>
                                        </tr>
                                        <tr>
                                            <td>Size</td>
                                            <td>S, M, L .XXL</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                            <div className="mt-4 text-center">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/BUWzX78Ye_8"
                                    allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="top-review" role="tabpanel" aria-labelledby="review-top-tab">
                            <form className="theme-form">
                                <div className="form-row">
                                    <div className="col-md-12">
                                        <div className="media">
                                            <label>Rating</label>
                                            <div className="media-body ml-3">
                                                <div className="rating three-star"><i className="fa fa-star"></i> <i
                                                        className="fa fa-star"></i> <i className="fa fa-star"></i> <i
                                                        className="fa fa-star"></i> <i className="fa fa-star"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="name">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter Your name"
                                            required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="email">Email</label>
                                        <input type="text" className="form-control" id="email" placeholder="Email" required/>
                                    </div>
                                    <div className="col-md-12">
                                        <label for="review">Review Title</label>
                                        <input type="text" className="form-control" id="review"
                                            placeholder="Enter your Review Subjects" required/>
                                    </div>
                                    <div className="col-md-12">
                                        <label for="review">Review Title</label>
                                        <textarea className="form-control" placeholder="Wrire Your Testimonial Here"
                                            id="exampleFormControlTextarea1" rows="6"></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-solid" type="submit">Submit YOur Review</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- product-tab ends -->


    <!-- product section start --> */}
    <section className="section-b-space ratio_asos">
        <div className="container">
            <div className="row">
                <div className="col-12 product-related">
                    <h2>Related Pets</h2>
                </div>
            </div>

           < div className="pet-shop-list grid grid-cols-3 gap-4" >
            {relatedPets.length > 0 ?( 
                relatedPets.map((relatedPets)=>(
                    <Card style={{ width: '18rem' }}>
                {/* {pets.find(pets=>pets.type == pet.type)?setPets(pets):("no pets related to this type")} */}
      <Card.Img variant="top" src={relatedPets.images} />
      <Card.Body>
        <Card.Title>{relatedPets.name}</Card.Title>
        <Card.Title>Location: {petShops.find(shop => shop.id === parseInt(relatedPets.shopId))?.location}</Card.Title>
        <Card.Title>Age: {relatedPets.age}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button className="view-pets-button" onClick={() => handleViewPetsClick(petShops.id)}>View Pets</button>
      </Card.Body>
    </Card>

                ))
                
):(<p>no relatated pets</p>)}
</div>
           
        </div>
    </section>
    {/* <!-- product section end --> */}

</body>
      ) : (
        <p>Pet not found</p>
      )}
     
      

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></meta>
    <meta http-equiv="X-UA-Co mpatible" content="IE=edge"></meta>
    <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    <meta name="description" content="multikart"></meta>
    <meta name="keywords" content="multikart"></meta>
    <meta name="author" content="multikart"></meta>
    <link rel="icon" href="../assets/images/favicon/1.png" type="image/x-icon"/>
    <link rel="shortcut icon" href="../assets/images/favicon/1.png" type="image/x-icon"/>
    <title>Product Detail Page</title>

    {/* <!--Google font--> */}
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet"/>

    {/* <!-- Icons --> */}
    <link rel="stylesheet" type="text/css" href="../assets/css/fontawesome.css"/>

    {/* <!--Slick slider css--> */}
    <link rel="stylesheet" type="text/css" href="../assets/css/slick.css"/>
    <link rel="stylesheet" type="text/css" href="../assets/css/slick-theme.css"/>

    {/* <!-- Animate icon --> */}
    <link rel="stylesheet" type="text/css" href="../assets/css/animate.css"/>
{/* 
    <!-- Themify icon --> */}
    <link rel="stylesheet" type="text/css" href="../assets/css/themify-icons.css"/>


    {/* <!-- Theme css --> */}
    <link rel="stylesheet" type="text/css" href="../assets/css/color1.css" media="screen" id="color"/>

</head>



    </div>
  );
};

export default AdoptionPage;
