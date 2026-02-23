const OrangeBox = () => {
  return (
    <>
      <div className="absolute top-4 left-4 grid grid-cols-2 grid-rows-2 gap-2">
        <div className="w-5 h-5 bg-orange-500" />
        <div className="w-5 h-5 bg-orange-500" />
        <div className="w-5 h-5 bg-orange-500" />
      </div>
      <div className="absolute top-4 right-4 grid grid-cols-2 grid-rows-2 gap-2">
        <div className="col-start-1 row-start-1 w-5 h-5 bg-orange-500" />
        <div className="col-start-2 row-start-1 w-5 h-5 bg-orange-500" />
        <div className="col-start-2 row-start-2 w-5 h-5 bg-orange-500" />
      </div>
    </>
  );
};

export default OrangeBox;
