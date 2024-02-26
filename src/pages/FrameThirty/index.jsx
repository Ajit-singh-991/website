import React from "react";

import { Img } from "components";

const FrameThirtyPage = () => {
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
            <div className="absolute h-[216px] inset-y-[0] my-auto right-[20%] w-[18%]">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="h-[216px] relative w-full">
                  <Img
                    className="h-[216px] m-auto object-cover w-full"
                    src="images/img_vegright_216x258.png"
                    alt="vegright"
                  />
                  <div className="absolute flex flex-col items-center justify-start right-[10%] top-[8%] w-[32%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[129px] md:h-auto object-cover w-full"
                        src="images/img_kakarkaayiright_129x81.png"
                        alt="kakarkaayiright"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[7%] flex flex-col items-center justify-start right-[0] w-1/2">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[165px] md:h-auto object-cover w-full"
                    src="images/img_brinjalright_165x128.png"
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

export default FrameThirtyPage;
