import React from 'react';
import styles from './index.module.less';
import { Input } from 'antd';
import { Renderer } from 'amis-core';

const prefix: string = 'my-input';

type JsonEditorProps = {
  value: any;
  onChange: (val: any) => void;
};

@Renderer((() => {
  // console.log(`dddd:`,);
  // debugger;
  return {
    type: 'my-input'
  };
})())
export default class MyInput extends React.Component<any> {

  constructor(props: any) {
    super(props);
    console.log(`my input props:`, props);
  }

  componentDidMount(): void {

  }

  render(): React.ReactNode {
    return (
      <div className={styles[prefix]}>
        <p>{this.props.label}:</p>
        <Input />
      </div>
    );
  }
}