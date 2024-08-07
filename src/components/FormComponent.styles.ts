import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css, prefixCls }) => ({
  datepicker: {
    borderColor: 'teal',
    borderRadius: '12px',

    '.ant-picker-input': {
      [`.${prefixCls}-picker-suffix`]: {
        color: 'orange',
      },
    },
  },
  switch: css`
    .${prefixCls}-switch-inner {
      background-color: pink;
    }
  `,
  switch_active: css`
    .${prefixCls}-switch-inner {
      background-color: skyblue;
    }
  `,
}));
