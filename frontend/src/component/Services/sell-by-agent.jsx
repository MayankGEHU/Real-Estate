import React from 'react';
import '../Services/SellByAgent.css';
import defaultImage from '../../assets/author.jpg';

function SellByAgent() {
  const agents = [
    {
      name: "Sam Shaffer",
      company: "Chicago Properties",
      priceRange: "$110K - $4.9M",
      sales: "122 team sales last 12 months",
      rating: "5.0",
      reviews: "(807)",
      badge: "Top Agent",
      imageUrl: defaultImage, 
    },
    {
      name: "Vesta Preferred Realty",
      company: "Vesta Preferred, LLC",
      priceRange: "$20K - $2.9M",
      sales: "432 team sales last 12 months",
      rating: "5.0",
      reviews: "(646)",
      badge: "Top Agent",
      imageUrl: defaultImage, 
    },
    {
      name: "Vesta Preferred Realty",
      company: "Vesta Preferred, LLC",
      priceRange: "$20K - $2.9M",
      sales: "432 team sales last 12 months",
      rating: "5.0",
      reviews: "(646)",
      badge: "Top Agent",
      imageUrl: defaultImage, 
    },
    {
      name: "Vesta Preferred Realty",
      company: "Vesta Preferred, LLC",
      priceRange: "$20K - $2.9M",
      sales: "432 team sales last 12 months",
      rating: "5.0",
      reviews: "(646)",
      badge: "Top Agent",
      imageUrl: defaultImage, 
    },
    {
      name: "Vesta Preferred Realty",
      company: "Vesta Preferred, LLC",
      priceRange: "$20K - $2.9M",
      sales: "432 team sales last 12 months",
      rating: "5.0",
      reviews: "(646)",
      badge: "Top Agent",
      imageUrl: defaultImage, 
    },
    {
      name: "Vesta Preferred Realty",
      company: "Vesta Preferred, LLC",
      priceRange: "$20K - $2.9M",
      sales: "432 team sales last 12 months",
      rating: "5.0",
      reviews: "(646)",
      badge: "Top Agent",
      imageUrl: defaultImage, 
    },
    {
      name: "Vesta Preferred Realty",
      company: "Vesta Preferred, LLC",
      priceRange: "$20K - $2.9M",
      sales: "432 team sales last 12 months",
      rating: "5.0",
      reviews: "(646)",
      badge: "Top Agent",
      imageUrl: defaultImage, 
    },
    {
      name: "Vesta Preferred Realty",
      company: "Vesta Preferred, LLC",
      priceRange: "$20K - $2.9M",
      sales: "432 team sales last 12 months",
      rating: "5.0",
      reviews: "(646)",
      badge: "Top Agent",
      imageUrl: defaultImage, 
    },

  ];

  return (
    <div className="sell-by-agent-container">
      <div className="background-image">
        <div className="overlay-text">
          <h1>A great agent makes all the difference</h1>
        </div>
        <div className="search-bar">
          <p>Find a real estate agent</p>
          <div className="search-options">
            <button className="tab active">Location</button>
            <button className="tab">Name</button>
          </div>
          <div className="search-input">
            <input type="text" placeholder="City, neighborhood, or ZIP code" />
            <button className="search-button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="agent-listing-page">
        <h2>Real Estate Agents in Chicago, IL</h2>
        <p>With over a million agents from all the top brokerages, a local agent knows your market and can guide you through the process from start to finish.</p>
        
        <div className="agent-cards">
          {agents.map((agent, index) => (
            <div className="agent-card" key={index}>
              <div className="agent-card-header">
                <img src={agent.imageUrl} alt={`${agent.name} profile`} className="agent-image" />
                <div className="badge">{agent.badge}</div>
              </div>
              <div className="agent-details">
                <h3>{agent.name}</h3>
                <p>{agent.company}</p>
                <p className="price-range">{agent.priceRange}</p>
                <p className="sales">{agent.sales}</p>
                <div className="rating">
                  <span>{agent.rating}</span>
                  <span className="reviews">{agent.reviews}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SellByAgent;
