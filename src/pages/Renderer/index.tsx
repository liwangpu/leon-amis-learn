import React from 'react';
import styles from './index.module.less';
import JsonEditoir from '../../components/JsonEditoir';
import AmisRenderer from '../../components/AmisRenderer';
import { Bind } from 'lodash-decorators';

const prefix: string = 'renderer';

const schemaStorageKey: string = 'renderer-page-schema';

type RendererState = {
  schema: any;
}

export default class Renderer extends React.Component<any, RendererState> {

  constructor(props: any) {
    super(props);
    let schema: any;
    const schemaStr = sessionStorage.getItem(schemaStorageKey);
    if (schemaStr) {
      schema = JSON.parse(schemaStr);
    } else {
      schema = {
        id: 'page1',
        type: 'page',
        body: [
          {
            type: 'my-input',
            label: '标题'
          },
          // {
          //   label: '使用 custom 组件',
          //   name: 'username',  // 如果要放在 form 中，需要设置 name，onChange 将会设置这个值
          //   type: 'custom',
          //   // onMount 将会在组件创建时执行，默认会创建一个空 div 标签，也可以设置 inline: true 来创建 span 标签
          //   // dom 是 dom 节点，value 是初始数据，比如表单 name 初始拿到的数据，onChange 只有在表单下才会有
          //   onMount: (dom, value, onChange) => {
          //     const button = document.createElement('button');
          //     button.innerText = '点击修改姓名';
          //     button.onclick = event => {
          //       // 第二个参数是要修改的表单项名称
          //       onChange('new name', 'username');
          //       event.preventDefault();
          //     };
          //     dom.appendChild(button);
          //   },
          //   // onUpdate 将会在数据更新时被调用
          //   // dom 是 dom 节点、data 将包含表单所有数据，prevData 是之前表单的所有数据
          //   onUpdate: (dom, data, prevData) => {
          //     console.log('数据有变化', data);
          //   },
          //   // onUnmount 将会在组件被销毁的时候调用，用于清理资源
          //   onUnmount: () => {
          //     console.log('组件被销毁');
          //   }
          // }
        ]
      };
    }
    this.state = { schema };
  }

  @Bind()
  onSchemaChange(schema: any): void {
    this.setState({ schema });
  }

  render(): React.ReactNode {
    return (
      <div className={styles[prefix]}>
        <div className={styles['configuration']}>
          <JsonEditoir value={this.state.schema} onChange={this.onSchemaChange} />
        </div>
        <div className={styles['page']}>
          <AmisRenderer schema={this.state.schema} />
        </div>
      </div>
    );
  }
}