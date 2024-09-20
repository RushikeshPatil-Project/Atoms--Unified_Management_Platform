// src/components/FAQSection.js
import React, { useState } from 'react';
import { Collapse, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQSection.css';

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { question: "What is Atoms?", answer: "Atoms is a platform for managing exam and project services." },
    { question: "How does the Exam Management Service work?", answer: "An Online Exam Management System is a software platform that facilitates the entire process of conducting exams over the internet. It handles exam creation, student registration, exam delivery, proctoring, grading, and result distribution, and timetables." },
    { question: "What is a Project Management System?", answer: "A Project Management System is a software tool that helps teams plan, execute, monitor, and complete projects. It provides features for task management, resource allocation, time tracking, collaboration, and reporting to ensure that projects are completed on time and within budget." },
  ];

  return (
    <div className="faq-section-container">
      <h2 className="faq-heading">FAQS</h2>
      <div className="faq-section">
        {faqs.map((faq, index) => (
          <Card key={index} className="mb-3 faq-card">
            <Card.Header
              onClick={() => handleToggle(index)}
              aria-controls={`collapse-${index}`}
              aria-expanded={open === index}
              className="w-100 text-left faq-header"
              style={{ cursor: 'pointer' }}
            >
              <h5>{faq.question}</h5>
            </Card.Header>
            <Collapse in={open === index}>
              <Card.Body id={`collapse-${index}`}>
                {faq.answer}
              </Card.Body>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
