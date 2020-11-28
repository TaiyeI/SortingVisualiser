import React from 'react';
import './SortingArray.css';

function SortingArray(props){

    var divs = [];
   

    for (var i=0; i < props.arraySize; i++){
       divs.push(<div className="div" style={{width: (100/props.arraySize)+ "vw"}}>
        <p1>Hey</p1>
        </div>) 
       
    }
    return(
        <div className="divbar">{divs}</div>
)

    
}

export default SortingArray;