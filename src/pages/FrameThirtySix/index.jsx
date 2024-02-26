import React from "react";

import { Img } from "components";

const FrameThirtySixPage = () => {
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
            <div className="absolute bottom-[1%] flex flex-col items-center justify-start right-[2%] w-[54%]">
              <div className="h-[650px] relative w-full">
                <div className="h-[650px] m-auto w-full">
                  <Img
                    className="h-[650px] m-auto object-cover w-full"
                    src="images/img_vegright.png"
                    alt="vegright"
                  />
                  <div className="absolute flex flex-col items-center justify-start right-[10%] top-[8%] w-[32%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[388px] md:h-auto object-cover w-full"
                        src="images/img_kakarkaayiright.png"
                        alt="kakarkaayiright"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[8%] flex flex-col items-center justify-start right-[0] w-1/2">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Img
                      className="h-[497px] md:h-auto object-cover w-full"
                      src="images/img_brinjalright.png"
                      alt="brinjalright"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameThirtySixPage;
