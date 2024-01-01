import ReactMarkdown from 'react-markdown';
import { FC } from 'react';

type Props = { markdownContent: string };

const MarkdownReader: FC<Props> = ({ markdownContent }) => {
  return (
    <ReactMarkdown
      className="prose max-w-max text-justify prose-img:mx-auto"
      children={markdownContent}
    />
  );
};

export default MarkdownReader;
