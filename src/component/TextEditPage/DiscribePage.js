import React, { useState, useRef, useEffect } from "react";
import { mdiChevronDown, mdiRefresh } from "@mdi/js";
import ReactMarkdown from 'react-markdown';
import Icon from "@mdi/react";
import Modal from "../Modal/Modal";
import { Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import fetchData from "../../apiService";
import { Popup } from "../../pages/module/Popup";
import { FlagPopup } from "../../pages/FlagPopup";

const createSceneHeader = {
  title: "Discribe Page",
  subtitle: "",
};


const DiscribePage = (props) => {
  
  const [selectFilterVal,   setSelectFilterVal] = useState('Novel/Script')
  const [input_text, setInput_text] = useState("");
  const [selectText, setSelectText] = useState("");
  const [discribeResponse, setDiscribeResponse] = useState("Text.....");
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
    props?.setResponseData(discribeResponse)
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
  const payload = { "text": input_text, "story_type": selectFilterVal }
  const handleResponse = async () => {
    try {
      setDiscribeResponse("");
      setWobble(1)
      setOpen(true)
      const responseData = await fetchData('describe/', JSON.stringify(payload));
      if (responseData.flag) {
        setFlag(true)
        setInput_text("")
        setOpen(false)
        setWobble(0)
      }
      if (responseData.option_1) {
        setWobble(0)
        setOpen(false)
        setDiscribeResponse(responseData.option_1);
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
    if (discribeResponse !== "Text.....") {
      setDiscribeResponse("");
      setWobble(1)
      setOpen(true)
      setAnimation("btn-animation")
      try {
        const responseData = await fetchData('describe/', JSON.stringify(payload));
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
          setDiscribeResponse(responseData.option_1);
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
    <Modal
      title={createSceneHeader.title}
      subTitle={createSceneHeader.subtitle}
      open={props?.open}
      setOpen={props?.setOpen}
      insert={insert}
    >
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center mb-10 gap-y-5 gap-x-5 md:gap-y-7">
          <div className="col-span-2">
            <textarea
              type="text"
              className="w-full outline-none border border-[#aaa] rounded-xl py-3 lg:py-5 px-5 lg:px-7 placeholder:text-[#999] placeholder:lg:text-xl"
              placeholder="Text"
              value={input_text}
              onChange={handleInputText}
              ref={popupRef}
            />
          </div>
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
          <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 w-full max-w-[175px] rounded-lg"
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
          <div className="p-7 sm:max-w-[848px] w-full h-[350px] shadow-card rounded-2xl" style={{ overflow: "auto" }}>
            <div className="flex items-center justify-between mb-7">
              <div className="text-2xl font-semibold">
                Description
              </div>
            </div>
            <div className="text-xl text-[#666]" style={{ scrollBehavior: "auto" }}>
              <ReactMarkdown children={discribeResponse} />
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
  )
}

export default DiscribePage