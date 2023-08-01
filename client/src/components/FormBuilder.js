import React, { useState } from 'react';
import FormElements from './FormElements';
import axios from 'axios';





const FormBuilder = () => {
  const [title, setTitle] = useState('');
  const [elements, setElements] = useState([]);
  const [currentElement, setCurrentElement] = useState('');

  const addElement = () => {
    setElements([...elements, currentElement]);
    setCurrentElement('');
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

  

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Form Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br /><br />
      <input
        type="text"
        placeholder="Enter Element Name"
        value={currentElement}
        onChange={(e) => setCurrentElement(e.target.value)}
      />
      <FormElements elements={elements} />
      <br></br>
      <button onClick={addElement} >Add Element</button>
      <button onClick={saveForm}>Save Form</button><br></br><br />
    </div>
  );
};

export default FormBuilder;