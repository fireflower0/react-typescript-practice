import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
  value: string;
  language: string;
}

const CodeBlock: React.FC<Props> = props => {
  return (
    <SyntaxHighlighter language={props.language} style={rainbow}>
      {props.value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
