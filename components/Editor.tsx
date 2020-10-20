import Prism from 'prismjs';
import React, { useEffect, useState } from 'react';
import CodeEditor from 'react-simple-code-editor';
import styled from 'styled-components';

const StyledCodeEditor = styled(CodeEditor)<{ focused: boolean }>`
  font-family: 'Fira code', 'Fira Mono', monospace;
  font-size: 16px;
  height: 100%;
  overflow: auto !important;

  border-left: ${p =>
    p.focused ? `solid 2px ${p.theme.colors.main}` : 'none'};

  &:focus {
    outline: none;
  }

  .npm__react-simple-code-editor__textarea {
    &:focus {
      outline: none;
    }
  }
`;

type Props = { content: string };

const Editor: React.FC<Props> = ({ content }) => {
  const [value, setValue] = useState(content);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    require('prismjs/themes/prism-coy.css');
  }, []);

  return (
    <StyledCodeEditor
      focused={focused}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onValueChange={c => setValue(c)}
      highlight={c => Prism.highlight(c, Prism.languages.markdown, 'markdown')}
      padding={5}
    />
  );
};

export default Editor;
