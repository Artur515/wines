import React from 'react';
import style from './style.module.css'
import {useHistory} from "react-router-dom";

const Button = ({props}) => {
    const history = useHistory()


    const handleClick = () => {
        history.push('./')
    }


    return (
        <div className={style.btnWrap}>
            <button onClick={handleClick} className={style.button}>All wines</button>
        </div>
    );
};

export default Button;