import React from 'react';
import {Link} from "react-router-dom";
import styles from './style.module.css'

const Header = () => {
    return (<div className={styles.body} >
            <span className={styles.span1}><span className={styles.span2}></span></span>
            <div className={styles.wrap}>
                <Link className={styles.a} to='/reds'>
                    <div></div>
                </Link>
                <Link className={styles.a} to='/whites'>
                    <div></div>
                </Link>
                <Link className={styles.a} to='/sparkling'>
                    <div></div>
                </Link>
                <Link className={styles.a} to='/rose'>
                    <div></div>
                </Link>
                <div className={styles.a}>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Header;