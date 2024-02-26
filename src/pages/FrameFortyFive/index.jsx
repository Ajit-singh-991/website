import React from "react";

import { Img } from "components";

const FrameFortyFivePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[697px] md:px-5 relative w-full">
            <div className="h-[697px] m-auto w-full">
              <div className="h-[697px] m-auto w-full">
                <Img
                  className="h-[697px] m-auto object-cover w-full"
                  src="images/img_valentinvlasov.png"
                  alt="valentinvlasov"
                />
                <div className="absolute bottom-[1%] flex flex-col items-center justify-start right-[2%] w-[54%]">
                  <div className="h-[650px] relative w-full">
                    <Img
                      className="absolute h-[650px] inset-[0] justify-center m-auto object-cover w-full"
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
                    <div className="absolute bottom-[1%] flex flex-col items-center justify-start right-[6%] w-4/5">
                      <Img
                        className="h-[611px] md:h-auto object-cover w-full"
                        src="images/img_rightfarmer.png"
                        alt="rightfarmer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[2%] md:h-[536px] h-[559px] right-[16%] w-[46%] md:w-full">
                <Img
                  className="absolute h-[536px] left-[0] object-cover top-[0] w-[93%]"
                  src="images/img_orange.png"
                  alt="orange"
                />
                <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[66%]">
                  <Img
                    className="h-[371px] md:h-auto object-cover w-full"
                    src="images/img_beetrootright.png"
                    alt="beetrootright"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bottom-[8%] flex flex-col items-center justify-start right-[2%] w-[27%]">
              <Img
                className="h-[497px] md:h-auto object-cover w-full"
                src="images/img_brinjalright.png"
                alt="brinjalright"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameFortyFivePage;
