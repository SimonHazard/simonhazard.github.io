import ReactMarkdown from 'react-markdown';
import { FC, useEffect, useState } from 'react';

type Props = { path: string };

const MarkdownReader: FC<Props> = ({ path }) => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) =>
        console.error('Erreur de chargement du fichier Markdown:', error)
      );
  }, [path]);

  return <ReactMarkdown className="prose" children={markdownContent} />;
};

export default MarkdownReader;
