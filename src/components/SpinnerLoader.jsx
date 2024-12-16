import React from "react";
import { BounceLoader } from "react-spinners";

const SpinnerLoader = () => {
  return (
    <div className="loader-overlay"> 
      <div className="loader-content"> 
        <BounceLoader color="rgba(46, 37, 36, 1)" size={60} />
      </div>
    </div>
  );
};

export default SpinnerLoader;
