import React from "react";

interface IMarkdownProps {
  html: string;
}

function Markdown({ html }: IMarkdownProps) {
  return (
    <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
  );
}

export default Markdown;
