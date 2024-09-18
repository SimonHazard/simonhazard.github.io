import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-muted py-6 md:py-8 lg:py-10 bottom-0">
      <div className="container mx-auto flex flex-row items-center justify-center space-x-4">
        <a href="https://github.com/SimonHazard">
          <Image
            src="/static/logos/github-mark.svg"
            alt="Github link"
            width={30}
            height={30}
          />
        </a>
        <a href="https://gitlab.com/SimonHazard">
          <Image
            src="/static/logos/gitlab-logo.svg"
            alt="Gitlab link"
            width={30}
            height={30}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
