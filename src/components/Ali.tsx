'use client';

import React from 'react';

import { DatePicker, Form } from 'antd';

const Ali = () => {
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">
      <Form.Item label="DatePicker23">
        <DatePicker />
      </Form.Item>
    </Form>
  );
};

export default Ali;
