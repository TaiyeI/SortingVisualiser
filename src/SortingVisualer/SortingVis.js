import React, {useState} from 'react';
import SortingArray from './SortingArray'
 
function SortingVis(){

    const sortSpeed = 1;

    const [arraySize, setarraySize] = useState(5);
    

    const RandomArray = () =>{
        setarraySize(5 + Math.floor(Math.random()*100));
        console.log(arraySize);
    }
    

    return(
        <div>
            <h2>Sorting Visualiser</h2>
            <p1>Words describing the project</p1>
            <button onClick={RandomArray}>Generate Random Array</button>
            <button>Sort Array</button>
            <form>
                <label for='Asize'>Array Size</label>
                <input type="text" id="Asize" name = "Asize"></input>
            </form>
            

            


            <SortingArray arraySize = {arraySize}/>

        </div>
    );

   
}

export default SortingVis;