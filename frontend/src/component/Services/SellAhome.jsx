import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Services/SellAhome.css';
import homeimage from '../../assets/home-image.jpg';
import sellwithAgent from '../../assets/sell-with-agent.png';
import sellbyyourself from '../../assets/sellyourself.jpg'

function SellAhome() {
  const navigate = useNavigate();

  const handleFindAgentClick = () => {
    navigate('/sell-by-agent');
  };

  const handlePostYourHomeClick = () => {
    navigate('/sell_by_yourself');
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
        <div className="info-item">
          <h2>14 Lakh+</h2>
          <p>Seller community</p>
        </div>
        <div className="info-item">
          <h2>24×7</h2>
          <p>Online Business</p>
        </div>
        <div className="info-item">
          <h2>7</h2>
          <p>days* payment</p>
        </div>
        <div className="info-item">
          <h2>19000+</h2>
          <p>Pincodes served</p>
        </div>
      </div>

      <div className="sell-with-agent-page">
        <div className="main-container-for-sell-with-agent">
          <div className="left-container-for-sell-with-agent">
            <div className="text-container-for-sell-with-agent">
              <h1>Sell traditionally with an agent</h1>
              <p>
                Not in a market with Zillow's new selling experience? Work with
                a real estate agent for selling support at every step, including
                prepping, listing, and marketing your home.
              </p>
            </div>
            <div className="button-container-for-sell-with-agent">
              <button onClick={handleFindAgentClick} >Find an agent</button>
            </div>
            <div className="lower-text-container-for-sell-with-agent">
              <h2>Why sell traditionally</h2>
              <ul>
                <li>Potential for bidding wars</li>
                <li>Access to local market expertise</li>
                <li>Get help negotiating and reviewing offers</li>
                <li>Navigate a stressful process with a dedicated guide</li>
              </ul>
            </div>
          </div>
          <div className="right-container-for-sell-with-agent">
            <img src={sellwithAgent} alt="Sell with Agent" />
          </div>
        </div>
      </div>

      <div className="sell-with-yourself-page">
        <div className="main-container-for-sell-with-yourself">
          <div className="left-container-for-sell-with-yourself">
            <div className="text-container-for-sell-with-yourself">
              <h1>Sell your home yourself</h1>
              <p>
                Deciding to sell your home yourself is referred to as
                for-sale-by-owner (FSBO). The FSBO process is similar to
                traditional selling, but without the help of a real estate
                agent. In this case, you’re responsible for the home prep,
                marketing, showings, and negotiations.
              </p>
            </div>
            <div className="buttoncontainer-for-sell-with-yourself">
              <button onClick={handlePostYourHomeClick}>Post your home for sale</button>
            </div>
            <div className="lowertextcontainer-for-sell-with-yourself">
              <h2>Why sell FSBO</h2>
              <ul>
                <li>Avoid paying a listing agent commission</li>
                <li>Advertise your listing for free on Zillow</li>
                <li>Flexibility and control from start to finish</li>
              </ul>
            </div>
          </div>
          <div className="right-container-for-sell-with-yourself">
            <img src={sellbyyourself} alt="sell-with-yourself" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellAhome;
