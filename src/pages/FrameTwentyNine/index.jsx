import React from "react";

import { Img } from "components";

const FrameTwentyNinePage = () => {
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
            <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[23%] w-[13%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[150px] relative w-full">
                  <div className="h-[150px] m-auto w-full">
                    <Img
                      className="h-[150px] m-auto object-cover w-full"
                      src="images/img_vegright_150x179.png"
                      alt="vegright"
                    />
                    <div className="absolute flex flex-col items-center justify-start right-[10%] top-[8%] w-[32%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-[89px] md:h-auto object-cover w-full"
                          src="images/img_kakarkaayiright_89x57.png"
                          alt="kakarkaayiright"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[7%] flex flex-col items-center justify-start right-[0] w-1/2">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        className="h-[115px] md:h-auto object-cover w-full"
                        src="images/img_brinjalright_115x89.png"
                        alt="brinjalright"
                      />
                    </div>
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

export default FrameTwentyNinePage;
