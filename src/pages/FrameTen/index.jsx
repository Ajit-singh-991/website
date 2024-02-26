import React from "react";

import { Img } from "components";

const FrameTenPage = () => {
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
          className="h-[749px] mt-[-347.87px] mx-auto object-cover w-3/5 z-[1]"
          src="images/img_vegy1.png"
          alt="vegyOne"
        />
      </div>
    </>
  );
};

export default FrameTenPage;
