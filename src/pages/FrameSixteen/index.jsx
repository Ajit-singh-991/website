import React from "react";

import { Img } from "components";

const FrameSixteenPage = () => {
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
              className="absolute bottom-[6%] h-[527px] inset-x-[0] mx-auto object-cover w-[36%]"
              src="images/img_vegy1_527x514.png"
              alt="vegyOne"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameSixteenPage;
