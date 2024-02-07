import React from "react";

function FlagList(props) {
  const flagList = props.flag;

  return (
    <div>
      <div className="container">
        {flagList.map((flags, index) => (
          <div key={index} className="items">
            {flags.flag}
          </div>
        ))}
      </div>
      console.log(flagList);
    </div>
  );
}

export default FlagList;

//     <div>
//       <h1>FlagList</h1>
//       <div>
//         <div>
//           {flagList.map((flag, index) => (
//             <div key={index} className="items">
//               {flag.name.common}
//               <h>{console.log(`flaglist ${flagList}`)}</h>
//             </div>
//           ))}
//         </div>
//         console.log(flagList);
//       </div>
//     </div>
