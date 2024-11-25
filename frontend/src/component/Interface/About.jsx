import React from "react";
import Image1 from "../../assets/about-banner-1.png";
import Image2 from "../../assets/about-banner-2.jpg";
import {
  HomeOutline,
  LeafOutline,
  WineOutline,
  LockClosedOutline,
} from "react-ionicons";

const aboutItems = [
  {
    icon: <HomeOutline color={"#ff5a3d"} />,
    text: "Smart Home Design",
  },
  {
    icon: <LeafOutline color={"#ff5a3d"} />,
    text: "Beautiful Scene Around",
  },
  {
    icon: <WineOutline color={"#ff5a3d"} />,
    text: "Exceptional Lifestyle",
  },
  {
    icon: <LockClosedOutline color={"#ff5a3d"} />,
    text: "Complete 24/7 Security",
  },
];

const aboutContent = {
  subtitle: "About Us",
  title: "The Leading Real Estate Rental Marketplace.",
  description:
    "Over 39,000 people work for us in more than 70 countries all over the world. This breadth of global coverage, combined with specialist services.",
  callout:
    '"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus impedit, accusantium sint."',
  buttonText: "Our Services",
  buttonLink: "#service",
};

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <figure className="about-banner">
          <img src={Image1} alt="House interior" />
          <img src={Image2} alt="House interior" className="abs-img" />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">{aboutContent.subtitle}</p>
          <h2 className="h2 section-title">{aboutContent.title}</h2>
          <p className="about-text">{aboutContent.description}</p>

          <ul className="about-list">
            {aboutItems.map((item, index) => (
              <li className="about-item" key={index}>
                <div className="about-item-icon">{item.icon}</div>
                <p className="about-item-text">{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="callout">{aboutContent.callout}</p>
          <a href={aboutContent.buttonLink} className="btn">
            {aboutContent.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
