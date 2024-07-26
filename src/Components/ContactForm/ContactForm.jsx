import React, { useState } from 'react';
import FormField from './modules/FormField';
import Button from '../Button/Button';

const ContactForm = ({ formFields, rowConfig }) => {
  const initialFormData = formFields.reduce((acc, field) => {
    acc[field.id] = '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://10.167.1.171:5000/submit', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setShowSuccessMessage(true); // Show success message
  
        // Reset form fields
        setFormData(initialFormData);
  
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 2000); // Hide success message after 2 seconds
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  const rows = rowConfig(formFields);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col text-start space-y-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col py-2 lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            {row.map((field) => (
              <FormField
                key={field.id}
                field={field}
                value={formData[field.id]}
                onChange={handleInputChange}
              />
            ))}
          </div>
        ))}

        <div className="flex justify-center lg:justify-start mt-2">
          <Button text="SUBMIT" className="mt-10" />
        </div>

        {showSuccessMessage && (
          <p className="text-green-800 text-start font-semibold mt-10">&#10003; Form submitted successfully</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
