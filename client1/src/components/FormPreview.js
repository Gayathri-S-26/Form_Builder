// src/components/FormPreview.js
import React from 'react';

const FormPreview = ({ form }) => {
  return (
    <form>
      <h3>{form.title}</h3>
      {form.elements.map((element, index) => (
        <div key={index}>
          <br></br>
          <label>{element}</label><br /><br></br>
          <input type="text" />
        </div>
      ))}
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormPreview;
