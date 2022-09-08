import React from 'react';
import styles from './index.module.less';
import { render as renderAmis } from 'amis';
import '../MyInput';

const prefix: string = 'amis-renderer';

type AmisRendererProps = {
  schema: any;
};

export default class AmisRenderer extends React.Component<AmisRendererProps> {

  constructor(props: AmisRendererProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={styles[prefix]}>
        {renderAmis(this.props.schema)}
      </div>
    );
  }
}