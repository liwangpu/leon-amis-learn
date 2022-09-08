import React from 'react';
import './index.less';
import { FileOutlined, FormOutlined } from '@ant-design/icons';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Editor from '../Editor';
import Renderer from '../Renderer';

type AppState = {

}

export default class App extends React.Component<AppState> {

  constructor(props: AppState) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <div className='tutorial-app'>
        <div className="navs">
          <p className="title">Amis学习</p>
          <NavLink to="renderer" className="item">
            <FileOutlined className='icon' />
            <p>运行时</p>
          </NavLink >
          <NavLink to="editor" className="item">
            <FileOutlined className='icon' />
            <p>设计器</p>
          </NavLink >
        </div>
        <div className="page">
          <Routes>
            <Route path="/editor" element={<Editor />} />
            <Route path="/renderer" element={<Renderer />} />
            <Route path="*" element={<Navigate to="/renderer" replace />} />
          </Routes>
        </div>
      </div>
    );
  }
}