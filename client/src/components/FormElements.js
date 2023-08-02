//FormElements.js


import React from 'react';

const FormElements = ({ elements }) => {
  return (
    <div>
      {elements.map((element, index) => (
        <div key={index}>
          <label>{element.label}</label>
          {element.type === 'text' && (
            <input type="text" />
          )}
          {element.type === 'number' && (
            <input type="number" />
          )}
          {element.type === 'email' && (
            <input type="email" />
          )}
          {element.type === 'date' && (
            <input type="date" />
          )}
          {element.type === 'password' && (
            <input type="password" />
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
            <select>
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
    </div>
  );
};

export default FormElements;
