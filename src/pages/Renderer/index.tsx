import React from 'react';
import styles from './index.module.less';
import { LayoutOutlined, FormOutlined } from '@ant-design/icons';
import {render as renderAmis} from 'amis';
import {ToastComponent, AlertComponent, alert, confirm, toast} from 'amis-ui';


type RendererState = {

}

export default class Renderer extends React.Component<any, RendererState> {

  constructor(props: RendererState) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={styles.App}>

      </div>
    );
  }
}