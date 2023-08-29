import React from 'react';
import { Modal as AntdModal } from 'antd';
import './DynamicModal.css';
import Button from '../../actoms/Button/Button'; 

const DynamicModal = ({ visible, onClose, title, content, buttons }) => {
  return (
    <AntdModal
      visible={visible}
      onCancel={onClose}
      title={title}
      footer={null}
    >
      {content}
      <div className="modal-buttons" style={{display:"flex",gap:"3rem"}}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            onClick={button.onClick}
            loading={button.loading}
            disabled={button.disabled}
          />
        ))}
      </div>
    </AntdModal>
  );
};

export default DynamicModal;
