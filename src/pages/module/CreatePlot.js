import React, { useState, useRef } from "react";
import ReactMarkdown from 'react-markdown';
import PageLayout from "../../component/PageLayout";
import { mdiChevronDown, mdiDotsVertical, mdiRefresh, mdiArrowRightBold } from "@mdi/js";
import Icon from "@mdi/react";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,

} from "@material-tailwind/react";
import { Popup } from "./Popup";
import fetchData from "../../apiService";
import { FlagPopup } from "../FlagPopup";

const header = {
  title: "Create Plot",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const CreatePlot = () => {
  const [selectFilterVal, setSelectFilterVal] = useState("Novel/Script");
  const [plot_1, setPlot1] = useState("Some Idea...");
  const [plot_2, setPlot2] = useState("Some Idea...");
  const [animation, setAnimation] = useState("");
  const [wobble, setWobble] = useState(0);
  const [basic_input_text, setBasicInput_text] = useState("");
  const [open, setOpen] = useState(false)
  const [flag, setFlag] = useState(false);
  const cancelButtonRef = useRef(null)
  const handleOpen = () => {
    if (flag) {
      setFlag(!flag)
    }
  };

  const handleBasicInputText = (event) => {
    const text = event.target.value;
    setBasicInput_text(text)
  }

  const payload = { "text": basic_input_text, "story_type": selectFilterVal }
  const handleResponse = async () => {
    try {
      setOpen(true)
      setWobble(1)
      setPlot1("");
      setPlot2("");
      const responseData = await fetchData('create_plot/', JSON.stringify(payload));
      if (responseData.flag) {
        setFlag(true)
        setBasicInput_text("")
        setOpen(false)
        setWobble(0)
      }
      if (responseData.option_1) {
        setOpen(false)
        setWobble(0)
        setPlot1(responseData.option_1);
        setPlot2(responseData.option_2);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setFlag(true)
      setBasicInput_text("")
      setOpen(false)
      setWobble(0)
    }
  }


  const handleAnimation = async () => {
    if (plot_1 !== "Some Idea...") {
      try {
        setPlot1("");
        setPlot2("");
        setAnimation("btn-animation")
        setWobble(1)
        setOpen(true)
        const responseData = await fetchData('create_plot/', JSON.stringify(payload));
        if (responseData.flag) {
          setAnimation("")
          setFlag(true)
          setBasicInput_text("")
          setOpen(false)
          setWobble(0)
        }
        if (responseData.option_1 && responseData.option_2) {
          setAnimation("")
          setWobble(0)
          setOpen(false)
          setPlot1(responseData.option_1);
          setPlot2(responseData.option_2);
        }

      } catch (error) {
        console.error('Error occurred:', error);
        setFlag(true)
        setBasicInput_text("")
        setOpen(false)
        setWobble(0)
      }

    }
  }

  return (
    <>
      <PageLayout header={header}>
        <div className="max-w-[1500px] mx-auto w-full bg-white rounded-[15px]">
          <div className="max-w-6xl mx-auto mb-16">
            <div>
              <div className="mb-8 flex flex-col md:flex-row items-center justify-evenly gap-x-12 gap-y-5 md:gap-y-7">
                <textarea
                  cols={20}
                  rows={3}
                  className="w-full md:w-2/3 outline-none border border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 placeholder:text-[#999] placeholder:md:text-xl"
                  placeholder="Input basic Idea"
                  value={basic_input_text}
                  onChange={handleBasicInputText}
                />
                <div className="justify-self-center sm:justify-self-start w-full md:w-1/3">
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
                <button className="bg-primary max-w-[280px] w-full font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[175px] rounded-lg"
                  onClick={handleResponse}
                >
                  <Icon
                    className="inline"
                    path={mdiArrowRightBold}
                    size={1}
                  />
                  Submit
                </button>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-evenly gap-x-12 gap-y-5 md:gap-y-7">
                <div className="justify w-full md:w-1/3 self-center sm:justify-self-start text-center">
                </div>
              </div>
              <Popup
                wobble={wobble}
                setOpen={setOpen}
                open={open}
                cancelButtonRef={cancelButtonRef}
              />
              <FlagPopup
                flag={flag}
                handleOpen={handleOpen}
                cancelButtonRef={cancelButtonRef}
                setFlag={setFlag}
              />
            </div>
          </div>
          <div className="flex gap-7 flex-wrap justify-center">
            <div className="p-7 sm:max-w-[60vh] w-full h-[60vh] shadow-card rounded-2xl" style={{ overflow: "auto" }}>
              <div className="flex items-center justify-between mb-7">
                <div className="text-2xl font-semibold" >
                  Plot 1
                </div>
                <Icon
                  path={mdiDotsVertical}
                  size={"28px"}
                  className="cursor-pointer"
                />
              </div>
              <div className="text-xl text-[#666]" style={{ scrollBehavior: "auto" }}>
                <ReactMarkdown children={plot_1} />
              </div>
            </div>
            <div className="p-7 sm:max-w-[60vh] w-full h-[60vh] shadow-card rounded-2xl" style={{ overflow: "auto" }}>
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
              <div
                className="text-xl text-[#666]" style={{ scrollBehavior: "auto" }}>
                <ReactMarkdown children={plot_2} />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-[60px] h-[60px] rounded-full bg-primary bg-opacity-10 flex items-center justify-center cursor-pointer">
                <Icon
                  path={mdiRefresh}
                  className={animation}
                  size={"35px"}
                  onClick={handleAnimation}
                  wobble={wobble}
                  color={"#124ee8"}
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
    </>
  );
};

export default CreatePlot;
