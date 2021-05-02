import React, {useEffect, useState} from 'react';
import styles from "../redWines/style.module.css";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";
import WinePresent from "../../components/winePresent/WinePresent";
import Pagination from "../../components/pagination/Pagination";
import {baseURL} from "../../api/api";

const SparklingWines = ({match}) => {
    const {path} = match
    const [sparklingWine, setSparklingWine] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [winePerPage] = useState(20)


    //get  current wine
    const indexLastWine = currentPage * winePerPage
    const indexFirstWine = indexLastWine - winePerPage
    const currentWine = sparklingWine.slice(indexFirstWine, indexLastWine)

    //change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect
    (() => {
        setLoading(true)
        fetch(baseURL + path)
            .then(resp => resp.json())
            .then(data => {
                setSparklingWine(data)
                setLoading(false)
            });
        return ()=>setSparklingWine([])
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={styles.wrapper}>
            <Button/>
            {
                loading ? <Loader/> : currentWine.map((el) => {
                    return <WinePresent key={el.id} props={el}/>
                })
            }
            <Pagination winePerPage={winePerPage} totalWine={sparklingWine.length} paginate={paginate}/>
        </div>
    );
};

export default SparklingWines;