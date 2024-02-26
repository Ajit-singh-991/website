import React from "react";

import { Img, Text } from "components";

const FrameFortySixPage = () => {
  return (
    <>
      <div className="flex flex-col font-daysone items-center justify-start mx-auto w-full">
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
            <div className="absolute bottom-[2%] md:h-[536px] h-[559px] right-[2%] w-3/5 md:w-full">
              <div className="absolute h-[536px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[45%]">
                  <Img
                    className="h-[497px] md:h-auto object-cover w-full"
                    src="images/img_brinjalright.png"
                    alt="brinjalright"
                  />
                </div>
                <Img
                  className="absolute h-[536px] inset-y-[0] left-[0] my-auto object-cover w-[71%]"
                  src="images/img_orange.png"
                  alt="orange"
                />
              </div>
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[51%]">
                <Img
                  className="h-[371px] md:h-auto object-cover w-full"
                  src="images/img_beetrootright.png"
                  alt="beetrootright"
                />
              </div>
            </div>
          </div>
          <Text
            className="absolute left-[3%] sm:text-[34.34px] md:text-[40.34px] text-[44.34px] text-white-A700_7e top-[0]"
            size="txtDaysOneRegular4434"
          >
            <span className="text-white-A700 font-permanentmarker text-left font-normal">
              <>
                fff
                <br />
              </>
            </span>
            <span className="text-white-A700 font-caveat text-left text-[15px] font-normal">
              fresh from farm
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default FrameFortySixPage;
