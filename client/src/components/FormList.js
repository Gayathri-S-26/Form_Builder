//FormList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormPreview from './FormPreview';

const FormList = () => {
  const [forms, setForms] = useState([]);
  const [previewForm, setPreviewForm] = useState(null);


  useEffect(() => {
    // Fetch all forms from the backend and set them to the forms state
    fetchForms();
  }, []);

  const fetchForms = () => {
    axios.get('https://form-builder-backend-5rcv.onrender.com/forms')
      .then((response) => {
        setForms(response.data);
      })
      .catch((error) => {
        console.error('Error fetching forms:', error);
      });
  };

  const handleFormPreview = (form) => {
    alert("Scroll down for the Preview");
    setPreviewForm(form);
  };

  return (
    <div>
      {forms.map((form) => (
        <div key={form._id}>
          <ul>
          <li><h3>{form.title}</h3></li>
          </ul>
          <button onClick={() => handleFormPreview(form)}>Preview</button>
        </div>
      ))}

     {previewForm && (
        <div>
          <h1>Form Preview</h1>
          <FormPreview form={previewForm} />
        </div>
      )}
    </div>
  );
};

export default FormList;
