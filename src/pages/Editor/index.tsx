import React from 'react';
import styles from './index.module.less';
import { LayoutOutlined, FormOutlined } from '@ant-design/icons';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

type EditorState = {

}

export default class Editor extends React.Component<EditorState> {

  constructor(props: EditorState) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className={styles.App}>
        
      </div>
    );
  }
}