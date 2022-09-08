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
        body: {
          type: 'tpl',
          tpl: '天天开心'
        }
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