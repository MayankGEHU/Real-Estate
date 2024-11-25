import React from "react";
import { useNavigate } from "react-router-dom";
import "../Services/SellAhome.css";
import homeimage from "../../assets/home-image.jpg";
import sellwithAgent from "../../assets/sell-with-agent.png";
import sellbyyourself from "../../assets/sellyourself.jpg";

const infoData = [
  { value: "14 Lakh+", description: "Seller community" },
  { value: "24×7", description: "Online Business" },
  { value: "7", description: "days* payment" },
  { value: "19000+", description: "Pincodes served" },
];

const sellOptions = [
  {
    title: "Sell traditionally with an agent",
    description: `Not in a market with Zillow's new selling experience? Work with a real estate agent for selling support at every step, including prepping, listing, and marketing your home.`,
    buttonText: "Find an agent",
    buttonAction: "/sell-by-agent",
    whySellTitle: "Why sell traditionally",
    reasons: [
      "Potential for bidding wars",
      "Access to local market expertise",
      "Get help negotiating and reviewing offers",
      "Navigate a stressful process with a dedicated guide",
    ],
    image: sellwithAgent,
  },
  {
    title: "Sell your home yourself",
    description: `Deciding to sell your home yourself is referred to as for-sale-by-owner (FSBO). The FSBO process is similar to traditional selling, but without the help of a real estate agent. In this case, you’re responsible for the home prep, marketing, showings, and negotiations.`,
    buttonText: "Post your home for sale",
    buttonAction: "/sell_by_yourself",
    whySellTitle: "Why sell FSBO",
    reasons: [
      "Avoid paying a listing agent commission",
      "Advertise your listing for free on Zillow",
      "Flexibility and control from start to finish",
    ],
    image: sellbyyourself,
  },
];

function SellAhome() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="main-section-container">
        <div className="left-side-container">
          <div className="text-container-for-sell-home">
            <h1>Become a Real Estate seller and sell to our customers</h1>
          </div>
        </div>
        <div className="right-side-container">
          <img src={homeimage} alt="Real Estate" className="banner-image" />
        </div>
      </div>

      <div className="info-section">
        {infoData.map((item, index) => (
          <div className="info-item" key={index}>
            <h2>{item.value}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      {sellOptions.map((option, index) => (
        <div
          className={`sell-with-${index === 0 ? "agent" : "yourself"}-page`}
          key={index}
        >
          <div
            className={`main-container-for-sell-with-${
              index === 0 ? "agent" : "yourself"
            }`}
          >
            <div
              className={`left-container-for-sell-with-${
                index === 0 ? "agent" : "yourself"
              }`}
            >
              <div
                className={`text-container-for-sell-with-${
                  index === 0 ? "agent" : "yourself"
                }`}
              >
                <h1>{option.title}</h1>
                <p>{option.description}</p>
              </div>
              <div
                className={`button-container-for-sell-with-${
                  index === 0 ? "agent" : "yourself"
                }`}
              >
                <button onClick={() => handleButtonClick(option.buttonAction)}>
                  {option.buttonText}
                </button>
              </div>
              <div
                className={`lower-text-container-for-sell-with-${
                  index === 0 ? "agent" : "yourself"
                }`}
              >
                <h2>{option.whySellTitle}</h2>
                <ul>
                  {option.reasons.map((reason, i) => (
                    <li key={i}>{reason}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className={`right-container-for-sell-with-${
                index === 0 ? "agent" : "yourself"
              }`}
            >
              <img
                src={option.image}
                alt={`Sell with ${index === 0 ? "agent" : "yourself"}`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SellAhome;
