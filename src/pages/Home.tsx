import cv from '/resume.pdf';
import image from '../assets/image.jpg';
import Articles from '../component/Articles';
import { motion } from 'framer-motion';

const description =
  'Developer based in Le Havre. I develop mainly in NodeJS ecosystem with TypeScript and I enjoy discovering new things.';

const Home = () => {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-6 text-slate-700">
      <section className="flex flex-col gap-3">
        <div>
          <img
            className="mb-2 h-36 w-36 rounded-full shadow-md shadow-custom-blue-50/50"
            src={image}
            alt="Picture of me"
          />
          <div className="text-2xl font-bold text-slate-800">Simon HAZARD</div>
          <div className="text-xl font-medium text-slate-800">
            Frontend developer
          </div>
        </div>

        <div>
          <div className="w-full rounded-xl border-gray-200 bg-white px-4 py-3 shadow-sm">
            <p className="font-mono">
              {description.split('').map((char, index) => {
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.025,
                      delay: index * 0.0125,
                      type: 'spring'
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </p>
            <div className="mt-2 flex justify-center">
              <a
                className="w-fit rounded-full px-4 py-1 font-medium shadow-sm shadow-custom-blue-50/30 backdrop-blur-sm transition hover:text-custom-blue-50"
                href={cv}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <Articles />
    </div>
  );
};

export default Home;
