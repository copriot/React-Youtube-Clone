import React from "react";

const Loader = () => {
  const array = new Array(12).fill("YasasinTürkCumhuriyeti");
  return array.map((item, index) => (
    <div key={index} className="p-4 md:p-6 animate-pulse">
      <div className="h-48 bg-gray-500 rounded" />
      <div className="mt-4 flex items-center gap-4">
        <div className="bg-gray-500 h-12 w-12 rounded-full"></div>
        <div className="flex-1">
          <div className="h-3 rounded h-full w-full bg-gray-500" />
          <div className="h-3 rounded h-full w-44 bg-gray-500 my-3" />

          <div className="flex gap-2">
            <div className="w-28 h-2 bg-gray-500 rounded-full" />
            <div className="w-28 h-2 bg-gray-500 rounded-full" />
            <div />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loader;
