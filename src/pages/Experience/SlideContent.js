import styles from './Experience.module.css';
import {Link} from 'react-router-dom';
const SlideContent = ({title, img, badge,content})=>{
    return (
        <div className={styles["slide"]}>
            <div className={styles["info"]}>
                <div className={styles['blog-slider__img']}>
                    <img src={img} alt="hackathon" />
                </div>
                <div className={styles["card-content"]}>
                    <h3 style={{fontSize:"25px"}}>{title}</h3>
                    <h4 style={{color:"grey", fontSize:"20px"}}>{badge}</h4>
                    <p>{content}.</p>
                    <Link to="/experience" className={styles["blog-slider__button"]}>Read More</Link>
                </div>
            </div>
        </div>
    )
}
export default SlideContent;
