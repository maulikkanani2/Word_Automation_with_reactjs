import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import Modal from "../Modal/Modal";
import { mdiChevronDown, mdiRefresh } from "@mdi/js";
import Icon from "@mdi/react";
import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import fetchData from "../../apiService";
import { Popup } from "../../pages/module/Popup";
import { FlagPopup } from "../../pages/FlagPopup";

const createModalHeader = {
  title: "Rewrite - User Instructions",
  subtitle: "",
};
// { open, setOpen, handleNext }
const RewriteUserInstructions = (props) => {
  const [selectFilterVal, setSelectFilterVal] = useState('Novel/Script')
  const [input_text, setInput_text] = useState("");
  const [input_user, setInput_user] = useState("");
  const [selectText, setSelectText] = useState("");
  const [userInstructionResponse, setUserInstructionResponse] = useState("Text.....");
  const [wobble, setWobble] = useState(0);
  const [open, setOpen] = useState(false)
  const [flag, setFlag] = useState(false);
  const [animation, setAnimation] = useState("");
  const cancelButtonRef = useRef(null)
  const popupRef = useRef(null);
  useEffect(() => {
    if (popupRef.current) {
      popupRef.current.focus();
    }
  }, []);

  const handleOpen = () => {
    if (flag) {
      setFlag(!flag)
    }
  };

  const insert = () => {
    props?.setResponseData(userInstructionResponse)
    props?.setOpen(false)
  }

  useEffect(() => {
    setSelectText(props?.selectText)
    if (selectText) {
      setInput_text(selectText)
    }
  }, [props?.selectText]);

  const handleInputText = (event) => {
    const text = event.target.value;
    setInput_text(text)
  }

  const handleInputUser = (event) => {
    const text = event.target.value;
    setInput_user(text)
  }
  const payload = {"text1": input_text, "text2": input_user,"option_1":selectFilterVal}
  const handleResponse = async () => {
    try {
      setUserInstructionResponse("");
      setWobble(1)
      setOpen(true)
      const responseData = await fetchData('generate_scene_user_instructions/', JSON.stringify(payload));
      if (responseData.flag) {
        props?.setOpen(false)
        setFlag(true)
        setInput_text("")
        setInput_user("")
        setOpen(false)
        setWobble(0)
      }
      if (responseData.option_1) {
        setWobble(0)
        setOpen(false)
        setUserInstructionResponse(responseData.option_1);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      props?.setOpen(false)
      setFlag(true)
      setInput_text("")
      setOpen(false)
      setWobble(0)
    }
  }

  const handleAnimation = async () => {
    if (userInstructionResponse !== "Text.....") {
      setUserInstructionResponse("");
      setWobble(1)
      setOpen(true)
      setAnimation("btn-animation")
      try {
        const responseData = await fetchData('generate_scene_user_instructions/', JSON.stringify(payload));
        if (responseData.flag) {
          setFlag(true)
          setInput_text("")
          setInput_user("")
          setOpen(false)
          setWobble(0)
        }
        if (responseData.option_1) {
          setAnimation("")
          setWobble(0)
          setOpen(false)
          setUserInstructionResponse(responseData.option_1);
        }

      } catch (error) {
        console.error('Error occurred:', error);
        setFlag(true)
        setInput_text("")
        setInput_user("")
        setOpen(false)
        setWobble(0)
      }
    }
  }

  return (
    <Modal
      title={createModalHeader.title}
      subTitle={createModalHeader.subtitle}
      open={props?.open}
      setOpen={props?.setOpen}
      insert={insert}
    >
      <div>
        <div className="flex flex-col sm:flex-row items-center justify-center mb-7 gap-x-6 md:gap-x-12 gap-y-5 md:gap-y-7">
          <textarea
            type="text"
            className="max-w-[468px] w-full outline-none border border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 placeholder:text-[#999] placeholder:md:text-xl"
            placeholder="Input Scene Text"
            ref={popupRef}
            value={input_text}
            onChange={handleInputText}
          />
          <div>
            <Menu placement="bottom-start">
              <MenuHandler>
                <div className="min-w-[170px] flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
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
                  onClick={() => { setSelectFilterVal("Novel") }}>
                  Novel
                </MenuItem>
                <MenuItem
                  onClick={() => { setSelectFilterVal("Script") }}>
                  Script
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center mb-10 gap-x-6 md:gap-x-12 gap-y-5 md:gap-y-7">
          <textarea
            type="text"
            className="max-w-[468px] w-full outline-none border border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 placeholder:text-[#999] placeholder:md:text-xl"
            placeholder="User instructons Text"
            value={input_user}
            onChange={handleInputUser}
          />
          <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[175px] rounded-xl"
          onClick={handleResponse}
          >
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
          <div className="p-7 sm:max-w-[848px] w-full h-[300px] shadow-card rounded-2xl" style={{ overflow: "auto" }}>
            <div className="flex items-center justify-between mb-7">
              <div className="text-2xl font-semibold">
                Description
              </div>
            </div>
            <div className="text-xl text-[#666]" style={{ scrollBehavior: "auto" }}>
              <ReactMarkdown children={userInstructionResponse} />
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-[60px] h-[60px] rounded-full bg-primary bg-opacity-10 flex items-center justify-center cursor-pointer">
              <Icon
                path={mdiRefresh}
                className={"text-primary " + animation}
                size={"35px"}
                onClick={handleAnimation}
                wobble={wobble}
                color={"#124ee8"}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RewriteUserInstructions;
