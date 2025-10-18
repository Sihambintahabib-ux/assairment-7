import React from 'react';

const Incomplete = ({ data, issueresolve }) => {
  return (
    <div className="space-y-2 my-5 p-3  rounded-sm flex flex-col  bg-green-200">
      <h1> {data.title}</h1>
      <p className="w-full p-2 rounded-sm  ">
        ✅ Complete
      </p>
    </div>
  );
};

export default Incomplete;