const Test = () => {
  return (
    // Hack: 最初に読み込んでおかないと背景色が反映されない
    <div className="hidden bg-odd">
      <div className="hidden bg-even"></div>
    </div>
  );
};

export default Test;
