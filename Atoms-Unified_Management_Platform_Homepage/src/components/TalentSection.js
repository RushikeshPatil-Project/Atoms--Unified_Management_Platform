import React from 'react';
import './TalentSection.css';
import images1 from './images1.jpeg';
import images2 from './images2.jpeg';
import images3 from './images3.jpeg';
import images from './images.jpeg';

const TalentSection = () => {
  return (
    <section className="talent-section">
      <div className="talent-content">
        <h2>"Streamline Your Exam and Project<br />
          <span> Workflows with Our Unified Solution."</span>
        </h2>
        <p>
        Seamlessly manage exams and projects with our all-in-one platform. Boost efficiency and achieve excellence in both domains effortlessly.
        </p>
      </div>
      <div className="talent-images">
        <div className="card">
          <img src={images} alt="Learn" />
        </div>
        <div className="card">
          <img src={images1} alt="Practice" />
        </div>
        <div className="card">
          <img src={images2} alt="Jobs" />
        </div>
        <div className="card">
          <img src={images3} alt="Compete" />
        </div>
      </div>
    </section>
  );
};

export default TalentSection;
