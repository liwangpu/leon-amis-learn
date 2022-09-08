import React from 'react';
import styles from './index.module.less';
import { LayoutOutlined, FormOutlined } from '@ant-design/icons';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

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