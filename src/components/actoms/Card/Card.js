import React from 'react';
import { Card } from 'antd';

const AntCard = ({ title, content,onClick }) => {
  return (
    <Card title={title} onClick={onClick}>
      <p>{content}</p>
    </Card>
  );
};

export default AntCard;
