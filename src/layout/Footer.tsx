import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-4 border-t-2">
      <div className="bottom-0 flex flex-col items-center justify-center gap-2 px-4 py-6 lg:container sm:px-6 md:px-8 lg:mx-auto xl:w-3/4">
        <a
          href="https://github.com/SimonHazard"
          className="text-3xl text-creme-700 hover:text-creme-900"
        >
          <FaGithub />
        </a>
        <div className="text-center">
          This website is currently in development, please check my{' '}
          <span>
            <a
              className="underline hover:text-slate-900"
              href="https://github.com/SimonHazard/simonhazard.com/blob/main/README.md"
            >
              roadmap
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
