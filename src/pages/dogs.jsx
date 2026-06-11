import dg1 from '../assets/images/dog1.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Header from "./header"
import { useEffect, useState } from 'react';

export function Dogs() {

  const[dogslist,setDogs]=useState({});

useEffect(()=>{
  const requestOption={
    method:'GET',
    headers:{'content-type':'application/json'},
    body:"okk"
  };
  fetch("https://adopet-1-server.onrender.com/dogsList")
  .then(Response=>Response.json())
  .then(data=>{
    // alert(data.message)
    setDogs(data.message)
  })
},[])
  




  return (
    <div >

      <Header /><br /><br/><br/><br/>

      <Breadcrumb className='container ml-4'>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="http://localhost:3000">Dogs</Breadcrumb.Item>
    </Breadcrumb>

     { console.log(dogslist)}
      <div className="container mt-2">
      <div className="row">
      {dogslist.length>0?dogslist.map(item=>(
         <div key={dogslist.id} className="col-md-4 mb-4">
           <Card >
             <Card.Img variant="top" src={dg1} />
             <Card.Body>
               <Card.Title>{item.name}</Card.Title>
               <Card.Text>
                 <p><b>BREED:&nbsp;</b>{item.breed}<br/>
                 <b>AGE:&nbsp;</b>{item.age}</p>
               </Card.Text>
               <Button variant="primary">Go somewhere</Button>
             </Card.Body>
           </Card>   
           </div>     
      )):<h1>no data found</h1>}
        </div>
        
         </div> 

<div className="container mt-5">
      <div className="row">
        {dogslist.length>0?dogslist.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={dg1} // Assuming 'image_url' is a property in your product object
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">Name:{product.name}</h5>
                <p className="card-text">Breed:{product.breed}</p>
                <p className="card-text">Age:{product.age}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        )):"nodata"}
      </div>
    </div>

    </div>
  )
}