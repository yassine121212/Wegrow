import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Posts = (props) => {
 
  const showModal = () => {
    props.setmodelvidible(true);
  };

  const handleOk = () => {
    props.setmodelvidible(false);
  };

  const handleCancel = () => {
    props.setmodelvidible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={props.modelVisi} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default Posts;