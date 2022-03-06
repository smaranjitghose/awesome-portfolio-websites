import React from "react";
// import styles from "./Research.module.css";
// import inteferenceNetwork from "../../assets/images/research-page/inteferenceNetwork.png";
// import crossLingual from "../../assets/images/research-page/crossLingual.png";
// import wordRepresentation from "../../assets/images/research-page/wordRepresentation.png";
// import dialogueState from "../../assets/images/research-page/dialogueState.png";
// import semanticSegmentation from "../../assets/images/research-page/semanticSegmentation.png";
// import deepNetwork from "../../assets/images/research-page/deepNetwork.png";
// import imageDecomposition from "../../assets/images/research-page/imageDecomposition.png";
// import neuralNetworks from "../../assets/images/research-page/neuralNetworks.jpg";
// import { Helmet } from "react-helmet";
//import Carddetails from "./cardetails";
// import { propTypes } from "react-bootstrap/esm/Image";
//import Research from "./Research";
import Carddetails from "./cardetails";

function Card(props) {
  return (
    <>
      {props.items.map((item) => (
        <Carddetails
          key={item.id}
          abstract={item.abstract_data}
          cite={item.cite_data}
        />
      ))}
    </>
  );
}
export default Card;
