import React from 'react';
import ReactMarkdown from 'react-markdown';

import { EditorMode } from '@/constants';
import { editorModeVar } from '@/gql/editorModeCache';
import { useReactiveVar } from '@apollo/client';

import Editor from './Editor';

type Props = {
  content: string | null;
  onChangeContent: (content: string) => void;
  isLoading?: boolean;
};

const ContentView: React.FC<Props> = ({
  content,
  onChangeContent,
  isLoading,
}) => {
  const editorMode = useReactiveVar(editorModeVar);

  if (content === null) {
    return <div>Loading content...</div>;
  }

  if (isLoading) {
    return <div>Saving...</div>;
  }

  return editorMode === EditorMode.View ? (
    <ReactMarkdown>
      {content === '' ? '*<empty content...>*' : content}
    </ReactMarkdown>
  ) : (
    <Editor content={content} onChangeContent={onChangeContent} />
  );
};

export default ContentView;
