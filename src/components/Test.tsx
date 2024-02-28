const Test = () => {
  return (
    // Hack: 最初に読み込んでおかないと背景色が反映されない
    <>
      <div className="hidden bg-odd"></div>
      <div className="hidden bg-even"></div>
      <div className="bg-dark-odd hidden"></div>
      <div className="bg-dark-even hidden"></div>
    </>
  );
};

export default Test;
