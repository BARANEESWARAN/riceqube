

import { Input as AntInput } from 'antd';
import './Input.css';

const Input = ({ placeholder, value, onChange }) => {
  return <AntInput placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
