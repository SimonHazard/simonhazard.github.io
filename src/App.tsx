import cv from '/resume.pdf';
import Layout from './layout/Layout';

const App = () => {
  return (
    <Layout>
      <div className="flex grow flex-col items-center justify-center gap-4 p-8 text-slate-700 lg:container lg:mx-auto xl:w-3/4">
        <div className="flex flex-col gap-2 text-center">
          <div className="text-xl lg:text-3xl">French web developer</div>
          <div className="text-lg ">
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
        <a
          className="rounded-full bg-white px-4 py-1 text-black shadow-md transition hover:text-custom-blue-50 lg:text-xl"
          href={cv}
        >
          Resume
        </a>
      </div>
    </Layout>
  );
};

export default App;
