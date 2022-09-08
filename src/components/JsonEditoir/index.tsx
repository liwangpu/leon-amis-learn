import React from 'react';
import styles from './index.module.less';
import JSONEditor from 'jsoneditor';

const prefix: string = 'json-editor';

type JsonEditorProps = {
  value: any;
  onChange: (val: any) => void;
};

export default class JsonEditor extends React.Component<JsonEditorProps> {

  private editorContainer: React.RefObject<any>;
  private editor: any;
  constructor(props: JsonEditorProps) {
    super(props);
    this.editorContainer = React.createRef();
  }

  componentDidMount(): void {
    const options = {
      mode: 'code',
      statusBar: false,
      mainMenuBar: true,
      onChange: () => {
        this.props.onChange(this.editor.get());
      }
    };
    this.editor = new JSONEditor(this.editorContainer.current, options);
    this.editor.set(this.props.value)
  }

  render(): React.ReactNode {
    return (
      <div className={styles[prefix]} ref={this.editorContainer}></div>
    );
  }
}