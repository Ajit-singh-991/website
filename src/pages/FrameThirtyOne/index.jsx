import React from "react";

import { Img } from "components";

const FrameThirtyOnePage = () => {
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
            <div className="absolute h-[290px] inset-y-[0] my-auto right-[17%] w-1/4">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="h-[290px] relative w-full">
                  <Img
                    className="h-[290px] m-auto object-cover w-full"
                    src="images/img_vegright_290x347.png"
                    alt="vegright"
                  />
                  <div className="absolute flex flex-col items-center justify-start right-[10%] top-[8%] w-[32%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[173px] md:h-auto object-cover w-full"
                        src="images/img_kakarkaayiright_173x110.png"
                        alt="kakarkaayiright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[8%] flex flex-col items-center justify-start right-[0] w-1/2">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[222px] md:h-auto object-cover w-full"
                    src="images/img_brinjalright_222x173.png"
                    alt="brinjalright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameThirtyOnePage;
