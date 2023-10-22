import Card from '../component/Card';

type ArticlePublished = {
  title: string;
  description: string;
  href: string;
};

const articlesPublished: ArticlePublished[] = [
  {
    title: 'Experience feedback from Webpack to Vite',
    description:
      'I will share my experience regarding the implementation of Vite and its advantages.',
    href: 'vite'
  }
];

const Articles = () => {
  return (
    <div className="container mx-auto flex flex-col p-6 text-slate-700 xl:w-3/4">
      <div className="container mx-auto flex grow flex-col items-center justify-center gap-4 p-8">
        {articlesPublished.map(({ description, href, title }) => (
          <Card title={title} description={description} href={href} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
