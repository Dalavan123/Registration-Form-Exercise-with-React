import React from 'react';

const Inputfield = ({ label, name, type, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange}></input>
    </div>
  );
};

export default Inputfield;
