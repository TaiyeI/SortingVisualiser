import React, {useState} from 'react';
import SortingArray from './SortingArray'
 
function SortingVis(){

    const sortSpeed = 1;
    //var num;

    const [arraySize, setarraySize] = useState();
    

    const RandomArray = () =>{
        setarraySize(2 + Math.floor(Math.random()*100));
        console.log(arraySize);
    }
    
    const arraychange = (num) =>{
        if (num > 2 && num < 100){
            setarraySize(num);
        }
        else{
            setarraySize(arraySize);
        }
    }

    



    return(
        <div>
            <h2>Sorting Visualiser</h2>
            <p1>Words describing the project</p1>
            <button onClick={RandomArray}>Generate Random Array</button>
            <label>Array Size</label>
            <input type="text" onChange={e => {arraychange(e.target.value)}}></input>

            

            


            <SortingArray arraySize = {arraySize}/>

        </div>
    );

   
}

export default SortingVis;