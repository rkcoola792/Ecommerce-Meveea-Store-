import React from "react";

const NewArrival = () => {
  return (
    <div className="text-center flex flex-col gap-8 max-w-screen-xl mx-auto mt-8 sm:px-8 px-4">
      <h2 className="font-semibold text-2xl">NEW ARRIVAL</h2>
      <div>
        <img src="/Horizontal/new-arrival.png" className="w-full"></img>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-8 sm:mt-8 mt-2">
        <div>
          <img src="/vertical/7.jpg"></img>
        </div>
        <div>
          <img src="/vertical/9.jpg"></img>
        </div>
        <div>
          <img src="/vertical/2.jpg"></img>
        </div>
        <div>
          <img src="/vertical/5.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
