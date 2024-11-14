import React, { useState } from "react";
import "../Interface/Searchpop.css"

function SearchBar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [bhk, setBhk] = useState("");

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  const handleSearch = () => {
    console.log("Searching with:", { location, city, propertyType, budget, bhk });

    setIsPopupOpen(false);
  };

  return (
    <div className="search-bar">
      <button className="search-button" onClick={togglePopup}>
        search
      </button>

      {isPopupOpen && (
        <div className="popup">
          <h2>search</h2>
          
          <div className="popup-field">
            <label>Location:</label>
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="popup-field">
            <label>City:</label>
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="popup-field">
            <label>Property Type:</label>
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="">Choose property type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Independent House">Independent House</option>
              <option value="Plot">Plot</option>
            </select>
          </div>

          <div className="popup-field">
            <label>Max Budget:</label>
            <input
              type="number"
              placeholder="Enter budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>

          <div className="popup-field">
            <label>BHK:</label>
            <select value={bhk} onChange={(e) => setBhk(e.target.value)}>
              <option value="">Choose BHK</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
            </select>
          </div>

          <button className="search-submit" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}
    </div>
  );
}

export default SearchBar;