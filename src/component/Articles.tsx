import ArticleCard from './ArticleCard';

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
    <section className="flex flex-col gap-4">
      <div className="text-2xl font-bold text-slate-800">Articles</div>
      <div className="flex flex-col text-slate-700">
        <div className="flex grow flex-col items-center justify-center gap-4">
          {articlesPublished.map(({ description, href, title }) => (
            <ArticleCard
              title={title}
              description={description}
              href={`article/${href}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
