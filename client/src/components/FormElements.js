//FormElements.js


import React from 'react';

const FormElements = ({ elements }) => {
  return (
    <div>
      {elements.map((element, index) => (
        <div key={index}>
          <li key={index}>{element}</li>
          <label>{element.label}</label>
          {/* Add input fields for different element types */}
        </div>
      ))}
    </div>
  );
};

export default FormElements;
