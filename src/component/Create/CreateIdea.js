import React from "react";
import Modal from "../Modal/Modal";
import { mdiDotsVertical, mdiRefresh, mdiTrashCan } from "@mdi/js";
import Icon from "@mdi/react";

const createModalHeader = {
  title: "Create Idea",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const CreateIdea = ({ open, setOpen, handleNext }) => {
  return (
    <Modal
      title={createModalHeader.title}
      subTitle={createModalHeader.subtitle}
      open={open}
      setOpen={setOpen}
      handleNext={handleNext}
      name={2}
    >
      <div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-x-12 gap-y-5 md:gap-y-7">
          <input
            type="text"
            className="max-w-[660px] w-full outline-none border border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 placeholder:text-[#999] placeholder:md:text-xl"
            placeholder="Input basic Idea Text Here..."
          />
          <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[175px] rounded-lg">
            Submit
          </button>
        </div>
        <div className="flex gap-7 flex-wrap">
          <div className="p-7 sm:max-w-[330px] w-full h-[350px] shadow-card rounded-2xl">
            <div className="flex items-center justify-between mb-7">
              <div className="text-2xl font-semibold">
                Idea 1
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
                Idea 2
              </div>
              <Icon
                path={mdiDotsVertical}
                size={"28px"}
                className="cursor-pointer"
              />
            </div>
            <div
              className="text-xl text-[#666]">
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
        <div className="p-7 text-right flex justify-end items-center">
          <button className="flex md:hidden mr-5 items-center min-w-[110px] rounded-lg p-2 text-[#FF1919] bg-[#FF1919] bg-opacity-10 text-lg">
            <Icon
              path={mdiTrashCan}
              color={"#FF1919"}
              className="mr-2"
              size={"30px"}
            />
            Delete
          </button>
          <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[125px] rounded-lg">
            Save
          </button>
          {/* <button
                className="bg-primary font-semibold ml-1 text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[125px] rounded-lg"
                onClick={() => handleNext(name)}
              >
                next
              </button> */}
        </div>
      </div>
    </Modal>
  );
};

export default CreateIdea;
