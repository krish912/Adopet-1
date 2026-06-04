import React, { useState } from 'react';

const ProductFilter = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  // Function to handle category filter change
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterProducts(category, selectedPriceRange);
  };

  // Function to handle price range filter change
  const handlePriceRangeChange = (event) => {
    const priceRange = event.target.value;
    setSelectedPriceRange(priceRange);
    filterProducts(selectedCategory, priceRange);
  };

  // Function to filter products based on selected category and price range
  const filterProducts = (category, priceRange) => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h2>Filters</h2>
      <div>
        <label htmlFor="categoryFilter">Category:</label>
        <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="priceRangeFilter">Price Range:</label>
        <select id="priceRangeFilter" value={selectedPriceRange} onChange={handlePriceRangeChange}>
          <option value="">All</option>
          <option value="0-50">$0 - $50</option>
          <option value="51-100">$51 - $100</option>
          {/* Add more price range options */}
        </select>
      </div>

      <h2>Filtered Products</h2>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
