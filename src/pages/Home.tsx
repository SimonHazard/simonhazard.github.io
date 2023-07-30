import cv from '/resume.pdf';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 text-slate-700 lg:container lg:mx-auto xl:w-3/4">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="text-xl lg:text-3xl">French web developer</div>
        <div className="text-lg sm:w-2/3">
          I'm Simon, based in Le Havre. I develop mainly in NodeJS ecosystem
          with TypeScript and I enjoy discovering new things.
        </div>
      </div>
      <a
        className="rounded-full bg-white px-4 py-1 text-black shadow-md transition hover:text-custom-blue-50 lg:text-xl"
        href={cv}
      >
        Resume
      </a>
    </div>
  );
};

export default Home;
