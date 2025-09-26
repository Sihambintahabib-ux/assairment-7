import React, { use } from 'react';

const CustomerTicket = ({ ticketpromise }) => {
    const usedata = use(ticketpromise)
    console.log(usedata);
    return (
        // var datas=usedata ()
        <div className='flex justify-between gap-5 | container m-auto '>


            <div className="container w-3/3 m-auto grid grid-cols-2 gap-5 ">
                {
                    usedata.map(data =>


                        <div >



                            <div className='container m-auto p-5 |  | border-2 border-transparent shadow-2xl rounded-2xl  h-full '>
                                <div className='flex gap-2 justify-between '>
                                    <div className='font-bold'> {data.title}</div>
                                    <div className={` p-1 rounded-md ${data.status == "Open" ? 'bg-green-300' : data.status == "In-Progress" ?
                                        'bg-yellow-200' : 'bg-blue-900'}`}>{data.status} </div>
                                </div>
                                <div className='my-5'>{data.description} </div>
                                <div className='flex justify-between '>
                                    <div className='flex justify-between  gap-2' >
                                        <div> {data.id} </div>
                                        <div

                                            className={` p-1.5 rounded-md ${data.priority == "High" ? 'bg-red-300'
                                                : data.priority == "Low" ?
                                                    'bg-green-300'

                                                    : 'bg-yellow-200'}`}



                                        >{data.priority} Priority </div>

                                    </div>
                                    <div className='flex justify-between  gap-2'>
                                        <div className='font-bold '> {data.customer} </div>
                                        <div> {data.createdAt}</div>

                                    </div>

                                </div>


                            </div>
                        </div>


                    )

                }


            </div>
            <div className=' w-1/3 '>
                <div className='sticky top-0   '>
                    <p className='mb-2 '>Lorem ipsum dolor sit amet.</p>
                    <button className='w-full bg-green-600 p-2 px-5 rounded-sm  text-white'>Complete</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerTicket;