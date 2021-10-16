import React from 'react';
import styles from './HamburgerButton.module.css'

const HamburgerButton = (props) => {
    return(
        <div onClick = {props.onClick} className={`${styles.hamburger} ${props.activated ? styles['is-active'] : ''}`} id={styles.hamburger}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
    )
}

export default HamburgerButton