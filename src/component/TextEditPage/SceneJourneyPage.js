import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
    primaryTextAreaContainer,
    loadingTextStyle,
    textAreaContainerStyle,
} from "../../style";

import Modal from "../Modal/Modal";
import fetchData from "../../apiService";
import { Popup } from "../../pages/module/Popup";
import { FlagPopup } from "../../pages/FlagPopup";
import { Button } from "@material-tailwind/react";

const createSceneHeader = {
    title: "Scene Journey Page",
    subtitle: "",
};


const SceneJourneyPage = (props) => {

    const [primaryTextArea, setPrimaryTextArea] = useState("");
    const [textAreas, setTextAreas] = useState([]);
    // eslint-disable-next-line
    const [textAreaValue, setTextAreaValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [wobble, setWobble] = useState(0);
    const [flag, setFlag] = useState(false);
    const [selectText, setSelectText] = useState("");
    const [contextMenuVisible, setContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
    const [textValue, setTextValue] = useState({ "value": null, "rowIndex": null });
    const [isActive, setIsActive] = useState(false);

    const cancelButtonRef = useRef(null);
    const popupRef = useRef(null);

    const handleContextMenu = (e, textArea, rowIndex) => {
        e.preventDefault();
        setContextMenuVisible(true);
        setContextMenuPosition({ x: e.clientX, y: e.clientY });
        setTextValue({ "value": textArea, "rowIndex": rowIndex });
        setIsActive(textArea.isActive);
    };

    const handleContextMenuClose = () => {
        setContextMenuVisible(false);
    };

    const selectLastRowText = () => {
        if (textValue.rowIndex !== null && textValue.value !== null) {
            const rowIndex = textValue.rowIndex
            const textArea = textValue.value
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
            setTextAreas()
            setTextAreas(updatedTextAreas);
        }
    }




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

    useEffect(() => {
        setSelectText(props?.selectText)
        if (selectText) {
            setPrimaryTextArea(selectText)
        }
    }, [props?.selectText]);



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
            const responseData = await fetchData('generate_scenes/', JSON.stringify({ "value": getValue }));
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

    const insert = () => {
        const activeValues = [primaryTextArea];
        for (const row of textAreas) {
            for (const textArea of row) {
                if (textArea.isActive === true) {
                    activeValues.push("\n\n" + textArea.value);
                }
            }
        }

        props?.setResponseData(activeValues.join(''))
        props?.setOpen(false)
    }

    return (
        <Modal
            title={createSceneHeader.title}
            subTitle={createSceneHeader.subtitle}
            open={props?.open}
            setOpen={props?.setOpen}
            insert={insert}
        >
            <div className="flex flex-col rounded  p-4 items-center justify-center">

                <div className="flex-row max-w-[700px]  w-full" style={primaryTextAreaContainer}>
                    <div>
                        <textarea
                            rows={5}
                            className="max-w-[660px] w-full outline-none border border-[#aaa] rounded-xl py-3 md:py-5 px-5 md:px-7 placeholder:text-[#999] placeholder:md:text-xl"
                            key="textArea"
                            value={primaryTextArea}
                            ref={popupRef}
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
                    <div className="flex gap-4 mt-7 justify-end">

                        <button className="bg-primary font-semibold text-white text-base sm:text-lg md:text-xl p-2.5 min-w-[125px] rounded-lg"
                            disabled={textAreas.length}
                            onClick={saveButtonClickHandler}
                        >
                            Save
                        </button>
                        <button className="bg-secondary/[0.2] font-medium text-secondary text-base sm:text-lg md:text-xl p-2.5 min-w-[125px] rounded-lg" onClick={resetButtonClickHandler} >
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
                {contextMenuVisible && (
                    <div
                        style={{
                            position: 'fixed',
                            top: contextMenuPosition.y,
                            left: contextMenuPosition.x,
                            border: '1px solid #ccc',
                            padding: '5px',
                            backgroundColor: 'white',
                            zIndex: 1000,
                        }}
                        onClick={handleContextMenuClose}
                    >
                        <Button onClick={selectLastRowText}>{isActive ? "Undo Now" : "Select Now"}</Button>
                    </div>
                )}

                <div className="flex-row mt-5">
                    {textAreas.map((row, rowIndex) => (
                        <>
                            {rowIndex === 3 ?
                                <h3
                                    style={{
                                        color: "#6f7872",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    Your limit is close, if you want to select one option, please click on right-click then select the Option!

                                </h3> :
                                <h3
                                    style={{
                                        color: "#6f7872",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    Please select one box from below.
                                </h3>
                            }

                            <div className="mb-6 mx-3 gap-3 grid" style={textAreaContainerStyle} key={rowIndex}>
                                {row.map((textArea) => (
                                    <textarea
                                        onContextMenu={rowIndex === 3 ?(e) => handleContextMenu(e, textArea, rowIndex):handleContextMenuClose}
                                        readOnly={rowIndex === 3 ? false : true}
                                        disabled={rowIndex === 3 ? true : false}
                                        key={textArea.id}
                                        value={textArea.value}
                                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                            switch (e.detail) {
                                                case 2:
                                                    addMoreTextAreas(textArea, rowIndex)
                                            }
                                        }}
                                        style={textArea.isActive ? { backgroundColor: "#d5d5d5" } : { backgroundColor: "none" }}
                                        className="max-w-[660px] w-full 
                                        outline-none border border-[#aaa] 
                                        rounded-xl py-3 md:py-5 px-5 md:px-7 
                                        placeholder:text-[#999] 
                                        placeholder:md:text-xl mx-3 hover:border-[#000]"
                                    />
                                ))}
                            </div>
                        </>
                    ))}


                </div>
            </div>
        </Modal>
    );
};

export default SceneJourneyPage;