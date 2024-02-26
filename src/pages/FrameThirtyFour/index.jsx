import React from "react";

import { Img } from "components";

const FrameThirtyFourPage = () => {
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
            <div className="absolute bottom-[17%] h-[435px] right-[11%] w-[37%] sm:w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="h-[435px] relative w-full">
                  <Img
                    className="h-[435px] m-auto object-cover w-full"
                    src="images/img_vegright_435x519.png"
                    alt="vegright"
                  />
                  <div className="absolute flex flex-col items-center justify-start right-[10%] top-[8%] w-[32%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[259px] md:h-auto object-cover w-full"
                        src="images/img_kakarkaayiright_259x164.png"
                        alt="kakarkaayiright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[8%] flex flex-col items-center justify-start right-[0] w-1/2">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[333px] md:h-auto object-cover w-full"
                    src="images/img_brinjalright_333x259.png"
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

export default FrameThirtyFourPage;
