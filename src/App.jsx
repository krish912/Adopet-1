import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './pages/AuthContext';

import Home from './pages/home';
import Demo from './pages/login';
import ProductList from './pages/productList';
import AdoptionPage from './pages/adoptionPage';
import PetForm from './pages/petForm';
import Header from './pages/header';
import UploadPetDetails from './pages/UploadPetDetails';
import AboutUs from './pages/about';
import PetShopList from './pages/petShopList';
import PetShopDetail from './pages/petshopDetails';
import ContactOn from './pages/contactOnl';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ConditionalHeader />
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Dogs' element={<ProductList />} />
            <Route path='/contact' element={<ContactOn/>} />
            <Route path='/about' element={< AboutUs/>} />
            <Route path='/login' element={<Demo />} />
          

            <Route path="/pets/:petId" element={<AdoptionPage />} />
            <Route path="/petform" element={<PetForm />} />
            {/* <Route path="/offcanva" element={< Example/>} /> */}
            <Route path="/upload-pet-details" element={<UploadPetDetails />} />
            <Route path="/petShops" element={<PetShopList />} />
            <Route path="/petShops/:shopId" element={<PetShopDetail />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

// Component to conditionally render Header
const ConditionalHeader = () => {
  const location = useLocation();
  const noHeaderRoutes = ['/']; // Add any other routes where you don't want the Header to appear

  return !noHeaderRoutes.includes(location.pathname) ? <Header /> : null;
}

// const PetFormPage = () => {
//   const handlePetSubmit = (newPet) => {
//     // Handle pet submission logic here, possibly redirect back to ProductList
//      setPets([...pets, { ...newPet, id: pets.length + 1 }]);
//     console.log(newPet);
//   };

//   return <PetForm onPetSubmit={handlePetSubmit} />;
// };

export default App;
