import React from 'react';
import './index.less';
import { FileOutlined, FormOutlined } from '@ant-design/icons';
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import HookLearn from '../HookLearn';
import DynamicTest from '../DynamicTest';

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
          <p className="title">React学习</p>
          <NavLink to="dynamic-test" className="item">
            <FileOutlined className='icon' />
            <p>动态组件</p>
          </NavLink >
          <NavLink to="hooks" className="item">
            <FileOutlined className='icon' />
            <p>Hook</p>
          </NavLink >
        </div>
        <div className="page">
          <Routes>
            <Route path="/hooks" element={<HookLearn />} />
            <Route path="/dynamic-test" element={<DynamicTest />} />
            <Route path="*" element={<Navigate to="/dynamic-test" replace />} />
          </Routes>
        </div>
      </div>
    );
  }
}