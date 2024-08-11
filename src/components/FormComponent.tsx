// @ts-nocheck
'use client';

// import { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  Col,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Switch,
  Table,
  TreeSelect,
  Upload,
  message,
} from 'antd';
import { cx } from 'antd-style';

// import './styles.scss';
import styles from './styles.module.scss';

// import { useStyles } from './FormComponent.styles';
import Icons from './Icons';

const columns = [
  {
    title: 'شناسه',
    align: 'id',
    dataIndex: 'id',
    key: 'id',
    w: 0,
  },
  {
    title: 'نام و نام‌خانوادگی',
    align: 'center',
    dataIndex: 'companyName',
    key: 'companyName',
    w: 0,
  },
  {
    title: 'شماره همراه',
    align: 'center',
    dataIndex: 'mobile',
    key: 'mobile',
    w: 768,
  },
  {
    title: 'وبسایت',
    align: 'center',
    dataIndex: 'website',
    key: 'website',
    w: 992,
  },
  {
    title: 'وضعیت کاربر',
    dataIndex: 'status',
    align: 'center',
    key: 'status',
    filters: [
      {
        text: 'غیرفعال',
        value: '0',
      },
      {
        text: 'فعال',
        value: '1',
      },
      {
        text: 'خاکستری',
        value: '2',
      },
      {
        text: 'بسته‌شده',
        value: '4',
      },
      {
        text: 'مسدود',
        value: '5',
      },
    ],
  },
  {
    title: 'وضعیت پذیرندگی',
    dataIndex: 'userDataStatus',
    align: 'center',
    key: 'userDataStatus',
    filters: [
      {
        text: 'تکمیل‌نشده',
        value: '0',
      },
      {
        text: 'در حال تکمیل',
        value: '1',
      },
      {
        text: 'در انتظار تایید',
        value: '2',
      },
      {
        text: 'دارای نقص',
        value: '3',
      },
      {
        text: 'ارسال به شاپرک',
        value: '4',
      },
      {
        text: 'تایید شاپرک',
        value: '5',
      },
      {
        text: 'رد شاپرک',
        value: '6',
      },
    ],
  },
  {
    title: 'تاریخ ثبت‌نام',
    dataIndex: 'joinedAt',
    align: 'center',
    key: 'sort',
  },
  {
    title: 'پشتیبان',
    dataIndex: 'operator',
    align: 'center',
    key: 'operatorId',
    filters: [
      {
        text: 'یوزر 3463',
        value: 3463,
      },
      {
        text: 'یوزر 8141',
        value: 8141,
      },
      {
        text: 'یوزر 11048',
        value: 11048,
      },
      {
        text: 'یوزر 17602',
        value: 17602,
      },
      {
        text: 'یوزر 32237',
        value: 32237,
      },
      {
        text: 'یوزر 3463',
        value: 3463,
      },
      {
        text: 'یوزر 8141',
        value: 8141,
      },
      {
        text: 'یوزر 11048',
        value: 11048,
      },
      {
        text: 'یوزر 17602',
        value: 17602,
      },
      {
        text: 'یوزر 32237',
        value: 32237,
      },
    ],
  },
  {
    title: 'جزییات',
    key: 'action',
    align: 'center',
    w: 0,
  },
];
const dataSource = [
  {
    id: 34275,
    username: 'DZS_09032991286_Ikk',
    companyName: null,
    phone: null,
    mobile: '09032991286',
    features: 'flow1',
    activityDesc: 'flow1',
    website: null,
    status: 2,
    referralCode: null,
    gtmCookie: null,
    operatorUserStatus: 0,
    joinedAt: '1403/05/14-12:44:58',
    IPGLoyalty: null,
    userDataStatus: 0,
    operator: null,
    lastLogin: '1403/05/14-12:46:54',
    userFlowStatus: null,
  },
  {
    id: 34274,
    username: 'rBD_09192191486_N6M',
    companyName: 'علی قدیری',
    phone: null,
    mobile: '09192191486',
    features: 'flow1',
    activityDesc: 'flow1',
    website: 'sdf.ir',
    status: 0,
    referralCode: null,
    gtmCookie: null,
    operatorUserStatus: 0,
    joinedAt: '1403/04/19-15:14:19',
    IPGLoyalty: null,
    userDataStatus: 2,
    operator: null,
    lastLogin: '1403/04/21-15:09:18',
    userFlowStatus: 1,
  },
  {
    id: 34273,
    username: 'ZjN_09132161464_8Zy',
    companyName: null,
    phone: null,
    mobile: '09132161464',
    features: 'flow1',
    activityDesc: 'flow1',
    website: null,
    status: 2,
    referralCode: null,
    gtmCookie: null,
    operatorUserStatus: 0,
    joinedAt: '1403/04/19-12:25:52',
    IPGLoyalty: null,
    userDataStatus: 0,
    operator: null,
    lastLogin: '1403/04/19-12:25:52',
    userFlowStatus: 1,
  },
  {
    id: 34272,
    username: 'KXO_09035289772_Sj5',
    companyName: 'سجاد جعفری',
    phone: null,
    mobile: '09035289772',
    features: 'flow1',
    activityDesc: 'flow1',
    website: null,
    status: 1,
    referralCode: null,
    gtmCookie: null,
    operatorUserStatus: 0,
    joinedAt: '1403/04/17-12:29:44',
    IPGLoyalty: null,
    userDataStatus: 2,
    operator: null,
    lastLogin: '1403/05/08-14:52:56',
    userFlowStatus: 1,
  },
  {
    id: 34271,
    username: 'foZ_09123281947_XLm',
    companyName: null,
    phone: null,
    mobile: '09123281947',
    features: 'flow1',
    activityDesc: 'flow1',
    website: null,
    status: 2,
    referralCode: null,
    gtmCookie: null,
    operatorUserStatus: 0,
    joinedAt: '1403/04/16-13:01:18',
    IPGLoyalty: null,
    userDataStatus: 0,
    operator: null,
    lastLogin: '1403/04/16-13:01:18',
    userFlowStatus: 1,
  },
  {
    id: 34270,
    username: '3Co_09914284002_Y5r',
    companyName: null,
    phone: null,
    mobile: '09914284002',
    features: 'flow1',
    activityDesc: 'flow1',
    website: null,
    status: 2,
    referralCode: null,
    gtmCookie: null,
    operatorUserStatus: 0,
    joinedAt: '1403/04/13-16:48:41',
    IPGLoyalty: null,
    userDataStatus: 0,
    operator: null,
    lastLogin: '1403/05/08-14:27:32',
    userFlowStatus: 1,
  },
  {
    id: 34269,
    username: 'HJg_09121312312_eUY',
    companyName: null,
    phone: null,
    mobile: '09121312312',
    features: 'flow1',
    activityDesc: 'flow1',
    website: null,
    status: 2,
    referralCode: null,
    gtmCookie: null,
    operatorUserStatus: 0,
    joinedAt: '1403/03/09-20:34:11',
    IPGLoyalty: null,
    userDataStatus: 0,
    operator: null,
    lastLogin: '1403/03/09-20:34:11',
    userFlowStatus: 1,
  },
  {
    id: 34268,
    username: 'UFX_09192191486_fKi',
    companyName: 'dfss',
    phone: null,
    mobile: '09',
    features: 'flow1',
    activityDesc: 'flow1',
    website: null,
    status: 2,
    referralCode: null,
    gtmCookie: null,
    operatorUserStatus: 0,
    joinedAt: '1403/03/09-16:33:59',
    IPGLoyalty: null,
    userDataStatus: 0,
    operator: null,
    lastLogin: '1403/03/09-16:33:59',
    userFlowStatus: 1,
  },
  {
    id: 34267,
    username: 'j6q_09192191486_NpT',
    companyName: 'بسب',
    phone: null,
    mobile: '09',
    features: 'flow1',
    activityDesc: 'flow1',
    website: null,
    status: 2,
    referralCode: null,
    gtmCookie: null,
    operatorUserStatus: 0,
    joinedAt: '1403/03/09-16:27:41',
    IPGLoyalty: null,
    userDataStatus: 0,
    operator: null,
    lastLogin: '1403/03/09-16:27:41',
    userFlowStatus: null,
  },
  {
    id: 34266,
    username: 'rH2_09155555555_vyo',
    companyName: null,
    phone: null,
    mobile: '09155555555',
    features: 'flow1',
    activityDesc: 'flow1',
    website: null,
    status: 2,
    referralCode: null,
    gtmCookie: null,
    operatorUserStatus: 0,
    joinedAt: '1403/03/09-12:12:38',
    IPGLoyalty: null,
    userDataStatus: 0,
    operator: null,
    lastLogin: '1403/03/09-12:19:16',
    userFlowStatus: null,
  },
];

const { Dragger } = Upload;

const checkFileType = (file: any) => {
  const fileName = file.name.toLowerCase();
  const allowedFileTypes = ['.xlsx', '.xls'];

  const isAllowedFileType = allowedFileTypes.some((ext) =>
    fileName.endsWith(ext),
  );

  if (!isAllowedFileType) {
    message.error('لطفا فایل اکسل را با فرمت xlsx یا xls ارسال کنید');
  }

  return isAllowedFileType ? true : Upload.LIST_IGNORE;
};

export default function FormComponent() {
  // const { styles, cx, theme } = useStyles();

  const draggerProperties = {
    name: 'file',
    multiple: false,
    maxCount: 1,
    beforeUpload: checkFileType,
    customRequest: ({ onSuccess }) =>
      setTimeout(() => {
        onSuccess('ok', null);
      }, 0),
    onChange(info) {
      if (info.file.status === 'done') {
        // setErrors(null);
        // create data
        // const formData = new FormData();
        // formData.append('file', info.file.originFileObj);
        // formData.append('walletId', selectedWallet);
        // setUploadedFile(info.file.originFileObj);
        // uploadBatchCheckoutFile(formData).then((res) => {
        //   if (res?.status < 300) {
        //     setTimeout(() => {
        //       setCheckFile(res.data);
        //     }, 1000);
        //   } else {
        //     setErrors(res.data);
        //   }
        // });
      }
    },
  };

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
      {/* <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
            colorBorder: 'red', // It would be overwritten by classNames (css-in-js createStyles)
          },
        }}
      > */}
      <Form.Item label="DatePicker">
        <DatePicker className={styles.datepicker} />
      </Form.Item>
      {/* </ConfigProvider> */}
      <Form.Item label="RangePicker">
        <DatePicker.RangePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="TextArea">
        <Input.TextArea rows={4} />
      </Form.Item>
      {/* <Form.Item label="Switch" valuePropName="checked">
        <Switch
          value={checked}
          onChange={(value) => setChecked(value)}
          className={cx(styles.switch, checked && styles.switch_active)}
        />
      </Form.Item> */}
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
      <Row gutter={24} style={{ marginBottom: '24px' }}>
        <Col span={12}>
          <Dragger
            showUploadList={false}
            className={styles.dragger}
            {...draggerProperties}
          >
            <div className={styles.dragger_content}>
              <div className={styles.dragger_hint}>
                {/* <Folder2 size="32" color="#0000B8" /> */}
                {/* <Typography.Text style={{ fontWeight: 500 }}>
              {content.upload_section.file.input.text}
            </Typography.Text> */}
                <p>فایل را بکشید</p>
              </div>

              <Button type="text" style={{ color: '#0000b8' }}>
                بارگذاری فایل
                {/* <UploadOutlined style={{ fontSize: '24px', color: '#0000b8' }} /> */}
              </Button>
            </div>
          </Dragger>
        </Col>
        <Col span={12}>
          <Dragger
            showUploadList={false}
            // className={styles.dragger}
            {...draggerProperties}
          >
            <div className={styles.dragger_content}>
              <div className={styles.dragger_hint}>
                {/* <Folder2 size="32" color="#0000B8" /> */}
                {/* <Typography.Text style={{ fontWeight: 500 }}>
              {content.upload_section.file.input.text}
            </Typography.Text> */}
                <p>فایل را بکشید</p>
              </div>

              <Button type="text" style={{ color: '#0000b8' }}>
                بارگذاری فایل
                {/* <UploadOutlined style={{ fontSize: '24px', color: '#0000b8' }} /> */}
              </Button>
            </div>
          </Dragger>
        </Col>
      </Row>
      <ConfigProvider direction="rtl">
        <Table
          // rowSelection={rowSelection ? rowSelection : null}
          className={cx(styles.table, styles.adminPanel)}
          scroll={{ x: true }}
          tableLayout={'unset'}
          // pagination={!pagination ? false : getPaginationProps(pagination)}
          // footer={() => RenderFooter()}
          // rowKey={rowKey || 'id'}
          // onRow={record => ({
          //   onClick: () => onRowClick && onRowClick(record),
          // })}
          // title={() => RenderTitle(this.state.filteredInfo, title)}
          // onChange={(pagination, filters, sorter, extra) => {
          //   if (customOnChange) customOnChange(pagination, filters, sorter, extra)
          //   else if (defaultOnChange) {
          //     this.setState({ filteredInfo: filters })
          //     handleChangeTable(
          //       pagination,
          //       filters,
          //       sorter,
          //       extra,
          //       classObject ? classObject.state.tablePayload : tablePayload,
          //       classObject ? v => classObject.setState({ tablePayload: v }) : setTablePayload,
          //       fetchTableData
          //     )
          //   }
          // }}
          // {...other}
          columns={columns}
          dataSource={dataSource}
        />
      </ConfigProvider>
    </Form>
  );
}
