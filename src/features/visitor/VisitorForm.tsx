import React from "react";

const VisitorForm = () => {
  return (
    <div className="min-h-[800px] bg-textPrimary relative px-10 md:px-24 lg:px-28 xl:px-32 pt-[200px] lg:pt-[250px] xl:pt-[200px] 2xl:pt-[225px] pb-24">
      <h1 className="text-2xl md:text-4xl text-center">
        {`Don't Miss The Event`}
      </h1>
      <div className="flex justify-center ">
        <form className="mt-20 w-full xl:w-9/12 2xl:w-8/12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 ">
            <div>
              <label className="block">
                <span className="text-xl">First Name</span>
                <input className="form-input w-full  bg-textPrimary border-0 focus:ring-0 border-b-2 border-gray-600 focus:border-gray-300 px-0.5 transition duration-200 ease-in" />
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-xl">Last Name</span>
                <input className="form-input w-full  bg-textPrimary border-0 focus:ring-0 border-b-2 border-gray-600 focus:border-gray-300 px-0.5 transition duration-200 ease-in" />
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-xl">Email</span>
                <input className="form-input w-full  bg-textPrimary border-0 focus:ring-0 border-b-2 border-gray-600 focus:border-gray-300 px-0.5 transition duration-200 ease-in" />
              </label>
            </div>
            <div>
              <label className="block">
                <span className="text-xl">Phone Number</span>
                <input className="form-input w-full  bg-textPrimary border-0 focus:ring-0 border-b-2 border-gray-600 focus:border-gray-300 px-0.5 transition duration-200 ease-in" />
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <div className="btn cursor-pointer flex-shrink-0">Subscribe</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VisitorForm;
