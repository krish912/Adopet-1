import React, { useState } from 'react';
import './petForm.css'

const PetForm = ({ onPetSubmit }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input fields
    if (!name || !breed || !age || !image) {
      alert('Please fill out all fields.');
      return;
    }

    // Create new pet object
    const newPet = {
      name,
      breed,
      age: parseInt(age),
      image
    };

    // Call parent component function to handle pet submission
    onPetSubmit(newPet);

    // Clear form fields after submission
    setName('');
    setBreed('');
    setAge('');
    setImage('');
  };

  return (
    <div>
        <br/><br/><br/><br/><br/><br/>
    <div className="pet-form-container">
      <h2>Add a Pet for Adoption</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pet Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} required />
        <input type="number" placeholder="Age (years)" value={age} onChange={(e) => setAge(e.target.value)} required />
        <input type="url" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default PetForm;
