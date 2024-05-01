import React, { useState } from "react";
import { mdiChevronDown, mdiRefresh } from "@mdi/js";
import Icon from "@mdi/react";
import Modal from "../Modal/Modal";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
const createStructureHeader = {
  title: "Create Scene Genre",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const filterTypes = [
  {
    type: "wild",
    val: ["wild 1", "wild 2", "wild 3"],
  },
  {
    type: "thriller",
    val: ["Thriller 1", "Thriller 2", "Thriller 3", "Thriller 4"],
  },
  {
    type: "romantic",
    val: ["Romantic 1", "Romantic 2", "Romantic 3"],
  },
  {
    type: "banal",
    val: ["Banal 1", "Banal 2", "Banal 3", "Banal 4"],
  },
];

const initialVal = {
  wild: "Wild",
  thriller: "Thriller",
  romantic: "Romantic",
  banal: "Banal",
};



const CreateSceneGenre = ({ open, setOpen, handleNext }) => {
  const [selectScriptVal, setSelectScriptVal] = useState("Novel/Script");
  const [selectVal, setSelectVal] = useState(initialVal);

  const handleFilterValChange = (item, type) => {
    setSelectVal({ ...selectVal, [type]: item });
  };

  const handleRefresh = () => {
    setSelectVal(initialVal);
  };

  return (
    <Modal
      title={createStructureHeader.title}
      subTitle={createStructureHeader.subtitle}
      open={open}
      setOpen={setOpen}
      name={8}
      handleNext={handleNext}
    >
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center mb-10 gap-y-5 gap-3 sm:gap-x-5 md:gap-y-7">
          <div className="col-span-2">
            <input
              type="text"
              className="w-full outline-none border border-[#aaa] rounded-xl py-3 lg:py-5 px-5 lg:px-7 placeholder:text-[#999] placeholder:lg:text-xl"
              placeholder="Text"
            />
          </div>
          <div>
            <Menu placement="bottom-start">
              <MenuHandler>
                <div className="min-w-[170px] flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
                  {selectScriptVal}
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
                    setSelectScriptVal("Novel");
                  }}
                >
                  Novel
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setSelectScriptVal("Script");
                  }}
                >
                  Script
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 w-full max-w-[175px] rounded-lg">
            Submit
          </button>
        </div>
        <div className="flex gap-3 items-start justify-between mb-10">
          <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 flex-grow">
            {filterTypes.map((item, index) => {
              return (
                <div key={index}>
                  <Menu placement="bottom-start">
                    <MenuHandler>
                      <div className="max-w-full sm:max-w-[180px] flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
                        {selectVal[item.type]}
                        <Icon
                          className="inline ml-2"
                          path={mdiChevronDown}
                          size={1}
                        />
                      </div>
                    </MenuHandler>
                    <MenuList>
                      {item.val.map((listItem, itemIndex) => {
                        return (
                          <MenuItem
                            onClick={() => {
                              handleFilterValChange(listItem, item.type);
                            }}
                            key={itemIndex}
                          >
                            {listItem}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Menu>
                </div>
              );
            })}
          </div>
          <div className="max-w-[70.42px] flex justify-center w-full">
            <div className="w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] rounded-full bg-primary bg-opacity-10 flex items-center justify-center cursor-pointer"
              onClick={handleRefresh}
            >
              <Icon
                path={mdiRefresh}
                className="text-primary w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]"
              />
            </div>
          </div>
        </div>
        <div className="p-5 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            <div className="p-7 md:max-w-[260px] w-full h-[300px] shadow-card rounded-2xl">
              <div className="flex items-center justify-between mb-7">
                <div className="text-2xl font-semibold">
                  Description
                </div>
              </div>
              <div className="text-xl text-[#666]">
                Text.....
              </div>
            </div>
            <div className="p-7 md:max-w-[260px] w-full h-[300px] shadow-card rounded-2xl">
              <div className="flex items-center justify-between mb-7">
                <div className="text-2xl font-semibold">
                  Description
                </div>
              </div>
              <div className="text-xl text-[#666]">
                Text.....
              </div>
            </div>
            <div className="p-7 md:max-w-[260px] w-full h-[300px] shadow-card rounded-2xl">
              <div className="flex items-center justify-between mb-7">
                <div className="text-2xl font-semibold">
                  Description
                </div>
              </div>
              <div className="text-xl text-[#666]">
                Text.....
              </div>
            </div>
            <div className="p-7 md:max-w-[260px] w-full h-[300px] shadow-card rounded-2xl">
              <div className="flex items-center justify-between mb-7">
                <div className="text-2xl font-semibold">
                  Description
                </div>
              </div>
              <div className="text-xl text-[#666]">
                Text.....
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateSceneGenre;
