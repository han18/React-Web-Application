import React from "react";

function FlagList(props) {
  const flagList = props.flags;



  return <div>
      <h1>FlagList</h1>
      <div> 
            {flagList.map((flag, index) => (
                  <div key={index}>
             </div>
            )}
      </div>
  </div>;
}

export default FlagList;