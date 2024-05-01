import React, { useState, useRef } from "react";
import ReactMarkdown from 'react-markdown';
import PageLayout from "../../component/PageLayout";
import { mdiChevronDown, mdiRefresh } from "@mdi/js";
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
  title: "Create Scene Genre",
  subtitle:
    "Cultivate your creativity effortlessly Share your vision with our AI art generator by entering a prompt and selecting a style. Let the magic.",
};

const filterTypes = [
  {
    type: "wild",
    val: ["wild", "wild 2", "wild 3"],
  },
  {
    type: "thriller",
    val: ["chaotic", "Thriller 2", "Thriller 3", "Thriller 4"],
  },
  {
    type: "romantic",
    val: ["romantic", "Romantic 2", "Romantic 3"],
  },
  {
    type: "banal",
    val: ["cool", "Banal 2", "Banal 3", "Banal 4"],
  },
];

const initialVal = {
  wild: "Wild",
  thriller: "Thriller",
  romantic: "Romantic",
  banal: "Banal",
};

const CreateSceneGenre = () => {
  const [selectFilterVal, setSelectFilterVal] = useState("Novel/Script");

  const [selectVal, setSelectVal] = useState(initialVal);
  const [option_1, setOption_1] = useState("Text.....");
  const [option_2, setOption_2] = useState("Text.....");
  const [option_3, setOption_3] = useState("Text.....");
  const [option_4, setOption_4] = useState("Text.....");
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

  const handleFilterValChange = (item, type) => {
    setSelectVal({ ...selectVal, [type]: item });
  };

  const payload = {
    "input_text": input_text, "story_type": selectFilterVal, "tone_1": selectVal.wild,
    "tone_2": selectVal.thriller, "tone_3": selectVal.romantic, "tone_4": selectVal.banal
  };

  const handleResponse = async () => {
    try {
      setOption_1("");
      setOption_2("");
      setOption_3("");
      setOption_4("");
      setWobble(1)
      setOpen(true)
      const responseData = await fetchData('generate_tones/', JSON.stringify(payload));
      if (responseData.flag) {
        setFlag(true)
        setInput_text("")
        setOpen(false)
        setWobble(0)
      }
      if (responseData.option_1 && responseData.option_2 && responseData.option_3 && responseData.option_4) {
        setWobble(0)
        setOpen(false)
        setOption_1(responseData.option_1);
        setOption_2(responseData.option_2);
        setOption_3(responseData.option_3);
        setOption_4(responseData.option_4);
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
    if (option_1 !== "Text....." && option_2 !== "Text....." && option_3 !== "Text....." && option_4 !== "Text.....") {
      setOption_1("");
      setOption_2("");
      setOption_3("");
      setOption_4("");
      setAnimation("btn-animation")
      setWobble(1)
      setOpen(true)
      try {
        const responseData = await fetchData('generate_tones/', JSON.stringify(payload));
        if (responseData.flag) {
          setFlag(true)
          setInput_text("")
          setOpen(false)
          setWobble(0)
        }
        if (responseData.option_1 && responseData.option_2 && responseData.option_3 && responseData.option_4) {
          setAnimation("")
          setWobble(0)
          setOpen(false)
          setOption_1(responseData.option_1);
          setOption_2(responseData.option_2);
          setOption_3(responseData.option_3);
          setOption_4(responseData.option_4);
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 items-center mb-16 gap-y-5 gap-x-10 md:gap-y-7">
              <textarea
                cols={20}
                rows={3}
                className="max-w-[660px] xl:col-span-2 w-full outline-none border border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 placeholder:text-[#999] placeholder:md:text-xl"
                placeholder="Input Scene Text"
                value={input_text ? input_text : ''}
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
        <div className="flex gap-3 items-start justify-between mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 flex-grow">
            {filterTypes.map((item, index) => {
              return (
                <div key={index}>
                  <Menu placement="bottom-start">
                    <MenuHandler>
                      <div className="max-w-full sm:max-w-[180px] flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
                        {selectVal[item.type]}
                        <Icon
                          className="inline ml-2"
                          path={mdiChevronDown}
                          size={1}
                        />
                      </div>
                    </MenuHandler>
                    <MenuList>
                      {item.val.map((listItem, itemIndex) => {
                        return (
                          <MenuItem
                            onClick={() => {
                              handleFilterValChange(listItem, item.type);
                            }}
                            key={itemIndex}
                          >
                            {listItem}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Menu>
                </div>
              );
            })}
          </div>
          <div className="max-w-[70.42px] flex justify-center w-full">
            <div className="w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] rounded-full bg-primary bg-opacity-10 flex items-center justify-center cursor-pointer">
              <Icon
                path={mdiRefresh}
                className={animation}
                size={"35px"}
                onClick={handleAnimation}
                wobble={wobble}
                color={"#124ee8"}
                style={{ width: '30px', height: '30px' }}
              />
            </div>
          </div>
        </div>
        <div className="p-5 pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            <div className="p-7 md:max-w-[260px] w-full h-[300px] shadow-card rounded-2xl" style={{ overflow: "auto" }}>
              <div className="flex items-center justify-between mb-7">
                <div className="text-2xl font-semibold">
                  Description
                </div>
              </div>
              <div className="text-xl text-[#666]" style={{ scrollBehavior: "auto" }}>
                <ReactMarkdown children={option_1} />
              </div>
            </div>
            <div className="p-7 md:max-w-[260px] w-full h-[300px] shadow-card rounded-2xl" style={{ overflow: "auto" }}>
              <div className="flex items-center justify-between mb-7">
                <div className="text-2xl font-semibold">
                  Description
                </div>
              </div>
              <div className="text-xl text-[#666]" style={{ scrollBehavior: "auto" }}>
                <ReactMarkdown children={option_2} />
              </div>
            </div>
            <div className="p-7 md:max-w-[260px] w-full h-[300px] shadow-card rounded-2xl" style={{ overflow: "auto" }}>
              <div className="flex items-center justify-between mb-7">
                <div className="text-2xl font-semibold">
                  Description
                </div>
              </div>
              <div className="text-xl text-[#666]" style={{ scrollBehavior: "auto" }}>
                <ReactMarkdown children={option_3} />
              </div>
            </div>
            <div className="p-7 md:max-w-[260px] w-full h-[300px] shadow-card rounded-2xl" style={{ overflow: "auto" }}>
              <div className="flex items-center justify-between mb-7">
                <div className="text-2xl font-semibold">
                  Description
                </div>
              </div>
              <div className="text-xl text-[#666]" style={{ scrollBehavior: "auto" }}>
                <ReactMarkdown children={option_4} />
              </div>
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

export default CreateSceneGenre;
