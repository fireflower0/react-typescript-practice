import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  language: string;
  code: string;
}

const CodeBlock: React.FC<Props> = props => {
  return (
    <SyntaxHighlighter language={props.language} style={rainbow}>
      {props.code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
