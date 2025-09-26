import React from 'react';

const Card = () => {
    return (
        <div className=" ">
            <div className="container m-auto | flex justify-center items-center | text-center">

                <div className={` flex-1 p-28 m-8 rounded-2xl | bg-linear-to-t from-purple-500 via-purple-700 to-purple-700 `}>
                    <h2>in progess</h2>
                    <span>0</span>
                </div>
                <div className="flex-1 rounded-2xl bg-linear-to-r from-green-400 to-emerald-600  p-28 m-10 ">
                    <h2>resolve</h2>
                    <span>0</span>
                </div>
            </div>

        </div>
    );
};

export default Card;