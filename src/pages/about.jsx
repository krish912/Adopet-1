// client/src/components/AboutUs.js

import React from 'react';
import '../pages/about.css'
import tnsh from '../assets/images/tanish.jpg'
import krsh from '../assets/images/krish arora.jpg'
import krishgrover from '../assets/images/krish grover.jpg'
import sumit from '../assets/images/sumit.jpg'
import Gourav from '../assets/images/gourav.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
    return (
       
        // <div className="about-container">
        //      <br/><br/><br/><br/><br/><br/>
        //     <h1>About Us</h1>
        //     <section className="mission">
        //         <h2>Our Mission</h2>
        //         <p>
        //             At Adopet, our mission is to connect loving families with homeless pets in need of forever homes. We believe every animal deserves a chance to be loved and cared for, and we strive to make the adoption process as smooth and rewarding as possible.
        //         </p>
        //     </section>
        //     <section className="team">
        //         <h2>Meet Our Team</h2>
        //         <div className="team-member">
        //             <img src="https://via.placeholder.com/150" alt="Team Member 1" />
        //             <h3>Krish Arora</h3>
        //             <p>Founder & CEO</p>
        //             <p>Jane founded Adopet with a vision to reduce the number of homeless pets through compassionate adoption services.</p>
        //         </div>
        //         <div className="team-member">
        //             <img src="https://via.placeholder.com/150" alt="Team Member 2" />
        //             <h3>Sumit Saini</h3>
        //             <p>Chief Operations Officer</p>
        //             <p>John oversees daily operations, ensuring every pet gets the care and attention they need.</p>
        //         </div>
        //         <div className="team-member">
        //             <img src="https://via.placeholder.com/150" alt="Team Member 3" />
        //             <h3>Tanish Phutela</h3>
        //             <p>Adoption Specialist</p>
        //             <p>Emily works directly with families to find the perfect match for both the pet and the adopter.</p>
        //         </div>
        //         <div className="team-member">
        //             <img src="https://via.placeholder.com/150" alt="Team Member 3" />
        //             <h3>Gourav Bansal</h3>
        //             <p>Adoption Specialist</p>
        //             <p>Emily works directly with families to find the perfect match for both the pet and the adopter.</p>
        //         </div>
        //         <div className="team-member">
        //             <img src="https://via.placeholder.com/150" alt="Team Member 3" />
        //             <h3>Krish Grover</h3>
        //             <p>Adoption Specialist</p>
        //             <p>Emily works directly with families to find the perfect match for both the pet and the adopter.</p>
        //         </div>
        //     </section>
           

        //     <footer className="footer">
        //         <div className="footer-content">
        //         <section className="story">
        //         <h2>Our Story</h2>
        //         <p>
        //             Adopet was born out of a deep love for animals and a desire to help those in need. Our journey began in 2015 when our founder, Jane Doe, rescued a stray dog from the streets.
        //              This experience opened her eyes to the plight of homeless animals and inspired her to create a platform that would make it easier for people to adopt pets. Over the years, Adopet has grown into a trusted resource for pet adoption, helping thousands of animals find their forever homes.
        //         </p>
        //     </section>
        //             <h3>Follow Us</h3>
        //             <div className="social-icons" style={{display:"flex", justifyContent:"space-between", marginLeft: "35%", marginRight: "35%", marginBottom: "90%", height: "78px",alignItems: "center"}}>
        //                 <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        //                     <FontAwesomeIcon icon={faFacebook} size="2x" />
        //                 </a>
        //                 <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
        //                     <FontAwesomeIcon icon={faTwitter} size="2x" />
        //                 </a>
        //                 <a href="https://www.instagram.com/anime_jar_" target="_blank" rel="noopener noreferrer">
        //                     <FontAwesomeIcon icon={faInstagram} size="2x" />
        //                 </a>
        //                 <a href="https://www.linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer">
        //                     <FontAwesomeIcon icon={faLinkedin} size="2x" />
        //                 </a>

        //             </div>
        //         </div>
        //     </footer>
            
        // </div>
    <>
    
<section className="section_all bg-light" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title_all text-center" style={{ marginTop: "80px" }}>
                            
                            <h2 className="font-weight-bold">Welcome To <span className="text-custom" style={{color:"green"}} >Adopet</span></h2>
                            <p className="section_subtitle mx-auto text-muted"> At Adopet, our mission is to connect loving families with homeless pets in need of forever homes.<br/> We believe every animal deserves a chance to be loved and cared for, and we strive to make the adoption process as smooth and rewarding as possible.</p>
                            <div className="">
                                <i className=""></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row vertical_content_manage mt-5">
                    <div className="col-lg-6">
                        <div className="about_header_main mt-3">
                            <div className="about_icon_box">
                                <p className="text_custom font-weight-bold">Adopet is simply pet adoption platform</p>
                            </div>
                            <h4 className="about_heading text-capitalize font-weight-bold mt-4" style={{marginLeft:"9%"}}> "Open Your Heart, Open Your Home: Adopt a Loving Pet Today"</h4>
                            <p className="text-muted mt-3"> <h2>Our Story</h2>
              <p>
                     Adopet was born out of a deep love for animals and a desire to help those in need. Our journey began in 2024 when our founder, Krish Arora, rescued a stray dog from the streets.
                      This experience opened her eyes to the plight of homeless animals and inspired her to create a platform that would make it easier for people to adopt pets. Over the years, Adopet has grown into a trusted resource for pet adoption, helping thousands of animals find their forever homes.
         </p></p>

                            {/* <p className="text-muted mt-3"> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img_about mt-3">
                            <img src="https://plus.unsplash.com/premium_photo-1661767457794-efc1f30cce8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVtb3Rpb25hbCUyMGxvdmUlMjBwZXQlMjBhbmQlMjBraWRzJTIwaW4lMjBob21lfGVufDB8fDB8fHww" alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </div>
                </div>
                <h2>Meet Our Team</h2>
                <div className="row mt-3">
                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                    <img className="fas fa-pencil-alt" style={{borderRadius:"50%"}} src={krsh}></img>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Krish Arora</h5>
                                <p className="edu_desc mt-3 mb-0 text-muted"  style={{lineHeight:"40px"}}> <b>Full Stack Developer</b></p>
                                 <p> Krish Arora, our group leader, played a key role in developing our website's frontend, ensuring a user-friendly interface and seamless navigation, and also managed the backend.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                    <img className="fab fa-angellist" src={Gourav} style={{borderRadius:"50%"}}></img>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Gourav Bansal</h5>
                            <p className="edu_desc mb-0 mt-3 text-muted"  style={{lineHeight:"40px"}}> <b> Creative Director</b> <br/></p>
                             <p>
                             Gourav has brought innovative ideas and creativity to our project, significantly shaping the overall design aesthetic and enhancing the user experience.
 </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                    <img className="fab fa-angellist" src={krishgrover} style={{borderRadius:"50%"}}></img>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Krish Grover</h5>
                                <p className="edu_desc mb-0 mt-3 text-muted"  style={{lineHeight:"40px"}}><b> Creative Director</b> <br/></p>
                        <p> Krish Grover and Gourav has contributed to the creative direction of our project, infusing it with unique and engaging elements to captivate our audience
industry. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4" style={{marginLeft:"16%"}}>
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                    <img className="fab fa-angellist" src={sumit} style={{borderRadius:"50%"}}></img>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Sumit Saini</h5>
                                <p className="edu_desc mb-0 mt-3 text-muted" style={{lineHeight:"40px"}}><b>Frontend Developer </b> </p>
                                <p >Sumit has collaborated closely with Krish Arora in the frontend development, significantly contributing to both the design and functionality of our website.
 </p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                    <img className="fas fa-paper-plane" style={{borderRadius:"50%"}} src={tnsh}></img>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Tanish Phutela </h5>
                                <p className="edu_desc mb-0 mt-3 text-muted"  style={{lineHeight:"40px"}}> <b>Backend Developer</b></p>
 <p>Tanish Phutela has been instrumental in developing the backend of our website, implementing server-side logic and ensuring data management efficiency.
industry. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};


export default AboutUs;
