import React from "react";
import Layout from "./Layout/Layout";

const PageLayout = ({ children, header }) => {
  return (
    <>
      <Layout>
        <div className="max-w-[1500px] mx-auto w-full bg-white rounded-[15px]">
          <div className="px-7 pt-2">
            <div className="my-10">
              <h1 className=" text-3xl md:text-4xl lg:text-5xl font-semibold text-[#222] text-center leading-normal mb-5">
                {header?.title}
              </h1>
              <p className="text-[#666] text-base md:text-lg lg:text-xl leading-normal text-center max-w-4xl mx-auto">
                {header?.subtitle}
              </p>
            </div>
            {children}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PageLayout;
