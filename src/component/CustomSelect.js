import React from 'react'
// import { useNavigate } from "react-router-dom";
import {
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
} from "@material-tailwind/react";
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
const CustomSelect = (props) => {
    // const navigate = useNavigate();
    // const data = props.redirectValue
    // const inputData = btoa(props.redirectValue)

    const redirectValue = (selectedItem) => {
        props.setSelectFilterVal(selectedItem.name);
        // if (selectedItem.page && data) {
        //     navigate(selectedItem.page + "?q=" + inputData);
        // }
        if (selectedItem.page) {
            props.setCustomizeCreateScene(!props.customizeCreateScene)
            // navigate(selectedItem.page + "?q=" + inputData);
        }
    }
    return (
        <Menu placement="bottom-start">
            <MenuHandler>
                <div className="max-w-[170px] min-w-[120px] flex items-center justify-between text-lg cursor-pointer bg-[#EEE] rounded-lg py-2 px-3">
                    {props.selectFilterVal}
                    <Icon
                        className="inline ml-2"
                        path={mdiChevronDown}
                        size={1}
                    />
                </div>
            </MenuHandler>
            <MenuList>
                {
                    props?.option?.map((item, index) => {
                        return (
                            <MenuItem   
                                key={index}
                                onClick={() => redirectValue(item)}
                            >
                                {item.name}
                            </MenuItem>
                        )
                    })
                }

            </MenuList>
        </Menu>
    )
}

export default CustomSelect