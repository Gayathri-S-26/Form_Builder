import React from 'react';
import FormBuilder from './components/FormBuilder';
import FormList from './components/FormList';

const App = () => {
  const mystyle={
    color:"white",
  }
  return (
    <div>
      <h1 style={mystyle}>Form Builder</h1>
      <FormBuilder />
      <h1 style={mystyle}>Form List</h1>
      <FormList />
    </div>
  );
};

export default App;
