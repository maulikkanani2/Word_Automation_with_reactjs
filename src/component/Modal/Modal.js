import { mdiCloseCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, {useRef, useEffect} from "react";

const Modal = (props) => {
  
  return (
    <>
      <div className={`${props?.open ? "block" : "hidden"} fixed z-40 inset-0 bg-black bg-opacity-60 overflow-auto`}>
        <div className="w-full max-w-[90%] flex justify-center absolute left-[50%] top-[5%] translate-x-[-50%]">
          <div className="max-w-[1200px] w-full bg-white rounded-[15px]">
            <div className="pt-5 px-5 md:pt-7 md:px-7 flex justify-end items-center gap-8">
              <Icon
                path={mdiCloseCircleOutline}
                size={"30px"}
                className="cursor-pointer"
                onClick={() => props?.setOpen(false)}
              />
            </div>
            <div className="px-7 pt-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#222] text-center leading-normal mb-5">
                {props?.title}
              </h1>
              <p className="text-[#666] text-base md:text-lg lg:text-xl leading-normal text-center max-w-4xl mx-auto">
                {props?.subTitle}
              </p>
              <div className="mt-12 overflow-auto max-h-[calc(100vh_-_356px)] max-w-5xl mx-auto">
                {props?.children}
              </div>
            </div>
            <div className="p-7 text-right flex justify-end items-center">
              <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[125px] rounded-lg"
                onClick={props?.insert}
              >
                Insert Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
