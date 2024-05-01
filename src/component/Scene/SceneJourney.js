import React from "react";
import Modal from "../Modal/Modal";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "@emotion/styled";

const createModalHeader = {
  title: "Scene Journey",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const SceneJourney = ({ open, setOpen, handleNext }) => {
  // eslint-disable-next-line
  const StyledNode = styled.div`
    padding: 5px;
    border-radius: 8px;
    display: inline-block;
  `;

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
        <div>
          <Tree
            lineWidth={"2px"}
            lineColor={"#007AFF"}
            lineBorderRadius={"10px"}
            lineHeight="42px"
            label={
              <div className="flex flex-col md:flex-row items-center justify-center mb-3 gap-x-12 gap-y-5 md:gap-y-7">
                <input
                  type="text"
                  className="max-w-[660px] w-full outline-none border border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 placeholder:text-[#999] placeholder:md:text-xl"
                  placeholder="Input Scene Text"
                />
                <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[175px] rounded-lg">
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
      </div>
    </Modal>
  );
};

export default SceneJourney;
