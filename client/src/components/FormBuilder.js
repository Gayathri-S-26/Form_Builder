//FormBuilder.js

import React, { useState } from 'react';
import FormElements from './FormElements';
import axios from 'axios';

const FormBuilder = () => {
  const [title, setTitle] = useState('');
  const [elements, setElements] = useState([]);
  const [currentElement, setCurrentElement] = useState({
    label: '',
    type: 'text', // Default to text input
    options: [], // For radio, checkbox, and dropdown, this array will hold the options
  });

  const addElement = () => {
    setElements([...elements, currentElement]);
    setCurrentElement({
      label: '',
      type: 'text',
      options: [],
    });
  };

  const saveForm = () => {
    axios.post('https://form-builder-backend-5rcv.onrender.com/forms', { title, elements })
      .then((response) => {
        console.log(response.data);
        alert("Form Saved Successfully");
      })
      .catch((error) => {
        console.error('Error creating form:', error);
      });
  };

  const addOption = () => {
    setCurrentElement({
      ...currentElement,
      options: [...currentElement.options, ''], // Add an empty option
    });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...currentElement.options];
    updatedOptions[index] = value;
    setCurrentElement({
      ...currentElement,
      options: updatedOptions,
    });
  };

  return (
    <div>
      <label>Enter Form Title: </label>
      <input
        type="text"
        placeholder="Enter Form Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />
      <label>Enter Element Name: </label>
      <input
        type="text"
        placeholder="Enter Element Name"
        value={currentElement.label}
        onChange={(e) =>
          setCurrentElement({ ...currentElement, label: e.target.value })
        }
      /><br></br><br></br>
      <label>Element Type: </label>
      <select
        value={currentElement.type}
        placeholder="Enter Element Type"
        onChange={(e) =>
          setCurrentElement({ ...currentElement, type: e.target.value })
        }
      >
        <option value="text">Text</option>
        <option value="number">Number</option>
        <option value="email">Email</option>
        <option value="date">Date</option>
        <option value="password">Password</option>
        <option value="radio">Radio Button</option>
        <option value="checkbox">Checkbox</option>
        <option value="dropdown">Dropdown</option>
        {/* Add more options for other element types as needed */}
      </select>
      {currentElement.type === 'radio' || currentElement.type === 'checkbox' || currentElement.type === 'dropdown' ? (
        <>
          {currentElement.options.map((option, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Enter Option"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            </div>
          ))}
          <br></br>
          <button onClick={addOption}>
            Add Option
          </button>
        </>
      ) : null}
      <FormElements elements={elements} />
      <br></br>
      <button onClick={addElement}>Add Element</button>
      <button onClick={saveForm}>Save Form</button>
      <br></br><br />
    </div>
  );
};

export default FormBuilder;
