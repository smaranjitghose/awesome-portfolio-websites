import styles from "./../../styles/EduCard.module.css";

function EduCard(props) {
  return (
    <div className={styles.card}>
      <img className={styles.SVG} src="assets/education-page/education.png" />

      <div className={styles.mainHead}>
        <h4>{props.qual}</h4>
        <h6 className={styles.basicInfo}>
          <em>
            {props.institute}
            <br />
            {props.cls}
            <br />
            {props.batch}
          </em>
        </h6>
        <p>
          <i>Activities-</i> {props.activities}
        </p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default EduCard;
