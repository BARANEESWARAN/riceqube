import React from 'react';
import './Button.css';
import { Button as AntButton } from 'antd';
import AntIcon from "../Icon/Icon"
const Button = ({ label, onClick, loading, disabled, Icon,bgColor,color }) => {
// Btn-Style

  return (
    <AntButton 

    onClick={onClick} 
    loading={loading} 
    disabled={disabled}>
    {Icon && <AntIcon Icon={Icon} />} {label}

    </AntButton>
  );
};

export default Button;
