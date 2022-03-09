import React, { useState } from "react";
import styles from "./Research.module.css";
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
                  src={props.image}
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
               
                <div className={"d-flex"} style={{ marginRight: "5%" }}>
                  <button
                    className={`${styles["button"]} ${styles["button-accent"]} ${styles["button-small"]} ${styles["text-right"]} ${styles["button-abstract"]} ${styles[""]}`}
                    type="button"
                    onClick={handleToggle}
                  >
                    ABSTRACT
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className={`${styles["button"]} ${styles["button-accent"]} ${styles["button-small"]} ${styles["text-right"]} ${styles["button-abstract"]} ${styles[""]}`}
                    type="button"
                    onClick={handleCiteToggle}
                  >
                    CITE
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div
                 
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
                  className={"collapse"}>
                  <div className={`${styles["card-body"]}`}>
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
