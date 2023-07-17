import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="bottom-0 flex items-center justify-center px-4 py-6 sm:px-6 md:px-8">
        <a
          href="https://github.com/SimonHazard"
          className="text-3xl text-creme-700 hover:text-creme-900"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
