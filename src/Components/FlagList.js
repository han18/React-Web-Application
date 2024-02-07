import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Card from "react-bootstrap/Card";

function FlagList(props) {
  const flagList = props.flag;

  return (
    <div className="container">
      {flagList.map((flags, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <div className="d-flex justify-content-center align-items-center">
              <div className="mr-1">{flags.flag}</div>
              <p className="mb-">{flags.name.common}</p>
            </div>
          </Card.Body>
        </Card>
      ))}
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
