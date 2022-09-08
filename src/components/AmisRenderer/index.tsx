import React from 'react';
import styles from './index.module.less';

const prefix: string = 'amis-renderer';

type AmisRendererProps = {
  value: any;
  // onChange: (val: any) => void;
};

export default class AmisRenderer extends React.Component<AmisRendererProps> {

  constructor(props: AmisRendererProps) {
    super(props);
  }

  componentDidMount(): void {

  }

  render(): React.ReactNode {
    return (
      <div className={styles[prefix]}>

      </div>
    );
  }
}