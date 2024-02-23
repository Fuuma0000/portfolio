import { animateScroll as scroll } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const ScrollToTopButton = () => {
  const controls = useAnimation();

  const scrollToTop = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 一旦下に少しボタンが移動する
    await controls.start({ y: 50 });

    // トップにスクロール
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });

    // ボタンを上に移動させるアニメーション
    await controls.start({
      y: -1980,
      transition: { duration: 2 },
    });

    // アニメーションが完了したら非表示にし、画面の下側に移動させる
    await controls.start({
      y: 30,
      visibility: 'hidden',
    });

    // 見えるようにして、画面外から元の位置に移動させる
    controls.start({ y: 0, visibility: 'visible' });
  };

  return (
    <motion.button
      initial={{ opacity: 150, y: 0 }}
      animate={controls}
      className={`fixed bottom-4 right-4 rounded-md bg-red-500 px-4 py-2 text-white`}
      onClick={() => {
        scrollToTop();
      }}
    >
      トップにスクロール
    </motion.button>
  );
};

export default ScrollToTopButton;
