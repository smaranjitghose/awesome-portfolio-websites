import React from "react";
const imageTemplate = (prop) => {
  return (
    <div>
      <img style={{ paddingTop: "12vh" }} src={prop.image} alt="" />
    </div>
  );
};

export default imageTemplate;
