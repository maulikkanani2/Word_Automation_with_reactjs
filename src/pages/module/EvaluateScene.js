import React, { useState, useRef } from "react";
import ReactMarkdown from 'react-markdown';
import PageLayout from "../../component/PageLayout";
import { mdiChevronDown, mdiRefresh, mdiArrowRightBold } from "@mdi/js";
import Icon from "@mdi/react";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

import fetchData from "../../apiService";
import { Popup } from "./Popup";
import { FlagPopup } from "../FlagPopup";

const header = {
  title: "Evaluate Scene",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const EvaluateProject = () => {
  const [selectFilterVal, setSelectFilterVal] = useState("Novel/Script");
  const [plotEvaluation, setPlotEvaluation] = useState("Plot Evaluation...")
  const [input_text, setInput_text] = useState("");
  const [open, setOpen] = useState(false)
  const [animation, setAnimation] = useState("");
  const [wobble, setWobble] = useState(0);
  const [flag, setFlag] = useState(false);
  const cancelButtonRef = useRef(null)

  const handleOpen = () => {
    if (flag) {
      setFlag(!flag)
    }
  };



  const handleInputText = (event) => {
    const text = event.target.value;
    setInput_text(text)
  }
  const payload = { "text": input_text, "option_1": selectFilterVal }
  const handleResponse = async () => {
    try {
      setPlotEvaluation("");
      setWobble(1)
      setOpen(true)
      const responseData = await fetchData('analyze_plot/', JSON.stringify(payload));
      if (responseData.flag) {
        setFlag(true)
        setInput_text("")
        setOpen(false)
        setWobble(0)
      }
      if (responseData.option_1) {
        setWobble(0)
        setOpen(false)
        setPlotEvaluation(responseData.option_1);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setFlag(true)
      setInput_text("")
      setOpen(false)
      setWobble(0)
    }
  }


  const handleAnimation = async () => {
    if (plotEvaluation !== "Plot Evaluation...") {
      setPlotEvaluation("");
      setAnimation("btn-animation")
      setWobble(1)
      setOpen(true)
      try {
        const responseData = await fetchData('analyze_plot/', JSON.stringify(payload));
        if (responseData.flag) {
          setFlag(true)
          setInput_text("")
          setOpen(false)
          setWobble(0)
        }
        if (responseData.option_1) {
          setAnimation("")
          setWobble(0)
          setOpen(false)
          setPlotEvaluation(responseData.option_1);
        }

      } catch (error) {
        console.error('Error occurred:', error);
        setFlag(true)
        setInput_text("")
        setOpen(false)
        setWobble(0)
      }
    }
  }

  return (
    <PageLayout header={header}>
      <div>
        <div className="flex flex-col sm:flex-row lg:justify-center flex-wrap lg:flex-nowrap sm:items-center mb-16  gap-y-5 gap-x-10 md:gap-y-7">
          <textarea
            cols={20}
            rows={3}
            className="w-full md:w-[40%] 
                outline-none border border-[#aaa] 
                rounded-xl py-3 md:py-5 px-5 
                md:px-7 placeholder:text-[#999] 
                placeholder:md:text-xl"
            placeholder="Input basic Idea"
            value={input_text}
            onChange={handleInputText}
          />
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
          <button className="bg-primary self-center font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 w-full max-w-[175px] rounded-lg"
            onClick={handleResponse}>
            <Icon
              className="inline"
              path={mdiArrowRightBold}
              size={1}
            />
            Submit
          </button>
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
        <div className="flex gap-7 flex-wrap">
          <div className="p-7 sm:max-w-[848px] w-full h-[350px] shadow-card rounded-2xl" style={{ overflow: "auto" }}>
            <div className="flex items-center justify-between mb-7">
              <div className="text-2xl font-semibold">
                Evaluation
              </div>
            </div>
            <div className="text-xl text-[#666]" style={{ scrollBehavior: "auto" }}>
              <ReactMarkdown children={plotEvaluation} />
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
  );
};

export default EvaluateProject;
