import React, { useState } from 'react';
import './SortingArray.css';

function SortingArray(props){

    //var divs = [];
    const [divs = [], setdivs] = useState();
    var divHeightArray = [];

    for (var i=0; i < props.arraySize; i++){
        var divHeight = Math.floor(Math.random()*100)
        divHeightArray.push(divHeight);
        divs.push(<div className="div" style={{width: (100/props.arraySize - 0.4)+ "vw" , height: (0.6*divHeight) + "vh"}}>
        <p1></p1>
        </div>) 
        
       
    }

    const BubbleSort = () =>{
        var unsorted = true;
        var x = props.arraySize - 1;
        while (unsorted === true){
            unsorted = false
            for (var i=0; i < x; i++){
                if (divHeightArray[i] > divHeightArray[i+1]){
                    unsorted = true
                    var temp = divHeightArray[i]
                    var divstemp = setdivs[i]
                    divHeightArray[i] = divHeightArray[i+1]
                    setdivs[i] = setdivs[i+1]
                    divHeightArray[i+1] = temp
                    setdivs[i+1] = divstemp
                    console.log(divHeightArray);
                }
                //console.log(unsorted);   
            }
            //unsorted = false
        }
    }

    return(
        <div>
            <button onClick={BubbleSort}>Bubble Sort</button>  
            <div className="divbar">{divs}</div>
        </div>
    )

    
}

export default SortingArray;