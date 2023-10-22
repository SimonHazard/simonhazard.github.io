import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type CardProps = {
  title: string;
  description: string;
  href: string;
};

const Card = ({ title, description, href }: CardProps) => {
  return (
    <div className="flex max-w-3xl flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 text-start shadow">
      <div>
        <Link to={href}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">
            {title}
          </h5>
        </Link>
        <p className="mb-3 line-clamp-3 font-normal text-slate-700">
          {description}
        </p>
      </div>
      <Link
        to={href}
        className="inline-flex w-fit items-center rounded-lg bg-custom-blue-100 px-3 py-2 text-center text-sm font-medium text-white hover:bg-custom-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <span className="mr-2">Read more</span> <FaArrowRight />
      </Link>
    </div>
  );
};

export default Card;
