import React from 'react';
import './Service.css';
import IMS2 from './IMS2.jpg'
import pmsservice from './pmsservice.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Service = () => {
  return (
    <div>      
            <section className="card-container">
          <div className="card">
              <img src={IMS2} alt="Card Image 1"/>
              <div className="card-content">
                  <h3>Exam Service Tool</h3>
                  <p>Our Exam Service Tool helps in automating and streamlining all the operations of an educational
              institution, from student enrollment to managing courses, faculty, and administration.
</p>
                  <a href="#" className="btn">Get Started</a>
              </div>
          </div>
          
          <div className="card">
              <img src={pmsservice} alt="Card Image 2"/>
              <div className="card-content">
                  <h3>Project Service Tool</h3>
                  <p>Our Project Service Tool provides the necessary tools to plan, execute, and monitor projects
              efficiently. It ensures timely completion, resource management, and collaboration among team members.
</p>
                  <a href="#" className="btn">Get Started</a>
              </div>
          </div>
          
         
      </section>
            
          
          
          </div>
  );
};

export default Service;