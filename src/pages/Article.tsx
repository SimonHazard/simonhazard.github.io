import { useLoaderData } from 'react-router-dom';
import MarkdownReader from '../component/MarkdownReact';

const Article = () => {
  return (
    <div className="container mx-auto p-6">
      <MarkdownReader markdownContent={useLoaderData() as string} />
    </div>
  );
};

export default Article;
