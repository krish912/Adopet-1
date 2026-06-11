import { Height } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './contactOnl.css';
import { useState } from 'react';

function ContactOn(){
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        const requestOption={
          method:'POST',
          headers:{'content-Type':'application/json'},
          body:JSON.stringify(form)
        };
        fetch('https://adopet-1-server.onrender.com/contactus',requestOption)
        .then(response=>response.json())
        .then(data=>{
          setForm({ name: '', email: '', message: ''});
          
        });
      }
    return(
        <div>   
         <section className="contact_us">
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="contact_inner">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="contact_form_inner">
                                    <div className="contact_field">
                                        <h3>Contact Us</h3>
                                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                        <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name'
                         className="form-control form-group"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                                        <input
                        type="email"
                        id="email"
                        placeholder='Email'
                        name="email"
                         className="form-control form-group"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                                       <textarea
                        id="message"
                        name="message"
                        placeholder='Message'
                         className="form-control form-group"
                        value={form.message}
                        onChange={handleChange}
                        required
                    ></textarea>  
                                        <button type="submit" className="contact_form_submit" onClick={handleSubmit}>Send</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 " >
                                <div className="right_conatct_social_icon d-flex align-items-end" >
                                   <div className="socil_item_inner d-flex" >
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                        <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />&nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                        <a href="https://www.instagram.com/anime_jar_" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                           </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact_info_sec" style={{color:"white", justifyContent:"center"}}>
                            <h4>Contact Info</h4>
                            <div className="d-flex info_single align-items-center">
                               
                                <span>+91 94991 86869</span>
                            </div>
                            <div className="d-flex info_single align-items-center">
                               
                                <span>Adopet@gmail.com</span>
                            </div>
                            <div className="d-flex info_single align-items-center">

                                <span>1000+ shop partners and 65+ Service city across India, USA, Canada & UAE</span>
                            </div>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="map_sec">
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="map_inner">
                        <h4>Find Us on Google Map</h4>
                        <p>It is very important for the customer to pay attention to the adipiscing process. At the time when the blessed, as it were, should be assumed, some small expedient is held by the elders, nor does it repel the incidents, or the pleasure here follows the pain from further on, because it is an error.</p>
                        <div className="map_bind">
                        <iframe
                    title="Adopet Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1735.64703842544!2d75.02157925079435!3d29.536929060823894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114c56352e026f%3A0xd3cc5dff694a7119!2sC%20Block%2C%20E%20Block%2C%20Sirsa%2C%20Haryana%20125055%2C%20India!5e0!3m2!1sen!2sus!4v1717565313961!5m2!1sen!2sus"
                    width="1000"
                    height="450"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
        </div>
    )
}
export default ContactOn;