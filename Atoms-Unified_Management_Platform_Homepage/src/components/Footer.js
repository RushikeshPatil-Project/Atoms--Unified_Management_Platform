// import React from 'react';
// import './Footer.css';
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row">
//           {/* <div className="col-md-4">
//             <h5>About Us</h5>
//             <p>
//               Institute Management System is a comprehensive platform designed to
//               streamline the operations of educational institutions.
//             </p>
//           </div> */}
//           <div className="col-md-4">
//             <h5>Quick Links</h5>
//             <ul>
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">About Us</a>
//               </li>
//               <li>
//                 <a href="#">Contact Us</a>
//               </li>
//               <li>
//                 <a href="#">Login</a>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-4">
//             <h5>Contact Us</h5>
//             <p>
//               <i className="fas fa-map-marker-alt"></i> Address: 123, Institute
//               Road, City, State, Pincode
//             </p>
//             <p>
//               <i className="fas fa-phone"></i> Phone: +91 12345 67890
//             </p>
//             <p>
//               <i className="fas fa-envelope"></i> Email: <a href="mailto:info@institutems.com">info@institutems.com</a>
//             </p>
//           </div>
//         </div>
//         <hr />
       
//           <span  className="text-center">
//         Website owned & maintained by: ATOMS
//         © 2024 ATOMS. All rights reserved
//         Last Updated: Tueday, July 10, 2024&copy; 2024 Institute Management System. All rights reserved.
//         </span>
        
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import './Footer.css';


const FooterComponent = () => {
    return (
        <footer className="footer">
            
            <div className="footer-bottom">
                <div className="footer-sitemap">
                    <p><h5>Quick Links</h5></p>
                    <li>
                    <a href="#">Why Atoms</a>
                    </li>
                    <li>
                    <a href="#">AboutUs</a>
                    </li>
                    <li>
                    <a href="#">Service</a>
                    </li>
                    <li>
                    <a href="#">Contact Us</a>
                    </li>
                    
                    
                </div>
                <div className="footer-legal">
                    <p><h5>Legal</h5></p>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                
                
                <div className="col-md-4">
             <h5 className='contactUs'>Contact Us</h5>
             
             <h5 className='contactUs'>ATOMS</h5>
             <p>
               <i className="fas fa-map-marker-alt"></i>  Office No. A-wing,, 401, Kalu Tamanna Kusalkar Rd, Swastik Society, Model Colony, Shivajinagar, Pune, Maharashtra 411016
             </p>
             <p>
               <i className="fas fa-phone"></i> Phone: +91 9765241379
             </p>
           <p>
             <i className="fas fa-envelope"></i> Email: <a href="mailto:info@institutems.com">info@institutems.com</a>
            </p>
         </div>
        </div>
            <div className="footer-copyright">
                <p><h5>Website owned & maintained by: ATOMS © 2024 ATOMS. All rights reserved</h5></p>
               <p><h5>Last Updated: Tueday, July 10, 2024&copy; 2024 Institute Management System. All rights reserved.</h5></p>
            </div>
        </footer>
    );
};

export default FooterComponent;