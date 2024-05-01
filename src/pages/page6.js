import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    primaryTextAreaContainer,
    loadingTextStyle,
    textAreaContainerStyle,
} from "../style";
import fetchData from '../apiService';
import Layout from "../component/Layout/Layout";
import { Popup } from "./module/Popup";
import { FlagPopup } from "./FlagPopup";
import Icon from '@mdi/react'
import { mdiDelete, mdiStore } from '@mdi/js'
import { useNavigate } from "react-router-dom";

const Page6 = () => {
    const [primaryTextArea, setPrimaryTextArea] = useState("");
    const [textAreas, setTextAreas] = useState([]);
    // eslint-disable-next-line
    const [textAreaValue, setTextAreaValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [wobble, setWobble] = useState(0);
    const [flag, setFlag] = useState(false);
    const cancelButtonRef = useRef(null);
    const navigate = useNavigate();


    const handleOpen = () => {
        if (flag) {
            setFlag(!flag)
        }
    };

    const modifyResponse = (data) => {
        return data.map((obj) => ({
            ...obj,
            id: uuidv4(),
            isActive: false,
        }));
    };
    const getTextAreas = async (updatedTextAreas = [], getValue) => {
        setIsLoading(true);
        try {
            setWobble(1)
            setOpen(true)
            const responseData = await fetchData('generate_scenerios/', JSON.stringify({ "value": getValue }));
            const flagItem = responseData[responseData.length - 1];
            if (flagItem.flag) {
                setPrimaryTextArea("")
                setIsLoading(false);
                setWobble(0)
                setOpen(false)
                setFlag(true)
            }
            const response = responseData.slice(0, -1);
            if (textAreas.length) {
                updatedTextAreas.push(modifyResponse(response));
                setTextAreas(updatedTextAreas);
            } else {
                setTextAreas([...textAreas, modifyResponse(response)]);
            }
            setIsLoading(false);
            setWobble(0)
            setOpen(false)
        } catch (error) {
            setPrimaryTextArea("")
            setIsLoading(false);
            setWobble(0)
            setOpen(false)
            setFlag(true)
        }

    };

    const addMoreTextAreas = (textArea, rowIndex) => {
        setTextAreaValue();
        if (textAreas.length - 1 !== rowIndex) {
            const newArr = [...textAreas];
            newArr.splice(rowIndex + 1, newArr.length - 1);
            setTextAreas([...newArr]);

            const updatedTextAreas = newArr.map((row, index) => {
                if (rowIndex !== index) {
                    return row;
                } else {
                    return row.map((prevTextArea) => {
                        if (prevTextArea.id === textArea.id) {
                            return {
                                ...prevTextArea,
                                isActive: true,
                            };
                        } else {
                            return {
                                ...prevTextArea,
                                isActive: false,
                            };
                        }
                    });
                }
            });
            getTextAreas(updatedTextAreas, textArea.value);
        } else {
            setIsLoading(true);
            const updatedTextAreas = textAreas.map((row, index) => {
                if (rowIndex !== index) {
                    return row;
                } else {
                    return row.map((prevTextArea) => {
                        if (prevTextArea.id === textArea.id) {
                            return {
                                ...prevTextArea,
                                isActive: true,
                            };
                        } else {
                            return {
                                ...prevTextArea,
                                isActive: false,
                            };
                        }
                    });
                }
            });
            getTextAreas(updatedTextAreas, textArea.value);
        }
    };
    const saveButtonClickHandler = () => {
        if (primaryTextArea.trim() === '') {
            return;
        }
        getTextAreas([], primaryTextArea);
    };
    const resetButtonClickHandler = () => {
        setTextAreas([]);
        setPrimaryTextArea("");
    };

    return (
        <Layout>
            <div className="flex flex-col rounded min-h-[calc(100vh_-_80px)] p-4 items-center justify-center">
                <div className="flex-row max-w-[700px] w-full" style={primaryTextAreaContainer}>
                    <div>
                        <textarea
                            rows={5}
                            className="max-w-[660px] w-full outline-none border border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 placeholder:text-[#999] placeholder:md:text-xl"
                            key="textArea"
                            value={primaryTextArea}
                            onChange={(e) => {
                                setPrimaryTextArea(e.target.value);
                            }}
                        />
                    </div>
                    {isLoading && (
                        <h2 style={loadingTextStyle}>
                            Just a moment, data is being fetched...
                        </h2>
                    )}
                    <div className="flex justify-end mt-7">

                        <button className="flex justify-center bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[70px] rounded-lg"
                            disabled={textAreas.length}
                            onClick={saveButtonClickHandler}>
                            <Icon
                                path={mdiStore}
                                size={1}
                                color={"#fff"}
                                className="z-10 relative w-[20px] min-w-[20px]"
                            />
                            Save
                        </button>
                        <button
                            className="flex justify-center bg-secondary/[0.2] font-medium text-secondary text-base sm:text-lg md:text-xl p-2.5 min-w-[70px] rounded-lg ml-2"
                            onClick={resetButtonClickHandler} >
                            <Icon
                                path={mdiDelete}
                                size={1}
                                color={"#3E334E"}
                                className="z-10 relative w-[20px] min-w-[20px]"
                            />
                            Reset
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

                <div className="flex-row mt-5">
                    {textAreas.map((row, rowIndex) => (
                        <>
                            <h3
                                style={{
                                    color: "#6f7872",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                Please select one box from below.
                            </h3>

                            <div className="mb-6 mx-3" style={textAreaContainerStyle} key={rowIndex}>
                                {row.map((textArea) => (
                                    <textarea
                                        readOnly
                                        key={textArea.id}
                                        value={textArea.value}
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                            // eslint-disable-next-line
                                            switch (e.detail) {
                                                case 2:
                                                    addMoreTextAreas(textArea, rowIndex)
                                            }
                                        }}
                                        className="max-w-[660px] w-full 
                                        outline-none border border-[#aaa] 
                                        rounded-xl py-3 md:py-5 px-5 md:px-7 
                                        placeholder:text-[#999] 
                                        placeholder:md:text-xl mx-3"
                                    />
                                ))}
                            </div>
                        </>
                    ))}

                </div>
            </div>
        </Layout>
    );
};

export default Page6;
