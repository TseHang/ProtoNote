import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { EditorMode } from '@/constants';
import { decrypt } from '@/utils/security';

import Editor from './Editor';

type Props = { content: string; mode: EditorMode };

const ContentView: React.FC<Props> = ({ content, mode }) => {
  const [clearContent, setClearContent] = useState<string | null>(null);

  useEffect(() => {
    async function decryptContent() {
      setClearContent(await decrypt(content));
    }
    decryptContent();
  }, [content]);

  if (!clearContent) {
    return <div>Loading...</div>;
  }

  return mode === EditorMode.View ? (
    <ReactMarkdown>{clearContent}</ReactMarkdown>
  ) : (
    <Editor content={clearContent} />
  );
};

export default ContentView;
