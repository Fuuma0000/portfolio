import { animateScroll as scroll } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const ScrollToTopButton = () => {
  const controls = useAnimation();

  const scrollToTop = async () => {
    // トップにスクロール
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });

    // アニメーションが開始されたら非表示にする
    controls.start({ y: -1980 });

    // 一定時間待機
    await new Promise((resolve) => setTimeout(resolve, 1000));
    controls.start({ visibility: 'hidden' });

    // アニメーションが完了したら元の位置に戻し、表示する
    await controls.start({
      y: 100,
      opacity: 100,
      visibility: 'hidden',
      transition: { ease: 'easeInOut' },
    });

    controls.start({ y: 0, visibility: 'visible' });
  };

  return (
    <div className="bg-red-500">
      <motion.button
        initial={{ opacity: 100, y: 0 }}
        animate={controls}
        className={`fixed bottom-4 right-4 rounded-md bg-red-500 px-4 py-2 text-white`}
        onClick={() => {
          scrollToTop();
        }}
      >
        トップにスクロール
      </motion.button>
    </div>
  );
};

export default ScrollToTopButton;
