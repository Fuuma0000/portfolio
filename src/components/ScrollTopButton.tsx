import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // アニメーションの時間（ミリ秒）
      smooth: 'easeInOutQuad', // イージングの指定
    });
  };

  return (
    <button
      className="fixed bottom-4 right-4 rounded-md bg-blue-500 px-4 py-2 text-white"
      onClick={scrollToTop}
    >
      Scroll To Top
    </button>
  );
};

export default ScrollToTopButton;
