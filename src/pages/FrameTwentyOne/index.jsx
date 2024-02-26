import React from "react";

import { Img } from "components";

const FrameTwentyOnePage = () => {
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
              className="absolute h-[115px] object-cover right-[23%] top-[13%] w-[8%]"
              src="images/img_vegy1_115x109.png"
              alt="vegyOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameTwentyOnePage;
