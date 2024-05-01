import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { mdiChevronDown, mdiClose, mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState, useEffect, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Services/HandledSession";
import { getAuth, signOut } from 'firebase/auth';
import { Transition, Menu as MenuPop } from "@headlessui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('User Logout Successfully!');
      navigate("/login");
      
    } catch (error) {
      console.error('Logout Error:', error);
    }
  };
  const location = useLocation();

  const diffPath = ["/create-scene", "/myProjects"];

  const [open, setOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  

  const toggleAccordion = (id) => {
    if (activeAccordion === id) {
      setActiveAccordion(!activeAccordion);
    } else {
      setActiveAccordion(id);
    }
  };

  return (
    <>
      <div className="shadow-md fixed inset-x-0 top-0 z-20 bg-white">
        <div className="h-[80px] max-w-[1560px] px-5 mx-auto">
          <div className="flex h-full justify-between items-center">
            <div className="flex items-center">
              <span className="uppercase font-bold text-2xl mr-2 cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                logo
              </span>
              {diffPath?.includes(location.pathname) ? (
                <span className="font-bold text-xl mr-10">Project Name</span>
              ) : (
                <>
                  <span className="font-bold text-xl mr-10">App Name</span>
                </>
              )}

              {location.pathname.includes(diffPath[0]) ? (
                <>
                  <div className="hidden md:flex">
                    <button className="py-1.5 text-xl bg-primary bg-opacity-20 min-w-[124px] w-full rounded-lg text-primary capitalize font-semibold mr-5">
                      Save
                    </button>
                    <button className="py-1.5 text-xl bg-[#FF1919] bg-opacity-20 min-w-[124px] w-full rounded-lg text-[#FF1919] capitalize font-semibold">
                      Delete
                    </button>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>

            <div className="hidden md:block">
              <div className="flex items-center">
                {!diffPath?.includes(location.pathname) && (
                  <>
                    <Menu placement="bottom-start">
                      <MenuHandler>
                        <div className="mr-8 text-lg cursor-pointer">
                          Blog{" "}
                          <Icon
                            className="inline"
                            path={mdiChevronDown}
                            size={1}
                          />
                        </div>
                      </MenuHandler>
                      <MenuList>
                        <MenuItem>Blog Item 1</MenuItem>
                        <MenuItem>Blog Item 2</MenuItem>
                        <MenuItem>Blog Item 3</MenuItem>
                      </MenuList>
                    </Menu>
                    <Menu placement="bottom-start">
                      <MenuHandler>
                        <div className="mr-8 text-lg cursor-pointer">
                          Pricing{" "}
                          <Icon
                            className="inline"
                            path={mdiChevronDown}
                            size={1}
                          />
                        </div>
                      </MenuHandler>
                      <MenuList>
                        <MenuItem>Pricing Item 1</MenuItem>
                        <MenuItem>Pricing Item 2</MenuItem>
                        <MenuItem>Pricing Item 3</MenuItem>
                      </MenuList>
                    </Menu>
                  </>
                )}
                <div>
                  {currentUser ?
                    <>
                      <Menu animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }} placement="bottom-end">
                        <MenuHandler>
                          <div className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="absolute -inset-1.5" />
                            <img className="h-8 w-8 rounded-full" src={currentUser?.photoURL ? currentUser?.photoURL : "/assets/images/avatar.png"} alt="" />
                            <div className="pl-2">{currentUser?.displayName ? currentUser?.displayName : currentUser?.email}</div>
                          </div>
                        </MenuHandler>
                        <MenuList>
                          <MenuItem onClick={handleLogout}> Logout</MenuItem>

                        </MenuList>
                      </Menu>
                    </>


                    :
                    <>
                      <button
                        className="bg-[#0349e5] text-lg min-w-[100px] px-3 py-1.5 text-white rounded-[40px] "
                        onClick={() => { navigate("/login"); }}
                      >
                        Account
                      </button>
                    </>
                  }               
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <Icon
                path={mdiMenu}
                size={1}
                onClick={() => {
                  setOpen(!open);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`fixed ${open ? "ml-0" : "-ml-[300px]"}  transition-all duration-300 inset-y-0 w-full z-30 max-w-[300px] bg-white shadow-md`}>
        <div className="relative h-screen">
          <div className="p-4 w-full flex items-center justify-between">
            <div>
              <span className="uppercase font-bold text-2xl mr-2">
                logo
              </span>
              <span className="font-bold text-xl">
                App Name
              </span>
            </div>
            <Icon
              path={mdiClose}
              size={1}
              className="cursor-pointer text-gray-600 hover:text-gray-800"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="h-[calc(100%_-_64px)] overflow-auto p-4">

            {currentUser &&
              <div className="relative flex  items-center rounded-full bg-white gap-2 mb-3 items-center text-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">

                <img className="h-8 w-8 rounded-full" src={currentUser?.photoURL ? currentUser?.photoURL : "/assets/images/avatar.png"} alt="" />
                <span>{currentUser?.displayName ? currentUser?.displayName : currentUser?.email}</span>
              </div>
            }



            {diffPath[0].includes(location.pathname) ? (
              <>
                <div className="">
                  <button className="py-1.5 mb-5 md:mb-0 text-xl bg-primary bg-opacity-20 min-w-[124px] w-full rounded-lg text-primary capitalize font-semibold mr-5">
                    Save
                  </button>
                  <button className="py-1.5 text-xl bg-[#FF1919] bg-opacity-20 min-w-[124px] w-full rounded-lg text-[#FF1919] capitalize font-semibold">
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <>
                {diffPath[1]?.includes(location.pathname) ? (
                  <></>
                ) : (
                  <>
                    <div className="p-2 mb-2">
                      <div className="flex items-center justify-between"
                        onClick={() => {
                          toggleAccordion(1);
                        }}
                      >
                        <div className="font-semibold text-lg">Blog</div>
                        <span className={`${activeAccordion === 1 ? "rotate-180" : ""} transition-all duration-100`}>
                          <Icon path={mdiChevronDown} size={1} />
                        </span>
                      </div>
                      <div className={`${activeAccordion === 1 ? "block" : "hidden"}`}>
                        <ul className="ml-3 py-2">
                          <li className="mb-1">blog 1</li>
                          <li className="mb-1">blog 2</li>
                          <li className="mb-1">blog 3</li>
                        </ul>
                      </div>
                    </div>
                    <div className="p-2 mb-2">
                      <div className="flex items-center justify-between"
                        onClick={() => {
                          toggleAccordion(2);
                        }}
                      >
                        <div className="font-semibold text-lg">Pricing</div>
                        <span className={`${activeAccordion === 2 ? "rotate-180" : ""} transition-all duration-100`} >
                          <Icon path={mdiChevronDown} size={1} />
                        </span>
                      </div>
                      <div className={`${activeAccordion === 2 ? "block" : "hidden"}`} >
                        <ul className="ml-3 py-2">
                          <li className="mb-1">pricing 1</li>
                          <li className="mb-1">pricing 2</li>
                          <li className="mb-1">pricing 3</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
            <div>
              {currentUser ? (

                <button className="bg-[#0349e5] text-lg min-w-[100px] w-full px-3 py-1.5 text-white rounded-lg mt-5"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <>
                  <button className="bg-[#0349e5] text-lg min-w-[100px] px-3 py-1.5 text-white rounded-[40px] mt-5"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Account
                  </button>
                </>

              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`${open ? "block" : "hidden"} fixed inset-0 bg-black bg-opacity-30 z-20`} onClick={() => setOpen(false)} ></div>
    </>
  );
};

export default Navbar;
