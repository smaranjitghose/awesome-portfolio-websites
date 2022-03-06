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
                    <h3 className={styles["blog-slider__title"]} >{title}</h3>
                    <h4  className={styles["blog-slider__code"]} >{badge}</h4>
                    <p className={styles["blog-slider__text"]}>{content}.</p>
                    <Link to="/experience" className={styles["blog-slider__button"]}>Read More</Link>
                </div>
            </div>
        </div>
    )
}
export default SlideContent;
