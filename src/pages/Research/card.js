import React from "react";
import Carddetails from "./cardetails";

function Card(props) {
  return (
    <>
      {props.items.map((item) => (
        <Carddetails
          key={item.id}
          abstract={item.abstract_data}
          cite={item.cite_data}
          image={item.src}
        />
      ))}
    </>
  );
}
export default Card;
