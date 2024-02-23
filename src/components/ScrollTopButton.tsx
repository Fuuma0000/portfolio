import { animateScroll as scroll } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const ScrollToTopButton = () => {
  const controls = useAnimation();

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });

    // トップにスクロールするときにアニメーションを開始
    controls.start({ y: -1980 });
  };

  return (
    <div className="bg-red-500">
      <motion.button
        initial={{ opacity: 100, y: 0 }}
        animate={controls}
        className={`fixed bottom-4 right-4 rounded-md bg-red-500 px-4 py-2 text-white`}
        onClick={scrollToTop}
      >
        トップにスクロール
      </motion.button>
    </div>
  );
};

export default ScrollToTopButton;
