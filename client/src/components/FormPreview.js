// FormPreview.js

import React from 'react';

const FormPreview = ({ form }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // You can now handle the form submission and access the values using formData.get('elementLabel')
    console.log([...formData.entries()]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{form.title}</h3>
      {form.elements.map((element, index) => (
        <div key={index}>
          <br />
          <label>{element.label}</label><br />
          {element.type === 'text' && (
            <input type="text" name={element.label} />
          )}
          {element.type === 'number' && (
            <input type="number" name={element.label} />
          )}
          {element.type === 'email' && (
            <input type="email" name={element.label} />
          )}
          {element.type === 'date' && (
            <input type="date" name={element.label} />
          )}
          {element.type === 'password' && (
            <input type="password" name={element.label} />
          )}
          {element.type === 'radio' && (
            <div>
              {element.options.map((option, i) => (
                <div key={i}>
                  <input type="radio" name={element.label} value={option} />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          )}
          {element.type === 'checkbox' && (
            <div>
              {element.options.map((option, i) => (
                <div key={i}>
                  <input type="checkbox" name={element.label} value={option} />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          )}
          {element.type === 'dropdown' && (
            <select name={element.label}>
              {element.options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {/* Add more cases for other element types as needed */}
        </div>
      ))}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPreview;
