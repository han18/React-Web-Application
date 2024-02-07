// import "../style.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FlagList(props) {
  const flagList = props.flag;

  return (
    <div className="container">
      {flagList.map((country, index) => (
        <div class="container py-5">
          <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h1 class="card-text">{country.flag}</h1>
                  <h5 class="card-title">{country.name.common}</h5>
                </div>
                <div class="mb-5 d-flex justify-content-around">
                  <h3>Population: {country.population}</h3>
                  <br></br>
                  <button class="btn btn-primary">More Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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

// this is the second code before separating the the flag .map

// return (
//       <div>
//         <div className="container">
//           {flagList.map((flags, index) => (
//             <div key={index} className="items">
//               <div className="items">
//                 {" "}
//                 {flags.flag}
//                 <br />
//               </div>
//               <p>{flags.name.common}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
