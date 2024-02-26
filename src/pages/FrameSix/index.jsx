import React from "react";

import { Img } from "components";

const FrameSixPage = () => {
  return (
    <>
      <div className="flex flex-col mx-auto relative w-full">
        <div className="flex flex-col items-center justify-start m-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              className="h-[697px] md:h-auto object-cover w-full"
              src="images/img_valentinvlasov.png"
              alt="valentinvlasov"
            />
          </div>
        </div>
        <Img
          className="h-[316px] mt-[-19.87px] mx-auto object-cover w-1/4 z-[1]"
          src="images/img_vegy1.png"
          alt="vegyOne"
        />
      </div>
    </>
  );
};

export default FrameSixPage;
