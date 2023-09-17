import { FaArrowRight } from 'react-icons/fa';

type CardProps = {
  title: string;
  description: string;
  href: string;
};

const Card = ({ title, description, href }: CardProps) => {
  return (
    <div className="flex max-w-3xl flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 text-start shadow dark:border-gray-700 dark:bg-gray-800">
      <div>
        <a href={href}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
      <a
        href={href}
        className="inline-flex w-fit items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <span className="mr-2">Read more</span> <FaArrowRight />
      </a>
    </div>
  );
};

export default Card;
