import React, { useState } from "react";
import Layout from "../component/Layout/Layout";
import Icon from "@mdi/react";
import { mdiMenuRight } from "@mdi/js";

const SceneProject = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleExpand = (id) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };
  return (
    <>
      <Layout>
        <div className="w-[300px] fixed inset-y-0 left-0 shadow-card mt-[80px] overflow-hidden">
          <div className="h-full">
            <div className="text-center text-[#222] font-semibold text-xl py-5 border-b border-[#DDDDDD]">
              Notes
            </div>
            <div className="h-[calc(100%_-_70px)] overflow-auto px-2.5">
              <div
                className="py-5 cursor-pointer select-none border-b border-[#DDDDDD]"
                onClick={() => {
                  handleExpand(1);
                }}
              >
                <div className="flex items-center">
                  <Icon
                    path={mdiMenuRight}
                    color={"#999999"}
                    size={"34px"}
                    className={`inline mr-1 ${
                      expandedItem === 1 ? "rotate-90" : ""
                    }`}
                  />
                  <span className="font-medium text-base text-[#222]">
                    Idea
                  </span>
                </div>
                <div className={`mt-5 ${expandedItem === 1 ? 'block':'hidden'}`}>
                  <div className="flex items-center justify-around">
                    <div className="flex flex-col h-[88px] w-[110px] border-[2px] border-black ">
                      <div className="h-5 border-b border-black"></div>
                      <div className="flex-grow flex justify-center items-center text-sm font-medium">
                        idea 1
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center text-sm font-medium h-[88px] w-[110px] border-[2px] rounded-t-3xl border-black">
                        Plot 2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                className="py-5 cursor-pointer select-none border-b border-[#DDDDDD]"
                onClick={() => {
                  handleExpand(2);
                }}
              >
                <div className="flex items-center">
                  <Icon
                    path={mdiMenuRight}
                    color={"#999999"}
                    size={"34px"}
                    className={`inline mr-1 ${
                      expandedItem === 2 ? "rotate-90" : ""
                    }`}
                  />
                  <span className="font-medium text-base text-[#222]">
                    Outline
                  </span>
                </div>
                <div></div>
              </div>
              <div
                className="py-5 cursor-pointer select-none border-b border-[#DDDDDD]"
                onClick={() => {
                  handleExpand(3);
                }}
              >
                <div className="flex items-center">
                  <Icon
                    path={mdiMenuRight}
                    color={"#999999"}
                    size={"34px"}
                    className={`inline mr-1 ${
                      expandedItem === 3 ? "rotate-90" : ""
                    }`}
                  />
                  <span className="font-medium text-base text-[#222]">
                    Scene
                  </span>
                </div>
                <div></div>
              </div>
              <div
                className="py-5 cursor-pointer select-none border-b border-[#DDDDDD]"
                onClick={() => {
                  handleExpand(4);
                }}
              >
                <div className="flex items-center">
                  <Icon
                    path={mdiMenuRight}
                    color={"#999999"}
                    size={"34px"}
                    className={`inline mr-1 ${
                      expandedItem === 4 ? "rotate-90" : ""
                    }`}
                  />
                  <span className="font-medium text-base text-[#222]">
                    Evaluate
                  </span>
                </div>
                <div></div>
              </div> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SceneProject;
