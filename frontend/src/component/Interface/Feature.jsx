import React from 'react';
import { 
  ArrowForwardOutline, 
  CarSportOutline, 
  WaterOutline, 
  ShieldCheckmarkOutline, 
  FitnessOutline, 
  LibraryOutline, 
  BedOutline, 
  HomeOutline, 
  FootballOutline 
} from 'react-ionicons';

const iconComponents = {
  "car-sport-outline": CarSportOutline,
  "water-outline": WaterOutline,
  "shield-checkmark-outline": ShieldCheckmarkOutline,
  "fitness-outline": FitnessOutline,
  "library-outline": LibraryOutline,
  "bed-outline": BedOutline,
  "home-outline": HomeOutline,
  "football-outline": FootballOutline,
};

const FeaturesSection = () => {
  const features = [
    { icon: "car-sport-outline", title: "Parking Space" },
    { icon: "water-outline", title: "Swimming Pool" },
    { icon: "shield-checkmark-outline", title: "Private Security" },
    { icon: "fitness-outline", title: "Medical Center" },
    { icon: "library-outline", title: "Library Area" },
    { icon: "bed-outline", title: "King Size Beds" },
    { icon: "home-outline", title: "Smart Homes" },
    { icon: "football-outline", title: "Kid’s Playland" },
  ];

  return (
    <section className="features">
      <div className="container">
        <p className="section-subtitle">Our Amenities</p>
        <h2 className="h2 section-title">Building Amenities</h2>
        <ul className="features-list">
          {features.map((feature, index) => {
            const IconComponent = iconComponents[feature.icon];
            return (
              <li key={index}>
                <a href="#" className="features-card">
                  <div className="card-icon">
                    <IconComponent color={'#ff5a3d'} height="50px" width="50px" />
                  </div>
                  <h3 className="card-title">{feature.title}</h3>
                  <div className="card-btn">
                    <ArrowForwardOutline color={'#738487'} height="20px" width="20px" />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
