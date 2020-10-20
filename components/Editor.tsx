import Prism from 'prismjs';
import React, { useEffect, useState } from 'react';
import CodeEditor from 'react-simple-code-editor';
import styled from 'styled-components';

const Wrapper = styled.div<{ focused: boolean }>`
  height: 100%;

  #code-editor {
    font-family: 'Fira code', 'Fira Mono', monospace;
    font-size: 16px;
    min-height: 100%;
    border-left: ${p =>
      p.focused ? `solid 2px ${p.theme.colors.main}` : 'none'};

    &:focus {
      outline: none;
    }
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
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    require('prismjs/themes/prism-coy.css');
  }, []);

  return (
    <Wrapper focused={focused}>
      <CodeEditor
        id="code-editor"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onValueChange={c => setValue(c)}
        highlight={c =>
          Prism.highlight(c, Prism.languages.markdown, 'markdown')
        }
        padding={5}
        style={{ overflow: 'scroll' }}
      />
    </Wrapper>
  );
};

export default Editor;
