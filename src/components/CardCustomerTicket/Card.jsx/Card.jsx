// import { use } from "react";

// const Card = ({ ticketpromise, data, issue, issueresolve }) => {
//   // const cardData = use(ticketpromise)
//   // const cardData = data
//   // console.log(cardData, ' hi filter');

//   // var open = cardData?.filter((element) => element.status == "Open");
//   var open = data?.filter((element) => element.status == "Open");
//   var inProgress = data?.filter((element) => element.status == "In-Progress");
//   // var inProgress = cardData?.filter((element) => element.status == "In-Progress");
//   // console.log({ inProgress, open, });

// //   let inProgresslength = inProgress.length;
// //   let openlength = open.length;
//   console.log(issue.length);
//   // console.log(inProgresslength, openlength);
//   return (
//     <div className="  ">
//       <div className="container m-auto text-white | flex justify-center items-center md:flex-row flex-col  | text-center">
//         <div
//           className={` flex-1 p-28 m-8 rounded-2xl |  `}
//           style={{
//             background:
//               " url('/vector1.png'), linear-gradient(#7003ff, #a260f7)",
//           }}
//         >
//           {/* ==================================================================================================== */}





//           {/* ==================================================================================================== */}
//           <h2 className="text-4xl font-bold mb-2">In progess</h2>
//           <p className="text-2xl font-bold mb-2">
//             {" "}
//             {/* {inProgresslength}  */}
//             {issue.length}
//           </p>
//           {/* ==================================================================================================== */}




//           {/* ==================================================================================================== */}{" "}
//         </div>
//         <div className="flex-1 rounded-2xl bg-linear-to-r from-green-400 to-emerald-600  p-28 m-10 ">
//           <h2 className="text-4xl font-bold mb-2">Resolve</h2>
//           <span className="text-2xl font-bold mb-2">
//             {" "}
//             {/* {openlength} */}
//             {issueresolve.length}{" "}
//           </span>
//           <p className="font-semibold text-[26px]"></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;







// import { use } from "react";

const Card = ({  issue, issueresolve }) => {
//   var open = data?.filter((element) => element.status == "Open");
//   var inProgress = data?.filter((element) => element.status == "In-Progress");

  console.log(issue.length);

  return (
    <div className="">
      <div className="container m-auto text-white flex justify-center items-center md:flex-row flex-col text-center gap-8 p-8">
        {/* In Progress Card */}
        <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
          {/* Left vector - normal */}
          <img
            src="/vector1.png"
            alt=""
            className="absolute left-0 top-0 h-full w-auto object-contain pointer-events-none z-10"
          />

          {/* Right vector - flipped */}
          <img
            src="/vector1.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto object-contain scale-x-[-1] pointer-events-none z-10"
          />

          {/* Gradient background */}
          <div
            className="absolute inset-0 "
            style={{
              background: "linear-gradient(#7003ff, #a260f7)",
            }}
          />

          {/* Content */}
          <div className="relative  py-28 px-8 z-10">
            <h2 className="text-4xl font-bold mb-2">In Progress</h2>
            <p className="text-2xl font-bold mb-2">{issue.length}</p>
          </div>
        </div>

        {/* Resolved Card */}
        <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
          {/* Left vector - normal */}
          <img
            src="/vector1.png"
            alt=""
            className="absolute left-0 top-0 h-full w-auto object-contain pointer-events-none z-10 "
          />

          {/* Right vector - flipped (or use vector2.png if different) */}
          <img
            src="/vector1.png"
            alt=""
            className="absolute right-0 top-0 h-full w-auto object-contain scale-x-[-1] pointer-events-none z-10 "
          />

          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600" />

          {/* Content */}
          <div className="relative z-10 py-28 px-8">
            <h2 className="text-4xl font-bold mb-2">Resolved</h2>
            <p className="text-2xl font-bold mb-2">{issueresolve.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
