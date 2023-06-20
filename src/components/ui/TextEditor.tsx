import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Editor } from '@toast-ui/react-editor';

export interface TextEditorRef {
  exportContent: () => string | undefined;
}

interface Props {
  initialValue?: string;
  placeholder?: string;
  height?: string;
}

const TextEditor = forwardRef<TextEditorRef, Props>(
  ({ initialValue = ' ', placeholder, height = '300px' }: Props, ref) => {
    const editorRef = useRef<Editor>(null);

    useImperativeHandle(
      ref,
      () => ({
        exportContent() {
          return editorRef.current?.getInstance().getMarkdown();
        },
      }),
      []
    );

    return (
      <Editor
        ref={editorRef}
        placeholder={placeholder}
        initialValue={initialValue}
        height={height}
        initialEditType="markdown"
        hideModeSwitch={true}
        previewHighlight={false}
        toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol', 'task'],
          ['table', 'image', 'link'],
          ['code', 'codeblock'],
        ]}
        usageStatistics={false}
        useCommandShortcut={true}
      />
    );
  }
);

export default TextEditor;
