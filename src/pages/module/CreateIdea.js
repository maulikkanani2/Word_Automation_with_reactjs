import Icon from "@mdi/react";
import React from "react";
import {
  mdiDotsVertical,
  mdiRefresh,
} from "@mdi/js";
import PageLayout from "../../component/PageLayout";

const header = {
  title: "Create Idea",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const CreateIdea = () => {
  return (
    <PageLayout header={header}>
      <div className="max-w-[1500px] mx-auto w-full bg-white rounded-[15px]">
        <div className="max-w-6xl mx-auto mb-16">
          <div>
            <div className="flex flex-col md:flex-row items-center justify-evenly gap-x-12 gap-y-5 md:gap-y-7">
              <textarea
                cols={20}
                rows={3}
                className="max-w-[660px] w-full outline-none border border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 placeholder:text-[#999] placeholder:md:text-xl"
                placeholder="Input basic Idea Text Here..."
              />
              <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[175px] rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-7 flex-wrap">
          <div className="p-7  sm:max-w-[330px] w-full h-[350px] shadow-card rounded-2xl">
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
            <div className="text-xl text-[#666]">
              some Idea........
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

export default CreateIdea;
