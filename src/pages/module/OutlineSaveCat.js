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
import fetchData from "../../apiService";
import { Popup } from "./Popup";
import { FlagPopup } from "../FlagPopup";

const header = {
  title: "Outline Structure Save The Cat",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const OutlineSaveCat = () => {
  const [selectFilterVal, setSelectFilterVal] = useState("Novel/Script");
  const [character_1, setCharacter_1] = useState("Person 1");
  const [character_2, setCharacter_2] = useState("Person 2");
  const [input_text, setInput_text] = useState("");
  const [animation, setAnimation] = useState("");
  const [open, setOpen] = useState(false)
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
      setWobble(1)
      setOpen(true)
      setCharacter_1("")
      setCharacter_2("")
      const responseData = await fetchData('generate_outline_save_cat/', JSON.stringify(payload));
      if (responseData.flag) {
        setFlag(true)
        setInput_text("")
        setOpen(false)
        setWobble(0)
      }
      if (responseData.option_1) {
        setWobble(0)
        setOpen(false)
        setCharacter_1(responseData.option_1);
        setCharacter_2(responseData.option_2);
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
    if (character_1 !== "Person 1") {
      try {
        setCharacter_1("");
        setCharacter_2("");
        setAnimation("btn-animation")
        setWobble(1)
        setOpen(true)
        const responseData = await fetchData('generate_outline_save_cat/', JSON.stringify(payload));
        if (responseData.flag) {
          setFlag(true)
          setInput_text("")
          setOpen(false)
          setWobble(0)
        }
        if (responseData.option_1 && responseData.option_2) {
          setAnimation("")
          setWobble(0)
          setOpen(false)
          setCharacter_1(responseData.option_1);
          setCharacter_2(responseData.option_2);
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
      <div className="max-w-[1500px] mx-auto w-full bg-white rounded-[15px]">
        <div className="max-w-6xl mx-auto mb-16">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 items-center mb-16  gap-y-5 gap-x-10 md:gap-y-7">
              <textarea
                cols={20}
                rows={3}
                className="max-w-[660px] 
                xl:col-span-2 w-full 
                outline-none border border-[#aaa] 
                rounded-xl py-3 md:py-5 px-5 
                md:px-7 placeholder:text-[#999] 
                placeholder:md:text-xl"
                placeholder="Text"
                value={input_text}
                onChange={handleInputText}
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
              <button className="bg-primary sm:col-span-2 xl:col-span-1 justify-self-center xl:justify-self-start font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[175px] rounded-lg"
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
          </div>
        </div>
        <div className="flex gap-7 flex-wrap">
          <div className="p-7 sm:max-w-[70vh] w-full h-[350px] shadow-card rounded-2xl"
            style={{ overflow: "auto" }}>
            <div className="flex items-center justify-between mb-7">
              <div className="text-2xl font-semibold">
                Character 1
              </div>
              <Icon
                path={mdiDotsVertical}
                size={"28px"}
                className="cursor-pointer"
              />
            </div>
            <div className="text-xl text-[#666] mb-1.5"
              style={{ scrollBehavior: "auto" }}>
              <ReactMarkdown children={character_1} />
            </div>
          </div>
          <div className="p-7 sm:max-w-[70vh] w-full h-[350px] shadow-card rounded-2xl"
            style={{ overflow: "auto" }}>
            <div className="flex items-center justify-between mb-7">
              <div className="text-2xl font-semibold"
                style={{ scrollBehavior: "auto" }}>
                Character 2
              </div>
              <Icon
                path={mdiDotsVertical}
                size={"28px"}
                className="cursor-pointer"
              />
            </div>
            <div className="text-xl text-[#666]">
              <ReactMarkdown children={character_2} />
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

export default OutlineSaveCat;
