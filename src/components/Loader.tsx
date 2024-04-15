import { Triangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#894FFF"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
