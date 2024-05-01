import React, { useState } from "react";
import { mdiChevronDown, mdiDotsVertical, mdiRefresh } from "@mdi/js";
import Icon from "@mdi/react";
import Modal from "../Modal/Modal";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

const createPlotHeader = {
  title: "Create Plot",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const CreatePlot = ({ open, setOpen, handleNext }) => {
  const [selectFilterVal, setSelectFilterVal] = useState('Novel/Script')

  return (
    <Modal
      title={createPlotHeader.title}
      subTitle={createPlotHeader.subtitle}
      open={open}
      setOpen={setOpen}
      handleNext={handleNext}
      name={3}
    >
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center mb-10  gap-y-5 gap-x-3 md:gap-y-7">
          <div>
            <input
              type="text"
              className="w-full outline-none border border-[#aaa] rounded-xl py-3 lg:py-5 px-5 lg:px-7 placeholder:text-[#999] placeholder:lg:text-xl"
              placeholder="Input basic Idea"
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full outline-none border border-[#aaa] rounded-xl py-3 lg:py-5 px-5 lg:px-7 placeholder:text-[#999] placeholder:lg:text-xl"
              placeholder="User Instructions"
            />
          </div>
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
                  onClick={zasa}>
                  Novel Item 1
                </MenuItem>
                <MenuItem
                  onClick={() => { setSelectFilterVal("Script Item 1") }}>
                  Script Item 2
                </MenuItem>
                <MenuItem
                  onClick={() => { setSelectFilterVal("Script Item 1") }}>
                  Script Item 3
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 w-full max-w-[175px] rounded-lg">
            Submit
          </button>
        </div>
        <div className="flex gap-7 flex-wrap">
          <div className="p-7 sm:max-w-[330px] w-full h-[350px] shadow-card rounded-2xl">
            <div className="flex items-center justify-between mb-7">
              <div className="text-2xl font-semibold">
                Plot 1
              </div>
              <Icon
                path={mdiDotsVertical}
                size={"28px"}
                className="cursor-pointer"
              />
            </div>
            <div className="text-xl text-[#666]">
              some Idea........
            </div>
          </div>
          <div className="p-7 sm:max-w-[330px] w-full h-[350px] shadow-card rounded-2xl">
            <div className="flex items-center justify-between mb-7">
              <div className="text-2xl font-semibold">
                Plot 2
              </div>
              <Icon
                path={mdiDotsVertical}
                size={"28px"}
                className="cursor-pointer"
              />
            </div>
            <div className="text-xl text-[#666]">
              some Idea........
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[60px] h-[60px] rounded-full bg-primary bg-opacity-10 flex items-center justify-center cursor-pointer">
              <Icon
                path={mdiRefresh}
                className="text-primary btn-animation"
                size={"35px"}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePlot;
