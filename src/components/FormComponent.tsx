'use client';

import { useState } from 'react';

import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';

// import './styles.scss';
// import styles from './styles.module.scss';
import { useStyles } from './FormComponent.styles';
import Icons from './Icons';

export default function FormComponent() {
  const [checked, setChecked] = useState(false);

  const { styles, cx, theme } = useStyles(checked);

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal">
      <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
        <Checkbox>Checkbox</Checkbox>
      </Form.Item>
      <Form.Item label="Radio">
        <Radio.Group>
          <Radio value="apple"> Apple </Radio>
          <Radio value="pear"> Pear </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [{ title: 'Bamboo', value: 'bamboo' }],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker className={styles.datepicker} />
      </Form.Item>
      <Form.Item label="RangePicker">
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="TextArea">
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch
          value={checked}
          onChange={(value) => setChecked(value)}
          className={cx(styles.switch, checked && styles.switch_active)}
        />
      </Form.Item>
      <Form.Item label="Upload" valuePropName="fileList">
        <Upload action="/upload.do" listType="picture-card">
          <div>
            <Icons.Plus className="m-auto" />
            <div className="mt-2">Upload</div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item label="Button">
        <Button type="primary">Button</Button>
      </Form.Item>
    </Form>
  );
}
