import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="sticky top-0 z-10">
      <div className="flex p-6 lg:container lg:mx-auto xl:w-3/4">
        <Link to="/">
          <div className="flex rounded-full bg-white/80 px-3 text-xl font-medium shadow-sm shadow-custom-blue-50/30 backdrop-blur-sm">
            <div className="relative block px-3 py-2 transition hover:text-custom-blue-50 ">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20
                }}
              >
                <FaHome />
              </motion.div>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
