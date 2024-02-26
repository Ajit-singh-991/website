import React from "react";

import { Img } from "components";

const FrameThirtyTwoPage = () => {
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
            <div className="absolute h-[369px] inset-y-[0] my-auto right-[14%] w-[31%] sm:w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="h-[369px] relative w-full">
                  <Img
                    className="h-[369px] m-auto object-cover w-full"
                    src="images/img_vegright_369x440.png"
                    alt="vegright"
                  />
                  <div className="absolute flex flex-col items-center justify-start right-[10%] top-[8%] w-[32%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[220px] md:h-auto object-cover w-full"
                        src="images/img_kakarkaayiright_220x139.png"
                        alt="kakarkaayiright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[8%] flex flex-col items-center justify-start right-[0] w-1/2">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_brinjalright_282x219.png"
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

export default FrameThirtyTwoPage;
