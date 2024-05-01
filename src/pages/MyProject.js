import React, { useState } from "react";
import Layout from "../component/Layout/Layout";
import Icon from "@mdi/react";
import { mdiArrowRightCircle, mdiPlusCircle } from "@mdi/js";
import { AnimatePresence, motion } from "framer-motion";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const MyProject = () => {
  const [currentStepIP, setCurrentStepIP] = useState(0);
  const [currentStepCP, setCurrentStepCP] = useState(0);

  const [inProgressProjects, setInProgressProjects] = useState([
    {
      id: "ip1",
      title: "Idea 1 here project...",
      description: "Embarking on an exciting new project journey filled...",
    },
    {
      id: "ip2",
      title: "Idea 2 here project...",
      description: "Embarking on an exciting new project journey filled...",
    },
  ]);

  const [completedProjects, setCompletedProjects] = useState([
    {
      id: "cp1",
      title: "Idea 1 here project...",
      description: "Embarking on an exciting new project journey filled...",
    },
    {
      id: "cp2",
      title: "Idea 2 here project...",
      description: "Embarking on an exciting new project journey filled...",
    },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const sourceList =
      result.source.droppableId === "inProgress"
        ? inProgressProjects
        : completedProjects;
    const destinationList =
      result.destination.droppableId === "inProgress"
        ? inProgressProjects
        : completedProjects;

    const [movedItem] = sourceList.splice(result.source.index, 1);
    destinationList.splice(result.destination.index, 0, movedItem);

    setInProgressProjects([...inProgressProjects]);
    setCompletedProjects([...completedProjects]);
  };

  const handleIPNextStep = () => {
    setCurrentStepIP(currentStepIP + 1);
  };

  const handleCPNextStep = () => {
    setCurrentStepCP(currentStepCP + 1);
  };

  return (
    <Layout>
      <div 
      className="py-14 px-5">
        <div 
        className="max-w-[650px] w-full mx-auto">
          <div 
          className="relative px-5 md:px-7 
          py-11 bg-white shadow-card rounded-2xl">
            <img
              src="/assets/images/project_vector1.svg"
              className="absolute top-3 right-3"
              alt="vector1"
            />
            <div 
            className="flex flex-col 
            sm:flex-row 
            items-center h-full">
              <div className="mr-7">
                <Icon 
                path={mdiPlusCircle} 
                color={"#6f93ef"} 
                size={4} 
                />
              </div>
              <div>
                <div 
                className="text-primary 
                font-semibold text-3xl 
                my-5 sm:mt-0 text-center 
                sm:text-left">
                  Create New Project
                </div>
                <p 
                className="text-[#666] 
                leading-[30px] text-center 
                sm:text-left">
                  Embarking on an exciting new project journey filled with
                  opportunities and challenges.
                </p>
              </div>
            </div>
          </div>
          <DragDropContext onDragEnd={handleDragEnd}>
            <div 
            className="mt-12 flex flex-col 
            md:flex-row gap-12">
              <Droppable droppableId="inProgress">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="shadow-card bg-white 
                    p-7 md:max-w-[300px] 
                    min-h-[341px] w-full rounded-2xl"
                  >
                    {currentStepIP === 0 && (
                      <AnimatePresence mode="wait">
                        <motion.div
                          initial={{ x: 15, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -15, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div 
                          className="flex flex-col justify-between">
                            <div className="text-[28px] font-semibold text-[#05C98F] leading-[50px]">
                              <div>In Progress Projects</div>
                            </div>
                            <div className="mt-8 flex justify-between items-end">
                              <img
                                src="/assets/images/vector-inprogress.svg"
                                alt="progress"
                              />
                              <div>
                                <Icon
                                  path={mdiArrowRightCircle}
                                  size={3}
                                  color={"#05C98F"}
                                  onClick={handleIPNextStep}
                                  className="cursor-pointer"
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}

                    {currentStepIP === 1 && (
                      <AnimatePresence mode="wait">
                        <motion.div
                          initial={{ x: 15, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -15, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div>
                            <div 
                            className="flex items-center 
                            justify-between mb-3">
                              <div 
                              className="text-[#05C98F] 
                              font-semibold text-xl">
                                In Progress Projects
                              </div>
                              <img
                                src="/assets/images/vector-inprogress.svg"
                                className="w-[53px] h-[53px]"
                                alt="progress"
                              />
                            </div>
                            {inProgressProjects.map((item, index) => {
                              return (
                                <div
                                  className="border rounded-md border-[#DEDEDE] p-3 mb-2.5"
                                  key={index}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex-grow text-[#666] font-semibold">
                                      {item.title}
                                    </div>
                                    <Icon
                                      path={mdiArrowRightCircle}
                                      size={1}
                                      color={"#05C98F"}
                                      className="cursor-pointer"
                                    />
                                  </div>
                                  <div className="mt-1 text-[#666]">
                                    {item.description}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                )}
              </Droppable>
              <Droppable droppableId="comeleted">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="shadow-card bg-white 
                    p-7 md:max-w-[300px] 
                    min-h-[341px] w-full 
                    rounded-2xl"
                  >
                    {currentStepCP === 0 && (
                      <AnimatePresence mode="wait">
                        <motion.div
                          initial={{ x: 15, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -15, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex flex-col justify-between">
                            <div className="text-[28px] font-semibold text-[#FF6B19] leading-[50px]">
                              <div>Completed Projects</div>
                            </div>
                            <div className="mt-8 flex justify-between items-end">
                              <img
                                src="/assets/images/vector-completed.svg"
                                alt="inprogress"
                              />
                              <div>
                                <Icon
                                  path={mdiArrowRightCircle}
                                  size={3}
                                  color={"#FF6B19"}
                                  className="cursor-pointer"
                                  onClick={handleCPNextStep}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                    {currentStepCP === 1 && (
                      <AnimatePresence mode="wait">
                        <motion.div
                          initial={{ x: 15, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -15, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div className="text-[#FF6B19] font-semibold text-xl">
                                Completed Projects
                              </div>
                              <img
                                src="/assets/images/vector-completed.svg"
                                className="w-[53px] h-[53px]"
                                alt="progress"
                              />
                            </div>
                            {completedProjects.map((item, index) => {
                              return (
                                <div
                                  className="border rounded-md border-[#DEDEDE] p-3 mb-2.5"
                                  key={index}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex-grow text-[#666] font-semibold">
                                      {item.title}
                                    </div>
                                    <Icon
                                      path={mdiArrowRightCircle}
                                      size={1}
                                      color={"#FF6B19"}
                                      className="cursor-pointer"
                                    />
                                  </div>
                                  <div className="mt-1 text-[#666]">
                                    {item.description}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
        </div>
      </div>
    </Layout>
  );
};

export default MyProject;
