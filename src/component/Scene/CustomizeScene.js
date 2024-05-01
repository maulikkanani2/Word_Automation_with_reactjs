import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { mdiChevronDown, mdiRefresh } from "@mdi/js";
import Icon from "@mdi/react";
import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";

const createModalHeader = {
  title: "Customize Scene with Instructions",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const CustomizeScene = ({ open, setOpen, handleNext }) => {
  const [selectFilterVal, setSelectFilterVal] = useState('Novel/Script')
  return (
    <Modal
      title={createModalHeader.title}
      subTitle={createModalHeader.subtitle}
      open={open}
      setOpen={setOpen}
      name={9}
      handleNext={handleNext}
    >
      <div>
        <div className="flex flex-col sm:flex-row items-center justify-center mb-7 gap-x-6 md:gap-x-12 gap-y-5 md:gap-y-7">
          <input
            type="text"
            className="max-w-[468px] w-full outline-none border border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 placeholder:text-[#999] placeholder:md:text-xl"
            placeholder="Input Scene Text"
          />
          <div>
            <Menu placement="bottom-start">
              <MenuHandler>
                <div className="min-w-[170px] flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
                  {selectFilterVal}
                  <Icon
                    className="inline ml-2"
                    path={mdiChevronDown}
                    size={1}
                  />
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem
                  onClick={() => { setSelectFilterVal("Novel") }}>
                  Novel
                </MenuItem>
                <MenuItem
                  onClick={() => { setSelectFilterVal("Script") }}>
                  Script
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center mb-10 gap-x-6 md:gap-x-12 gap-y-5 md:gap-y-7">
          <input
            type="text"
            className="max-w-[468px] w-full outline-none border border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 placeholder:text-[#999] placeholder:md:text-xl"
            placeholder="User instructons Text"
          />
          <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[175px] rounded-xl">
            Submit
          </button>
        </div>
        <div className="flex gap-7 flex-wrap">
          <div className="p-7 sm:max-w-[848px] w-full h-[300px] shadow-card rounded-2xl">
            <div className="flex items-center justify-between mb-7">
              <div className="text-2xl font-semibold">
                Description
              </div>
            </div>
            <div className="text-xl text-[#666]">
              Text.....
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[60px] h-[60px] rounded-full bg-primary bg-opacity-10 flex items-center justify-center cursor-pointer">
              <Icon
                path={mdiRefresh}
                className="text-primary"
                size={"35px"}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomizeScene;
