// src/components/molecules/FormField.js
import React from 'react';
import Input from '../../actoms/Input/Input';

const FormField = ({ label, placeholder, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default FormField;
