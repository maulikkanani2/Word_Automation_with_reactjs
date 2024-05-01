import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { mdiChevronDown, mdiRefresh } from "@mdi/js";
import Icon from "@mdi/react";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

const evaluateProjectHeader = {
  title: "Evaluate Project",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const EvaluateProject = ({ open, setOpen, handleNext }) => {
  const [selectFilterVal, setSelectFilterVal] = useState("Novel/Script");
  return (
    <Modal
      title={evaluateProjectHeader.title}
      subTitle={evaluateProjectHeader.subtitle}
      open={open}
      setOpen={setOpen}
      handleNext={handleNext}
      name={6}
    >
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center mb-10 gap-x-12 gap-y-5 md:gap-y-7">
          <div>
            <Menu placement="bottom-start">
              <MenuHandler>
                <div className="min-w-0 w-full sm:min-w-[170px] flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
                  {selectFilterVal}
                  <Icon
                    className="inline ml-2"
                    path={mdiChevronDown}
                    size={1}
                  />
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={() => { setSelectFilterVal("Novel"); }}>
                  Novel
                </MenuItem>
                <MenuItem onClick={() => { setSelectFilterVal("Script"); }}>
                  Script
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <button className="bg-primary self-center font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 w-full max-w-[175px] rounded-lg">
            Submit
          </button>
        </div>
        <div className="flex gap-7 flex-wrap">
          <div className="p-7 sm:max-w-[848px] w-full h-[350px] shadow-card rounded-2xl">
            <div className="flex items-center justify-between mb-7">
              <div className="text-2xl font-semibold">Evaluation</div>
            </div>
            <div className="text-xl text-[#666]">Plot Evaluation...</div>
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

export default EvaluateProject;
