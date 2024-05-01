import React, { useState, useRef } from 'react';
import Layout from '../component/Layout/Layout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ToneBasedRewrite from '../component/TextEditPage/ToneBasesRewrite';
import RewriteUserInstructions from '../component/TextEditPage/RewriteUserInstructions';
import ContinuePage from '../component/TextEditPage/ContinuePage';
import DiscribePage from '../component/TextEditPage/DiscribePage';
import SceneJourneyPage from '../component/TextEditPage/SceneJourneyPage';
import { mdiChevronDown, mdiClose, mdiMenu } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import {
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from "@material-tailwind/react";

const modules = {

    toolbar: [
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        matchVisual: false,
    },
};

const formats = [
    'bold', 'header', 'font', 'size',
    'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

const TextEditor = () => {

    const quillRef = useRef(null);
    const [index, setIndex] = useState(0)
    const [length, setLength] = useState(0)
    const [responseData, setResponseData] = useState('');
    const [toneBasedRewrite, setToneBasedRewrite] = useState(false);
    const [rewriteUserInstructions, setRewriteUserInstructions] = useState(false);
    const [continuePage, setContinuePage] = useState(false);
    const [continueResponseData, setContinueResponseData] = useState('');
    const [discribePage, setDiscribePage] = useState(false);
    const [discribeResponseData, setDiscribeResponseData] = useState('');
    const [sceneJourneyPage, setSceneJourneyPage] = useState(false);
    const [sceneJourneyResponseData, setSceneJourneyResponseData] = useState('');
    const [userInstructionResponseData, setUserInstructionResponseData] = useState('');
    const [value, setValue] = useState('');
    const [selectScriptVal, setSelectScriptVal] = useState("Rewrite");
    const [selectedText, setSelectedText] = useState('');
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleSelection = () => {
        const quill = quillRef.current.getEditor();
        const selection = quill.getSelection();
        if (selection && selection.length > 0) {
            const text = quill.getText(selection.index, selection.length);
            setSelectedText(text);
            setIndex(selection.index)
            setLength(selection.length)
        } else {
            setSelectedText('');
        }
    };

    
    if (responseData && length !== 0) {
        const editor = quillRef.current.getEditor();
        editor.deleteText(index, length);
        editor.insertText(index, responseData);
        setResponseData('')
        setIndex(0)
        setLength(0)
    } else if (userInstructionResponseData && length !== 0) {
        const editor = quillRef.current.getEditor();
        editor.deleteText(index, length);
        editor.insertText(index, userInstructionResponseData);
        setUserInstructionResponseData('')
        setIndex(0)
        setLength(0)
    } else if (continueResponseData && length !== 0) {
        const editor = quillRef.current.getEditor();
        editor.insertText(index + length + 1, continueResponseData);
        setContinueResponseData('')
        setIndex(0)
        setLength(0)
    } else if (discribeResponseData && length !== 0) {
        const editor = quillRef.current.getEditor();
        editor.deleteText(index, length);
        editor.insertText(index, discribeResponseData);
        setDiscribeResponseData('')
        setIndex(0)
        setLength(0)
    } else if (sceneJourneyResponseData && length !== 0) {
        const editor = quillRef.current.getEditor();
        editor.deleteText(index, length);
        editor.insertText(index, sceneJourneyResponseData);
        setSceneJourneyResponseData('')
        setIndex(0)
        setLength(0)
    }

    return (
        <Layout>
            <div className='flex '>
                <div className='h-[100vh] bg-white z-10 sm:w-[200px] md:w-[300px] hidden md:block mr-[30px]'>
                    <div className='p-[20px] bg-[#fff] border-[1px_solid_#000]'>
                        <div className=' flex flex-col gap-[20px]'>
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <div className="flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
                                        Stage 1
                                        <Icon
                                            className="inline ml-2"
                                            path={mdiChevronDown}
                                            size={1}
                                        />
                                    </div>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem
                                        onClick={() => { navigate("/page6"); }}
                                    >
                                        Flesh out the ideas
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => { navigate("/outline_act"); }}
                                    >
                                        Outline
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => { navigate("/outline_save_cat"); }}
                                    >
                                        Outline save the cat
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => { navigate("/outline_char"); }}
                                    >
                                        Develop Characters
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => { navigate("/create_plot"); }}
                                    >
                                        Develop plot
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <div className="flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
                                        Stage 2
                                        <Icon
                                            className="inline ml-2"
                                            path={mdiChevronDown}
                                            size={1}
                                        />
                                    </div>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem
                                        onClick={() => { navigate("/customize_scene"); }}
                                    >
                                        Create customized scene
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => { navigate("/create_scene_genre"); }}
                                    >
                                        Explore scene
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => { navigate("/duplicate_page6"); }}
                                    >
                                        See where the scene leads
                                    </MenuItem>

                                </MenuList>
                            </Menu>
                            <Menu placement="bottom-start">
                                <MenuHandler>
                                    <div className="flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
                                        Stage 3
                                        <Icon
                                            className="inline ml-2"
                                            path={mdiChevronDown}
                                            size={1}
                                        />
                                    </div>
                                </MenuHandler>
                                <MenuList>
                                    <MenuItem
                                        onClick={() => { navigate("/evaluate_scene"); }}
                                    >
                                        Evaluate scene
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => { navigate("/evaluate_project"); }}
                                    >
                                        Evaluate project
                                    </MenuItem>

                                </MenuList>
                            </Menu>
                        </div>
                    </div>
                </div>
                <div className='flex items-center min-h-[calc(100vh_-_80px)] w-[1000px] justify-center'>
                    <div className='p-7 sm:max-w-[1000px] w-full react-quill shadow-card rounded-2xl'>
                    <div className="md:hidden">
                        <Icon
                            path={mdiMenu}
                            size={1}
                            className='mt-[20px] mx-[20px]'
                            onClick={() => {
                                setOpen(!open);
                            }}
                        />
                        <div className={`fixed ${open ? "ml-0" : "-ml-[300px]"}  transition-all duration-300 inset-y-0 left-0 w-full z-30 max-w-[300px] bg-white shadow-md mt-[80px]`}>
                            <div className='h-[100vh] bg-white z-10 w-full sm:max-w-[200px] md:w-[300px] md:block'>
                                <div className='p-[20px] pt-10 bg-[#fff] border-[1px_solid_#000] relative'>
                                    <Icon
                                        path={mdiClose}
                                        size={1}
                                        className="cursor-pointer text-gray-600 hover:text-gray-800 align-left absolute right-2 top-2"
                                        onClick={() => setOpen(false)}
                                    />
                                    <div className=' flex flex-col gap-[20px]'>
                                        <Menu placement="bottom-start">
                                            <MenuHandler>
                                                <div className="flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
                                                    Stage 1
                                                    <Icon
                                                        className="inline ml-2"
                                                        path={mdiChevronDown}
                                                        size={1}
                                                    />
                                                </div>
                                            </MenuHandler>
                                            <MenuList>
                                                <MenuItem
                                                    onClick={() => { navigate("/page6"); }}
                                                >
                                                    Flesh out the ideas
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() => { navigate("/outline_act"); }}
                                                >
                                                    Outline
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() => { navigate("/outline_save_cat"); }}
                                                >
                                                    Outline save the cat
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() => { navigate("/outline_char"); }}
                                                >
                                                    Develop Characters
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() => { navigate("/create_plot"); }}
                                                >
                                                    Develop plot
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                        <Menu placement="bottom-start">
                                            <MenuHandler>
                                                <div className="flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
                                                    Stage 2
                                                    <Icon
                                                        className="inline ml-2"
                                                        path={mdiChevronDown}
                                                        size={1}
                                                    />
                                                </div>
                                            </MenuHandler>
                                            <MenuList>
                                                <MenuItem
                                                    onClick={() => { navigate("/customize_scene"); }}
                                                >
                                                    Create customized scene
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() => { navigate("/create_scene_genre"); }}
                                                >
                                                    Explore scene
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() => { navigate("/duplicate_page6"); }}
                                                >
                                                    See where the scene leads
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                        <Menu placement="bottom-start">
                                            <MenuHandler>
                                                <div className="flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-2xl px-4 py-3 lg:py-3.5">
                                                    Stage 3
                                                    <Icon
                                                        className="inline ml-2"
                                                        path={mdiChevronDown}
                                                        size={1}
                                                    />
                                                </div>
                                            </MenuHandler>
                                            <MenuList>
                                                <MenuItem
                                                    onClick={() => { navigate("/evaluate_scene"); }}
                                                >
                                                    Evaluate scene
                                                </MenuItem>
                                                <MenuItem
                                                    onClick={() => { navigate("/evaluate_project"); }}
                                                >
                                                    Evaluate project
                                                </MenuItem>

                                            </MenuList>
                                        </Menu>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${open ? "block" : "hidden"} fixed inset-0 bg-black bg-opacity-30 z-20`} onClick={() => setOpen(false)} ></div>
                    </div>
                        <div className='flex items-center gap-6 mb-3 justify-end'>
                            <h4 className='font-semibold text-gray-900'>ProjectName</h4>
                            <h4 className='font-semibold text-gray-900'>UserName</h4>
                        </div>
                        <div className='flex flex-wrap items-center gap-3 mb-6'>
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
                                            setSelectScriptVal("Tone Based");
                                            setToneBasedRewrite(!toneBasedRewrite);
                                        }}
                                    >
                                        Tone Based
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            setSelectScriptVal("Customize");
                                            setRewriteUserInstructions(!rewriteUserInstructions);
                                        }}
                                    >
                                        Customize
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <button className='max-w-[170px] min-w-[120px] flex items-center justify-center text-lg cursor-pointer bg-[#EEE] rounded-lg py-2 px-2'
                                onClick={() => { setDiscribePage(!discribePage) }}
                            >
                                Describe
                            </button>
                            <button className='max-w-[170px] min-w-[120px] flex items-center justify-center text-lg cursor-pointer bg-[#EEE] rounded-lg py-2 px-2'
                                onClick={() => { setContinuePage(!continuePage) }}
                            >
                                Continue
                            </button>
                            <button className='max-w-[170px] min-w-[120px] flex items-center justify-center text-lg cursor-pointer bg-[#EEE] rounded-lg py-2 px-2'
                                onClick={() => { setSceneJourneyPage(!sceneJourneyPage) }}
                            >
                                Scene Journey
                            </button>

                        </div>
                        <ReactQuill
                            ref={quillRef}
                            formats={formats}
                            modules={modules}
                            theme="snow"
                            value={value}
                            onChange={setValue}
                            onChangeSelection={handleSelection}
                        />

                    </div>
                </div>
            </div>
            {toneBasedRewrite && (
                <ToneBasedRewrite
                    open={toneBasedRewrite}
                    setOpen={setToneBasedRewrite}
                    selectText={selectedText}
                    setResponseData={setResponseData}
                />
            )}
            {rewriteUserInstructions && (
                <RewriteUserInstructions
                    open={rewriteUserInstructions}
                    setOpen={setRewriteUserInstructions}
                    selectText={selectedText}
                    setResponseData={setUserInstructionResponseData}
                />
            )}
            {continuePage && (
                <ContinuePage
                    open={continuePage}
                    setOpen={setContinuePage}
                    selectText={selectedText}
                    setResponseData={setContinueResponseData}
                />
            )}
            {discribePage && (
                <DiscribePage
                    open={discribePage}
                    setOpen={setDiscribePage}
                    selectText={selectedText}
                    setResponseData={setDiscribeResponseData}
                />
            )}
            {sceneJourneyPage && (
                <SceneJourneyPage
                    open={sceneJourneyPage}
                    setOpen={setSceneJourneyPage}
                    selectText={selectedText}
                    setResponseData={setSceneJourneyResponseData}
                />
            )}
        </Layout>
    )
}

export default TextEditor