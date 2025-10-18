import { use, useState } from "react";
import Tickets from "../Ticket/Ticket";
import Card from "./Card.jsx/Card";
import Complete from "../Complete/Complete";
import Incomplete from "../Incomplete/Incomplete";
import { toast } from "react-toastify";

const CustomerTicket = ({ ticketpromise }) => {
  var usedatas = use(ticketpromise);
  // console.log(usedatas);
  const [datas, setdatas] = useState(usedatas);
  // complete btn action
  const [issue, setissue] = useState([]);
  const [issueresolve, setissueresolve] = useState([]);

  // console.log(datas);

  let ticketclick = (data) => {
    toast("In progess");
    // console.log(data);
    //  find the similar data
    // const currentData = datas.find((elem) => elem.id == data.id);
    const currentData = issue.find((elem) => elem.id == data.id);
    console.log(currentData);

    if (currentData) {
      // alert("data is included");
          toast.error("data is included");

      return;
    }

    // if (currentData.status == "In-Progress") {
    //   currentData.status = "Open";
    // } else if (currentData.status == "Open") {
    //   currentData.status = "In-Progress";
    // }
    // delete the dublicate data
    const restData = datas.filter((elem) => elem.id != data.id);
    console.log(restData);

    // push data using spread operator
    var newissue = [...issue, data];
    setissue(newissue);
  };
  // console.log(issue);

  let handleissueresolve = (data) => {
console.log(data);
          toast.success("Resolve Issue");

const newissueresolve = [...issueresolve, data];
setissueresolve(newissueresolve);

    const remaining = issue.filter((elem) => elem.id !== data.id);
setissue(remaining);
    const remainingdata = datas.filter((elem) => elem.id !== data.id);
setdatas(remainingdata);


  };
  return (
    <div className=" ">
      <Card
        ticketpromise={ticketpromise}
        data={datas}
        issue={issue}
        issueresolve={issueresolve}
      ></Card>

      <div className="flex flex-col-reverse md:flex-row justify-between gap-5 | container mx-auto  ">
        <div className="container w-3/3 m-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {datas?.map((data) => (
            <Tickets
              data={data}
              ticketclick={ticketclick}
              key={data.id}
            ></Tickets>
          ))}

          {/* <div className=' hidden '>
                        { 
                        datas && 
                            <Card cardData={datas}></Card>
                            
                            }
                    </div> */}
        </div>
        {/* ticket issue complete button  */}

        <div className=" w-full md:w-1/3  | space-y-9 flex  flex-col ">
          {/* In-progress Issue */}
          <div className="  space-y-5 p-5 shadow-2xl ">
            <h1 className="font-bold text-2xl ">In-progress Issue</h1>
            <div className="mb-2 ">
              {issue.map((data) => (
                <Complete
                  key={data.id}
                  data={data}
                  handleissueresolve={handleissueresolve}
                ></Complete>
              ))}
            </div>{" "}
            {/* <button className="w-full bg-green-600 p-2 px-5 rounded-sm  text-white">
              Complete
            </button> */}
          </div>
          {/* sticky top-0 */}
          {/* Rwsolve Issue */}
          <div className=" space-y-5 p-5 shadow-2xl ">
            <h1 className="font-bold text-2xl ">Rwsolve Issue</h1>
            <div className="mb-2 ">
              {issueresolve.map((data) => (
                <Incomplete key={data.id} data={data}></Incomplete>
              ))}
            </div>
            {/* <button className="w-full bg-green-600 p-2 px-5 rounded-sm  text-white">
              inComplete
            </button> */}
          </div>
        </div>
        {/* ======== */}
      </div>
    </div>
  );
};

export default CustomerTicket;
