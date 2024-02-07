import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Card from "react-bootstrap/Card";

function FlagList(props) {
  const flagList = props.flag;

  return (
    <div>
      <div className="container">
        {flagList.map((flags, index) => (
          <div key={index} className="items">
            <div className="items">
              {" "}
              {flags.flag}
              <br />
            </div>
            <p>{flags.name.common}</p>
          </div>
        ))}
      </div>
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

// this is the second code before separating the the flag .map
