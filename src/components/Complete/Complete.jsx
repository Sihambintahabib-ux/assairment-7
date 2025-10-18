import React from 'react';

const Complete = ({ data, handleissueresolve }) => {
  return (
    <div className='outline-1 shadow-2xl space-y-5 my-5 p-3  rounded-sm flex flex-col '>
      <h1>  {data.title}</h1>
      <button className='"w-full bg-green-600 p-2 px-5 rounded-sm  text-white'
       onClick={()=>handleissueresolve(data)}>complete</button>
       
    </div>
  );
};

export default Complete;