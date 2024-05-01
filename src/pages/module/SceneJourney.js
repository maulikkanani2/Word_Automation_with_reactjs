import React, { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import PageLayout from "../../component/PageLayout";
import fetchData from "../../apiService";

const header = {
  title: "Scene Journey",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const SceneJourney = () => {
  const [input_text, setInput_text] = useState("");
  const handleInputText = (event) => {
    const text = event.target.value;
    setInput_text(text)
  }
  const payload = { "value": input_text }
  const handleResponse = async () => {
    try {
      const responseData = await fetchData('generate_scenes/', JSON.stringify(payload));
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }
  return (
    <PageLayout header={header}>
      <div>
        <Tree
          lineWidth={"2px"}
          lineColor={"#007AFF"}
          lineBorderRadius={"10px"}
          lineHeight="42px"
          label={
            <div className="flex flex-col md:flex-row items-center justify-center mb-3 gap-x-12 gap-y-5 md:gap-y-7">
              <textarea
                cols={20}
                rows={3}
                className="
                max-w-[660px] w-full outline-none border 
                border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 
                placeholder:text-[#999] placeholder:md:text-xl"
                placeholder="Input Scene Text"
                value={input_text}
                onChange={handleInputText}
              />
              <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[175px] rounded-lg" onClick={handleResponse}>
                Submit
              </button>
            </div>
          }
        >
          <TreeNode
            label={
              <div className="mx-auto bg-[#EEEEEE] rounded-lg px-2 xl:rounded-[15px] max-w-[200px] xl:max-w-[250px] w-full py-3 lg:py-5 xl:py-7 font-semibold text-base md:text-[18px] lg:text-[20px] xl:text-[26px]">
                Scene 1a
              </div>
            }
          >
            <TreeNode
              label={
                <div className="bg-[#EEEEEE] rounded-lg px-2 xl:rounded-[15px] max-w-[200px] xl:max-w-[250px] w-full py-3 lg:py-5 xl:py-7 font-semibold text-base md:text-[18px] lg:text-[20px] xl:text-[26px]">
                  Scene 2a
                </div>
              }
            />
            <TreeNode
              label={
                <div className="bg-[#EEEEEE] rounded-lg px-2 xl:rounded-[15px] max-w-[200px] xl:max-w-[250px] w-full py-3 lg:py-5 xl:py-7 font-semibold text-base md:text-[18px] lg:text-[20px] xl:text-[26px]">
                  Scene 2b
                </div>
              }
            />
            <TreeNode
              label={
                <div className="bg-[#EEEEEE] rounded-lg px-2 xl:rounded-[15px] max-w-[200px] xl:max-w-[250px] w-full py-3 lg:py-5 xl:py-7 font-semibold text-base md:text-[18px] lg:text-[20px] xl:text-[26px]">
                  Scene 2c
                </div>
              }
            />
          </TreeNode>
          <TreeNode
            label={
              <div className="bg-[#EEEEEE] rounded-lg px-2 xl:rounded-[15px] max-w-[200px] xl:max-w-[250px] w-full py-3 lg:py-5 xl:py-7 font-semibold text-base md:text-[18px] lg:text-[20px] xl:text-[26px]">
                Scene 1b
              </div>
            }
          ></TreeNode>
          <TreeNode
            label={
              <div className="bg-[#EEEEEE] rounded-lg px-2 xl:rounded-[15px] max-w-[200px] xl:max-w-[250px] w-full py-3 lg:py-5 xl:py-7 font-semibold text-base md:text-[18px] lg:text-[20px] xl:text-[26px]">
                Scene 1c
              </div>
            }
          ></TreeNode>
        </Tree>
      </div>
      <div className="p-7 text-right flex justify-center sm:justify-end items-center">
        <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[125px] rounded-lg">
          Save
        </button>
      </div>
    </PageLayout>
  );
};

export default SceneJourney;
