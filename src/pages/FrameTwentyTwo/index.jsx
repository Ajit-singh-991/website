import React from "react";

import { Img } from "components";

const FrameTwentyTwoPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[697px] md:px-5 relative w-full">
            <Img
              className="h-[697px] m-auto object-cover w-full"
              src="images/img_valentinvlasov.png"
              alt="valentinvlasov"
            />
            <Img
              className="absolute h-[108px] object-cover right-[18%] top-[16%] w-[7%]"
              src="images/img_vegy1_108x99.png"
              alt="vegyOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTwentyTwoPage;
