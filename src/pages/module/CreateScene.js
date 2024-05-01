import React, { useState } from "react";
import PageLayout from "../../component/PageLayout";
import { mdiChevronDown, mdiRefresh } from "@mdi/js";
import Icon from "@mdi/react";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

const header = {
  title: "Create Scene",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const CreateScene = () => {
  const [selectFilterVal, setSelectFilterVal] = useState("Novel/Script");

  return (
    <PageLayout header={header}>
      <div className="max-w-[1500px] mx-auto w-full bg-white rounded-[15px]">
        <div className="max-w-6xl mx-auto mb-16">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 items-center mb-16 gap-y-5 gap-x-10 md:gap-y-7">
              <textarea
                cols={20}
                rows={3}
                className="max-w-[660px] xl:col-span-2 w-full outline-none border border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 placeholder:text-[#999] placeholder:md:text-xl"
                placeholder="Input Scene Text"
              />
              <div className="justify-self-center sm:justify-self-start w-full">
                <Menu placement="bottom-start">
                  <MenuHandler>
                    <div className="max-w-[280px] mx-auto min-w-[170px] flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
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
                      onClick={() => {
                        setSelectFilterVal("Novel");
                      }}
                    >
                      Novel
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        setSelectFilterVal("Script");
                      }}
                    >
                      Script
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
              <button className="bg-primary sm:col-span-2 xl:col-span-1 justify-self-center xl:justify-self-start font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[175px] rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-7 flex-wrap">
          <div
            className="p-7  sm:max-w-[848px] w-full h-[350px] shadow-card rounded-2xl">
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
      <div className="p-7 text-right flex justify-center sm:justify-end items-center">
        <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[125px] rounded-lg">
          Save
        </button>
      </div>
    </PageLayout>
  );
};

export default CreateScene;
