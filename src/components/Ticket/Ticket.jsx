const Tickets = ({ data, ticketclick }) => {
  // console.log(data, " fajdhfkj");

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  // console.log(data, "received data");
  //  onClick={() => {
  //             ticketclick(data);  }}

  return (
    <div
      className=" "
      key={data.id}
       onClick={() => {
                  ticketclick(data);  }}
    >
      <div className="container m-auto p-5 |  | border-2 border-transparent shadow-2xl rounded-2xl  h-full ">
        <div className="flex gap-2 justify-between ">
          <div className="font-bold"> {data.title}</div>
          <div
            className={` p-1 rounded-md ${
              data.status == "Open"
                ? "bg-green-300"
                : data.status == "In-Progress"
                ? "bg-yellow-200"
                : "bg-blue-900"
            }`}
          >
            {data.status}{" "}
          </div>
        </div>
        <div className="my-5">{data.description} </div>
        <div className="flex justify-between items-end   ">
          <div className="flex justify-between  items-end gap-2">
            <div className="font-bold "> {data.id} </div>
            <div
              className={` 
                                                p-1.5 rounded-md ${
                                                  data.priority == "High"
                                                    ? "bg-red-300"
                                                    : data.priority == "Low"
                                                    ? "bg-green-300"
                                                    : "bg-yellow-200"
                                                }`}
            >
              {data.priority} Priority{" "}
            </div>
          </div>
          <div className="flex justify-between  gap-2">
            <div className="font-bold "> {data.customer} </div>
            <div> {data.createdAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
