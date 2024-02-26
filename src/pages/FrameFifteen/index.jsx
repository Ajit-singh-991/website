import React from "react";

import { Img } from "components";

const FrameFifteenPage = () => {
  return (
    <>
      <div className="h-[700px] mx-auto relative w-full">
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Img
              className="h-[697px] md:h-auto object-cover w-full"
              src="images/img_valentinvlasov.png"
              alt="valentinvlasov"
            />
          </div>
        </div>
        <Img
          className="absolute bottom-[0] h-[611px] inset-x-[0] mx-auto object-cover w-2/5"
          src="images/img_vegy1_611x567.png"
          alt="vegyOne"
        />
      </div>
    </>
  );
};

export default FrameFifteenPage;
