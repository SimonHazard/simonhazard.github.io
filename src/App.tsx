import cv from '/resume.pdf';
import image from './assets/image.jpg';
import Layout from './layout/Layout';

const App = () => {
  return (
    <Layout>
      <div className="flex h-full w-full grow flex-col items-center justify-center gap-4 text-slate-700">
        <img
          className="mx-auto h-48 w-48 rounded-full shadow"
          src={image}
          alt="Picture of me"
        />
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
          className="rounded-full border border-creme-600 px-4 py-1 shadow-md hover:bg-creme-100 lg:text-xl"
          href={cv}
        >
          Resume
        </a>
      </div>
    </Layout>
  );
};

export default App;
