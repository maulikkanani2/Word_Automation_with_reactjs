import Icon from "@mdi/react";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import {
  mdiDotsVertical,
  mdiRefresh,
  mdiChevronDown,
} from "@mdi/js";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import PageLayout from "../../component/PageLayout";
import fetchData from "../../apiService";
import { Popup } from "./Popup";
import { FlagPopup } from "../FlagPopup";

const header = {
  title: "Customize Scene with Instructions",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const CustomizeScene = () => {
  const [selectFilterVal, setSelectFilterVal] = useState("Novel/Script");
  const [idea_1, setIdea_1] = useState("some Idea........");
  const [input_scene, setInput_scene] = useState("");
  const [input_user, setInput_user] = useState("");
  const [animation, setAnimation] = useState("");
  const [wobble, setWobble] = useState(0);
  const [open, setOpen] = useState(false)
  const [flag, setFlag] = useState(false);
  const cancelButtonRef = useRef(null)
  const [urldata, setUrlData] = useState('');
  const userScene = atob(urldata);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const dataFromURL = queryParams.get('q');
    setUrlData(dataFromURL || '');
    setInput_scene(userScene)
  }, [userScene]);

  const handleOpen = () => {
    if (flag) {
      setFlag(!flag)
    }
  };

  const handleInputScene = (event) => {
    const text = event.target.value;
    setInput_scene(text)
  }
  const handleInputUser = (event) => {
    const text = event.target.value;
    setInput_user(text)
  }

  const payload = { "text1": input_scene, "text2": input_user, "option_1": selectFilterVal }
  const handleResponse = async () => {
    try {
      setIdea_1("");
      setWobble(1)
      setOpen(true)
      const responseData = await fetchData('generate_scene_user_instructions/', JSON.stringify(payload));
      if (responseData.flag) {
        setFlag(true)
        setInput_user("")
        setInput_scene("")
        setOpen(false)
        setWobble(0)
      }
      if (responseData.option_1) {
        setWobble(0)
        setOpen(false)
        setIdea_1(responseData.option_1);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setFlag(true)
      setInput_user("")
      setInput_scene("")
      setOpen(false)
      setWobble(0)
    }
  }


  const handleAnimation = async () => {
    if (idea_1 !== "some Idea........") {
      setIdea_1("");
      setAnimation("btn-animation")
      setWobble(1)
      setOpen(true)
      try {
        const responseData = await fetchData('generate_scene_user_instructions/', JSON.stringify(payload));
        if (responseData.flag) {
          setFlag(true)
          setInput_user("")
          setInput_scene("")
          setOpen(false)
          setWobble(0)
        }
        if (responseData.option_1) {
          setAnimation("")
          setWobble(0)
          setOpen(false)
          setIdea_1(responseData.option_1);
        }

      } catch (error) {
        console.error('Error occurred:', error);
        setFlag(true)
        setInput_user("")
        setInput_scene("")
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
            <div className="mb-8 flex flex-col md:flex-row items-center justify-evenly gap-x-12 gap-y-5 md:gap-y-7">
              <textarea
                cols={20}
                rows={3}
                className="w-full md:w-2/3 
                outline-none border border-[#aaa] 
                rounded-xl py-3 md:py-5 px-5 
                md:px-7 placeholder:text-[#999] 
                placeholder:md:text-xl"
                placeholder="Input Scene Text"
                value={input_scene}
                onChange={handleInputScene}
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
            </div>
            <div className="flex flex-col md:flex-row items-center justify-evenly gap-x-12 gap-y-5 md:gap-y-7">
              <textarea
                cols={20}
                rows={3}
                className="w-full md:w-2/3 
                outline-none border border-[#aaa] 
                rounded-xl py-3 md:py-5 px-5 
                md:px-7 placeholder:text-[#999] 
                placeholder:md:text-xl"
                placeholder="User instructons Text"
                value={input_user}
                onChange={handleInputUser}
              />
              <div className="justify w-full md:w-1/3 self-center sm:justify-self-start text-center">
                <button className="bg-primary max-w-[280px] w-full font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[175px] rounded-lg"
                  onClick={handleResponse}>
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
        </div>
        <div className="flex gap-7 flex-wrap">
          <div className="p-7 sm:max-w-[900px] w-full h-[450px] shadow-card rounded-2xl"
            style={{ overflow: "auto" }}>
            <div className="flex items-center justify-between mb-7">
              <div className="text-2xl font-semibold">
                Description
              </div>
              <Icon
                path={mdiDotsVertical}
                size={"28px"}
                className="cursor-pointer"
              />
            </div>
            <div
              className="text-xl text-[#666]"
              style={{ scrollBehavior: "auto" }}>
              <ReactMarkdown children={idea_1} />
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

export default CustomizeScene;
