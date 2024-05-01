import React, { useEffect, useState, useRef } from "react";
import ReactMarkdown from 'react-markdown';
import { mdiChevronDown, mdiRefresh } from "@mdi/js";
import Icon from "@mdi/react";
import Modal from "../Modal/Modal";
import {
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from "@material-tailwind/react";
import fetchData from "../../apiService";
import { Popup } from "../../pages/module/Popup";
import { FlagPopup } from "../../pages/FlagPopup";

const createStructureHeader = {
    title: "Rewrite – Tone Based",
    subtitle: "",
};

const ToneBasedRewrite = (props) => {
    const [selectScriptVal, setSelectScriptVal] = useState("Novel/Script");
    const [selectVal, setSelectVal] = useState("Wild");
    const [input_text, setInput_text] = useState("");
    const [selectText, setSelectText] = useState("");
    const [toneRewriteResponse, setToneRewriteResponse] = useState("Text.....");
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
        props?.setResponseData(toneRewriteResponse)
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

    const payload = { "input_text": input_text, "story_type": selectScriptVal, "tone": selectVal }
    const handleResponse = async () => {
        try {
            setToneRewriteResponse("");
            setWobble(1)
            setOpen(true)
            const responseData = await fetchData('rewrite/', JSON.stringify(payload));
            if (responseData.flag) {
                setFlag(true)
                setInput_text("") 
                setOpen(false)
                setWobble(0)
            }
            if (responseData.option_1) {
                setWobble(0)
                setOpen(false)
                setToneRewriteResponse(responseData.option_1);
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
        if (toneRewriteResponse !== "Text.....") {
            setToneRewriteResponse("");
            setWobble(1)
            setOpen(true)
            setAnimation("btn-animation")
            try {
                const responseData = await fetchData('rewrite/', JSON.stringify(payload));
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
                    setToneRewriteResponse(responseData.option_1);
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
            title={createStructureHeader.title}
            subTitle={createStructureHeader.subtitle}
            open={props?.open}
            setOpen={props?.setOpen}
            wobble={wobble}
            setOpenPopup={setOpen}
            openPopup={open}
            cancelButtonRef={cancelButtonRef}
            insert={insert}
        >
            <div>
                <div className="flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-10 gap-y-5 gap-3 sm:gap-x-5 md:gap-y-7">
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
                                    {selectScriptVal}
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
                                        setSelectScriptVal("Novel");
                                    }}
                                >
                                    Novel
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        setSelectScriptVal("Script");
                                    }}
                                >
                                    Script
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </div>

                    <Popup
                        wobble={wobble}
                        setOpen={setOpen}
                        open={open}
                        cancelButtonRef={cancelButtonRef}
                    />
                    <div className="">
                        <Menu placement="bottom-start">
                            <MenuHandler>
                                <div className="min-w-[170px] flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
                                    {selectVal}
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
                                        setSelectVal("Wild");
                                    }}
                                >
                                    Wild
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        setSelectVal("Thriller");
                                    }}
                                >
                                    Thriller
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        setSelectVal("Romantic");
                                    }}
                                >
                                    Romantic
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <FlagPopup
                        flag={flag}
                        handleOpen={handleOpen}
                        cancelButtonRef={cancelButtonRef}
                        setFlag={setFlag}
                    />

                </div>
                <div className="flex gap-3 items-start justify-between mb-10">
                    <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 w-full max-w-[175px] rounded-lg"
                        onClick={handleResponse}
                    >
                        Submit
                    </button>

                    <div className="max-w-[70.42px] flex justify-center w-full">
                        <div className="w-[45px] sm:w-[60px] h-[45px] sm:h-[60px] rounded-full bg-primary bg-opacity-10 flex items-center justify-center cursor-pointer">
                            <Icon
                                path={mdiRefresh}
                                className={"text-primary w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] " + animation}
                                size={"35px"}
                                onClick={handleAnimation}
                                wobble={wobble}
                                color={"#124ee8"}
                            />
                        </div>
                    </div>
                </div>
                <div className="p-5 pb-0">
                    <div className="grid grid-cols-1">
                        <div className="p-7 md:max-w-[80vh] w-full h-[300px] shadow-card rounded-2xl" style={{ overflow: "auto" }}>
                            <div className="flex items-center justify-between mb-7">
                                <div className="text-2xl font-semibold">
                                    Description
                                </div>
                            </div>
                            <div className="text-xl text-[#666]" style={{ scrollBehavior: "auto" }}>
                                <ReactMarkdown children={toneRewriteResponse} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ToneBasedRewrite;
