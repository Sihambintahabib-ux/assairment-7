import { use } from "react";

const Card = ({ ticketpromise, data, issue, issueresolve }) => {
  // const cardData = use(ticketpromise)
  // const cardData = data
  // console.log(cardData, ' hi filter');

  // var open = cardData?.filter((element) => element.status == "Open");
  var open = data?.filter((element) => element.status == "Open");
  var inProgress = data?.filter((element) => element.status == "In-Progress");
  // var inProgress = cardData?.filter((element) => element.status == "In-Progress");
  // console.log({ inProgress, open, });

//   let inProgresslength = inProgress.length;
//   let openlength = open.length;
  console.log(issue.length);
  // console.log(inProgresslength, openlength);
  return (
    <div className="  ">
      <div className="container m-auto text-white | flex justify-center items-center md:flex-row flex-col  | text-center">
        <div
          className={` flex-1 p-28 m-8 rounded-2xl | bg-linear-to-t from-purple-500 via-purple-700 to-purple-700   bg-[url('/vector2')] `}
        >
          <h2 className="text-4xl font-bold mb-2">In progess</h2>
          <p className="text-2xl font-bold mb-2">
            {" "}
            {/* {inProgresslength}  */}
            {issue.length}
          </p>
        </div>
        <div className="flex-1 rounded-2xl bg-linear-to-r from-green-400 to-emerald-600  p-28 m-10 ">
          <h2 className="text-4xl font-bold mb-2">Resolve</h2>
          <span className="text-2xl font-bold mb-2">
            {" "}
            {/* {openlength} */}
            {issueresolve.length}{" "}
          </span>
          <p className="font-semibold text-[26px]"></p>
        </div>
      </div>
    </div>
  );
};

export default Card;




