import { Link } from 'react-router-dom';
import image from '../assets/image.jpg';

const Header = () => {
  return (
    <header className="sticky top-0 z-10">
      <div className="flex p-6 lg:container lg:mx-auto xl:w-3/4">
        <div className="flex flex-1">
          <Link to="/">
            <img
              className="mx-auto h-12 w-12 rounded-full shadow-lg shadow-custom-blue-50/50 "
              src={image}
              alt="Picture of me"
            />
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-center">
          <ul className="flex rounded-full bg-white/80  px-3 text-sm font-medium shadow-sm shadow-custom-blue-50/30 backdrop-blur-sm">
            <li>
              <Link
                to="/"
                className="relative block px-3 py-2 transition hover:text-custom-blue-50"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/articles"
                className="relative block px-3 py-2 transition hover:text-custom-blue-50"
              >
                Articles
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-1"></div>
      </div>
    </header>
  );
};

export default Header;
