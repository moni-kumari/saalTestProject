import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import {ThemeContext} from '../../context/themeContext'

const TabList =()=> {
    // const themeContext = useContext(ThemeContext);
    // console.log("themess",themeContext);


    
    const data = useContext(AppContext);
    const [currentData, setCurrentData] = useState(1);
    const [dataPerPage] = useState(1);

    const pageNumber =[];
    const handleNext=()=>{
        setCurrentData(currentData +1)
    }
    const handlePrev=()=>{
        setCurrentData(currentData -1)
    }
    const handleReset=()=>{
        setCurrentData(1)
    }
    const paginate=(number)=>{
        setCurrentData(number)
    }
 const indexOfLastData = currentData * dataPerPage;
 const indexOfFirstData = indexOfLastData - dataPerPage;
 const currentdataList = data && data.results.slice(indexOfFirstData, indexOfLastData);
 const totalData = data && data.results.length;
 for(let i=1; i<= Math.ceil(totalData / dataPerPage); i++){
     pageNumber.push(i);
 }
return (
<div>
    <div className="tab-contaner">
        <button disabled={currentData === pageNumber[0] ? true: false} onClick={handleReset}>Reset</button>
        <button disabled={currentData === pageNumber[0] ? true: false} onClick={handlePrev}>Prev</button>
        {pageNumber.map(number=>{
            return(<button onClick={()=>paginate(number)} key="1">{number}</button>)
        })}
        <button disabled={currentData === pageNumber[pageNumber.length-1] ? true: false} onClick={handleNext}>Next</button>
    </div>
   
    <div className="tab-content">
    {currentdataList && currentdataList.map((dataContent, index)=>{
        return(
            <div className="employee-detail" key={index}>
                <h1>{dataContent.name.title} {dataContent.name.first} {dataContent.name.last}</h1>
                <h2>{dataContent.email}</h2>
            </div>
        )
    })}
    </div>
    </div>

)
}

export default TabList;