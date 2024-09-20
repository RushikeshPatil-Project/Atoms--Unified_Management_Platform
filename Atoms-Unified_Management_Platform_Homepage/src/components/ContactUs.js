// ContactUs.js
import React from 'react';

const ContactUs = () => {
    return (
        <section id="contactus" >
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out to us.</p>
            
            <div>
                <h3>Address</h3>
                <h5> Office No. A-wing, 401, , Swastik Society, Model Colony, Shivajinagar, Pune, Maharashtra 411016</h5>
            </div>
            
            <div>
                <h3>Email</h3>
                <h6><a href="mailto:samruddhivirkhare43@gmail.com">contact@example.com</a></h6>
            </div>
            
            <div>
                <h3>Phone</h3>
                <h6><a href="tel:9765241379">+1 (234) 567-890</a></h6>
            </div>
        </div>
        </section>
    );
};

export default ContactUs;
