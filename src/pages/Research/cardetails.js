import React, { useState } from "react";
import styles from "./Research.module.css";
import inteferenceNetwork from "../../assets/images/research-page/inteferenceNetwork.png";
function Carddetails(props) {
  const [open1, setopen1] = useState(false);
  const [open2, setopen2] = useState(false);
  const [stateabstract, setStateabstract] = useState(" ");
  const [statecite, setStateCite] = useState(" ");

  function handleToggle() {
    setStateabstract(props.abstract);
    setopen1(!open1);
  }

  function handleCiteToggle() {
    setopen2(!open2);
    setStateCite(props.cite);
  }

  return (
    <>
      <div className={`${styles["researchDetails"]}`}>
        <table id={`${styles["researchDetailsTable"]}`}>
          <tbody className={`${styles["main"]}`}>
            <tr data-aos="zoom-in-left" className={"aos-init"}>
              <td className={`${styles["imgCol"]}`}>
                <img
                  src={inteferenceNetwork}
                  className={`${styles["rImg"]}`}
                  alt="research"
                />
              </td>
              <td className={`${styles["researchTitleName"]}`}>
                <div></div>
                <a href="#0" className={`${styles["paperTitle"]}`}>
                  {" "}
                  A Batch Normalized Inference Network Keeps the KL Vanishing
                  Away{" "}
                </a>
                <div>
                  {" "}
                  Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and
                  Dapeng Wu{" "}
                </div>{" "}
                <div className={`${styles["rConferences"]}`}>
                  {" "}
                  The 58th Annual Meeting of the Association for Computational
                  Linguistics
                  <div className={`${styles["researchY"]}`}>2020</div>
                </div>
                {/* <!--CITE BUTTON--> */}
                <div className={"d-flex"} style={{ marginRight: "5%" }}>
                  <button
                    className={`${styles["button"]} ${styles["button-accent"]} ${styles["button-small"]} ${styles["text-right"]} ${styles["button-abstract"]} ${styles[""]}`}
                    type="button"
                    data-toggle={"collapse"}
                    data-target="#absPopup1"
                    aria-expanded="false"
                    aria-controls="absPopup1"
                    onClick={handleToggle}
                  >
                    ABSTRACT
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className={`${styles["button"]} ${styles["button-accent"]} ${styles["button-small"]} ${styles["text-right"]} ${styles["button-abstract"]} ${styles[""]}`}
                    type="button"
                    data-toggle={"collapse"}
                    data-target="#popup1"
                    aria-expanded="false"
                    aria-controls="popup1"
                    onClick={handleCiteToggle}
                  >
                    CITE
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div
                  aria-labelledby="headingTwo"
                  data-parent=".collapse"
                  className={"collapse"}
                >
                  <div className={`${styles["card-body"]}`}>
                    {open1 && <div>{stateabstract}</div>}
                    <br />
                    <br />
                  </div>
                </div>
                <div
                  id={"popup1"}
                  className={"collapse"}
                  aria-labelledby="headingTwo"
                  data-parent=".collapse"
                >
                  <div className={`${styles["card-body"]}`}>
                    {/* Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li
                          and Dapeng Wu. A Batch Normalized Inference Network
                          Keeps the KL Vanishing Away. The 58th Annual Meeting
                          of the Association for Computational Linguistics 2020. */}
                    {open2 && <div>{statecite}</div>}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Carddetails;
