import React from "react";
import Layout from "../component/Layout/Layout";
import { useState } from "react";
import CreateIdea from "../component/Create/CreateIdea";
import CreatePlot from "../component/Create/CreatePlot";
import OutlineAct from "../component/Outline/OutlineAct";
import OutlineStructure from "../component/Outline/OutlineStructure";
import OutlineCharacters from "../component/Outline/OutlineCharacters";
import EvaluateProject from "../component/Evaluate/EvaluateProject";
import CreateScene from "../component/Scene/CreateScene";
import CreateSceneGenre from "../component/Scene/CreateSceneGenre";
import CustomizeScene from "../component/Scene/CustomizeScene";
import SceneJourney from "../component/Scene/SceneJourney";

const Home = () => {

  // create
  const [openIdeaModal, setOpenIdeaModal] = useState(false);
  const [openPlotModal, setOpenPlotModal] = useState(false);

  // outline
  const [outlineActModal, setOutlineActModal] = useState(false);
  const [outlineStructureModal, setOutlineStructureModal] = useState(false);
  const [outlineCharactersModal, setOutlineCharactersModal] = useState(false);

  // Evaluate
  const [evaluateProjectModal, setEvaluateProjectModal] = useState(false);

  // Create Scene
  const [createSceneModal, setCreateSceneModal] = useState(false);
  const [createSceneGenreModal, setCreateSceneGenreModal] = useState(false);

  // Customze Create Scene
  const [customizeCreateScene, setCustomizeCreateScene] = useState(false);
  // eslint-disable-next-line
  const [acitiveModal, setAcitiveModal] = useState(1);

  // Scene Journey 
  const [sceneJourneyModal, setSceneJourneyModal] = useState(false);

  // eslint-disable-next-line
  const pages = {
    1: "CreateIdea",
  };

  const handleNext = (id) => {
    setAcitiveModal(id);
  };

  return (
    <>
      <Layout>
        <div
          className="max-w-[1560px] mx-auto 
        px-5 overflow-hidden">
          <section
            className="pt-20 lg:pt-28 
          md:pb-8 lg:pb-12 lg:px-5">
            <div
              className="max-w-3xl mx-auto">
              <h1
                className="text-3xl sm:text-4xl 
              md:text-5xl lg:text-6xl font-extrabold 
              text-center md:leading-[70px] 
              lg:leading-[80px]">
                Write Script on the go, Like never before{" "}
              </h1>
            </div>
            <p className="text-center text-lg my-10 font-medium">
              Some dummy text is written here. Lorem ipsum dolor sit amet,
              consectetur.
            </p>
            <div className="text-center"> 
              <button className="bg-primary min-w-[100px] font-bold text-white rounded-md px-3 py-2">
                Try it
              </button>
            </div>
          </section>
          <section className="py-5 md:py-8 lg:py-12">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-start mt-20 lg:mt-0">
                <div className="mb-8 w-full text-center lg:text-left">
                  <span className="text-[12px] px-5 text-[#BE3ABE] bg-[#BE3ABE] bg-opacity-30 py-2 font-bold rounded-3xl">
                    User Friendly
                  </span>
                </div>
                <h2 className="mb-5 w-full font-bold text-3xl md:text-4xl lg:text-[40px] text-center lg:text-left">
                  Flesh out your ideas
                </h2>
                <p className="mb-5 text-base leading-8 max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left text-gray-600">
                  wallets allow you to sync uo to three cards, os if you lose,
                  steal, or demage your main card, you can still use your
                  wallet.
                </p>
                <div className="text-center lg:text-left w-full">
                  <button className="bg-primary mx-auto lg:mx-0 text-lg min-w-[150px] px-3 py-1.5 min-h-[50px] text-white rounded-3xl mt-4 lg:mt-0">
                    Start Now
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
                <div className="relative max-w-[420px] mx-auto overflow-hidden sm:overflow-visible">
                  <div className="absolute top-[15%] -left-6 w-full max-w-[380px] max-h-[270px] h-full rotate-[30deg] rounded-[379px] bg-[#E381281A] blur-[50px] hidden md:block">

                  </div>
                  <div className="absolute left-0 md:bottom-0 lg:-bottom-14 w-full max-w-[380px] max-h-[270px] h-full rotate-[30deg] rounded-[379px] bg-[#6428E31A] blur-[50px] hidden md:block">

                  </div>
                  <div className="absolute left-[20%] top-[10%] w-full max-w-[300px] xl:max-w-[416px] max-h-[300px] h-full rotate-[30deg] rounded-[416px] bg-[#E8058D1A] blur-[50px] hidden md:block">

                  </div>
                  <img
                    src="/assets/images/home-vector.svg"
                    className="z-10 relative"
                    alt="home-vector.svg"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="py-5 md:py-8 lg:py-12">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
                <div className="relative lg:-ml-6 ">
                  <div className="absolute -bottom-5 -left-5 w-full max-w-[380px] max-h-[270px] h-full rotate-[30deg] rounded-[379px] bg-[#E381281A] blur-[50px] hidden md:block">

                  </div>
                  <div className="absolute right-0 -bottom-10 w-full max-w-[380px] max-h-[270px] h-full rotate-[30deg] rounded-[379px] bg-[#6428E31A] blur-[50px] hidden md:block">

                  </div>
                  <div className="absolute left-[20%] top-[10%] w-full max-w-[300px] xl:max-w-[416px] max-h-[300px] h-full rotate-[30deg] rounded-[416px] bg-[#E8058D1A] blur-[50px] hidden md:block">

                  </div>
                  <img
                    src="/assets/images/preview1.svg"
                    className="z-10 relative"
                    alt="preview1"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-start mt-20 lg:mt-0">
                <div className="max-w-[500px] mx-auto lg:ml-auto">
                  <div className="mb-8 text-center lg:text-left">
                    <span className="text-[12px] px-5 text-primary bg-primary bg-opacity-30 py-2 font-bold rounded-3xl">
                      Easy to use
                    </span>
                  </div>
                  <div className="mb-5 font-bold text-3xl md:text-4xl lg:text-[40px] leading-normal text-center lg:text-left">
                    Only your phone and your you - nothing more!
                  </div>
                  <p className="mb-5 text-base leading-8 max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left text-gray-600">
                    Wallets allow you to sync uo to three cards, os if you lose,
                    steal, or damage your main card, you can still use your
                    wallet.
                  </p>
                  <div className="text-center lg:text-left w-full">
                    <button className="bg-white mx-auto lg:mx-0 font-semibold border border-[#999] text-lg min-w-[150px] px-3 py-1.5 min-h-[50px] text-black rounded-3xl">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5 md:py-8 lg:py-12">
            <div
              className="flex flex-col-reverse lg:flex-row">
              <div className="w-full lg:w-1/2 flex flex-col justify-center items-start my-20 lg:my-0">
                <div className="mb-8 w-full text-center lg:text-left">
                  <span className="text-[12px] px-5 text-[#BE3ABE] bg-[#BE3ABE] bg-opacity-30 py-2 font-bold rounded-3xl">
                    Free
                  </span>
                </div>
                <h2 className="mb-5 text-center lg:text-left font-bold max-w-[318px] mx-auto lg:mx-0 text-3xl md:text-4xl lg:text-[40px]">
                  No Fees, free for ever
                </h2>
                <p className="mb-5 text-center lg:text-left text-base leading-8 max-w-[400px] mx-auto lg:mx-0 text-gray-600">
                  Wallets allow you to sync uo to three cards, os if you lose,
                  steal, or damage your main card, you can still use your
                  wallet.
                </p>
                <div className="w-full text-center lg:text-left">
                  <button className="bg-[#202021] text-lg min-w-[150px] px-3 py-1.5 min-h-[50px] text-white rounded-3xl">
                    Start Now
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -bottom-5 -left-5 w-full max-w-[380px] max-h-[270px] h-full rotate-[30deg] rounded-[379px] bg-[#E381281A] blur-[50px] hidden md:block">
                  </div>
                  <div className="absolute right-5 -bottom-10 w-full max-w-[380px] max-h-[270px] h-full rotate-[30deg] rounded-[379px] bg-[#6428E31A] blur-[50px] hidden md:block">

                  </div>
                  <div className="absolute left-[20%] top-[10%] w-full max-w-[300px] xl:max-w-[416px] max-h-[300px] h-full rotate-[30deg] rounded-[416px] bg-[#E8058D1A] blur-[50px] hidden md:block">

                  </div>
                  <img
                    src="/assets/images/preview2.svg"
                    className="z-10 relative"
                    alt="preview2"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* create */}
        <CreateIdea
          open={openIdeaModal}
          setOpen={setOpenIdeaModal}
          handleNext={handleNext}
        />
        <CreatePlot
          open={openPlotModal}
          setOpen={setOpenPlotModal}
          handleNext={handleNext}
        />

        {/* outline */}
        <OutlineAct
          open={outlineActModal}
          setOpen={setOutlineActModal}
          handleNext={handleNext}
        />
        <OutlineStructure
          open={outlineStructureModal}
          setOpen={setOutlineStructureModal}
          handleNext={handleNext}
        />

        <OutlineCharacters
          open={outlineCharactersModal}
          setOpen={setOutlineCharactersModal}
          handleNext={handleNext}
        />

        {/* Evaluate */}
        <EvaluateProject
          open={evaluateProjectModal}
          setOpen={setEvaluateProjectModal}
          handleNext={handleNext}
        />

        {/* create scene */}

        <CreateScene
          open={createSceneModal}
          setOpen={setCreateSceneModal}
          handleNext={handleNext}
        />

        <CreateSceneGenre
          open={createSceneGenreModal}
          setOpen={setCreateSceneGenreModal}
          handleNext={handleNext}
        />

        {/* CustomizeScene */}
        <CustomizeScene
          open={customizeCreateScene}
          setOpen={setCustomizeCreateScene}
          handleNext={handleNext}
        />

        <SceneJourney
          open={sceneJourneyModal}
          setOpen={setSceneJourneyModal}
        />


      </Layout>
    </>
  );
};

export default Home;
