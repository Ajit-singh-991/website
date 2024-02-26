import React from "react";

import { Button, Img, Input, Text } from "components";

const FrameFortyEightPage = () => {
  return (
    <>
      <div className="flex flex-col font-daysone items-center justify-start mx-auto pb-0.5 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[697px] md:h-[815px] md:px-5 relative w-full">
            <div className="h-[697px] md:h-[815px] m-auto w-full">
              <Img
                className="h-[697px] m-auto object-cover w-full"
                src="images/img_valentinvlasov.png"
                alt="valentinvlasov"
              />
              <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-start justify-between m-auto w-[95%]">
                <Text
                  className="sm:text-[34.34px] md:text-[40.34px] text-[44.34px] text-white-A700_7e"
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
                <div className="flex flex-col items-center justify-start md:mt-0 mt-[27px]">
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
            </div>
            <div className="absolute flex flex-col font-roboto gap-11 h-max inset-y-[0] justify-start my-auto right-[2%] w-[83%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mr-12 w-[96%] md:w-full">
                <div className="flex flex-row items-start justify-between w-[38%] md:w-full">
                  <Text
                    className="text-lg text-white-A700_99"
                    size="txtRobotoRomanBold18"
                  >
                    Home
                  </Text>
                  <Text
                    className="text-lg text-white-A700_99"
                    size="txtRobotoRomanBold18"
                  >
                    About Us
                  </Text>
                  <Text
                    className="text-lg text-white-A700_99"
                    size="txtRobotoRomanBold18"
                  >
                    Shop
                  </Text>
                  <Text
                    className="text-lg text-white-A700_99"
                    size="txtRobotoRomanBold18"
                  >
                    Contact
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-center justify-between w-[45%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[47%] sm:w-full">
                    <div className="h-[38px] relative w-full">
                      <Img
                        className="h-[38px] m-auto object-cover rounded-[19px] w-full"
                        src="images/img_rectangle96.png"
                        alt="rectangleNinetySix"
                      />
                      <Input
                        name="groupSeven"
                        placeholder="Search for vegetables or fruits"
                        className="leading-[normal] p-0 placeholder:text-white-A700_66 text-left text-xs w-full"
                        wrapClassName="border border-black-900 border-solid flex inset-[0] justify-center m-auto w-full"
                        prefix={
                          <Img
                            className="h-[15px] mr-[11px] right-[5%] absolute my-auto"
                            src="images/img_rewind.svg"
                            alt="rewind"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-row font-roboto gap-5 items-center justify-between w-[38%] sm:w-full">
                    <a
                      href="javascript:"
                      className="text-lg text-white-A700_99"
                    >
                      <Text size="txtRobotoRomanBold18">Login</Text>
                    </a>
                    <Button className="cursor-pointer font-bold leading-[normal] min-w-[127px] text-center text-lg">
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
              <div className="md:h-[536px] h-[559px] ml-80 md:ml-[0] relative w-[73%] md:w-full">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameFortyEightPage;
