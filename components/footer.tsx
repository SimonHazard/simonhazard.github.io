import { FaGithub, FaGitlab } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-muted py-6 md:py-8 lg:py-10 bottom-0">
      <div className="container mx-auto flex flex-row items-center justify-center space-x-4">
        <a
          href="https://github.com/SimonHazard"
          className="text-3xl text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://gitlab.com/SimonHazard"
          className="text-3xl text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaGitlab />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
