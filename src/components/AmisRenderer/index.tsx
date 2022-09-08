import React from 'react';
import styles from './index.module.less';
import { render as renderAmis } from 'amis';
import { ToastComponent, AlertComponent, alert, confirm, toast } from 'amis-ui';
import MyInput from '../MyInput';

const prefix: string = 'amis-renderer';

console.log(`title:`,MyInput);
type AmisRendererProps = {
  schema: any;
};

export default class AmisRenderer extends React.Component<AmisRendererProps> {

  constructor(props: AmisRendererProps) {
    super(props);
  }

  componentDidMount(): void {
    console.log(`schema:`, this.props.schema);
  }

  render(): React.ReactNode {
    return (
      <div className={styles[prefix]}>
        {/* <MyInput /> */}
        {renderAmis(this.props.schema)}
      </div>
    );
  }
}