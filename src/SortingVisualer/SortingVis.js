import React, {useState} from 'react';
import SortingArray from './SortingArray'
 
function SortingVis(){

    const sortSpeed = 1;
    const [DataArray, SetDataArray] = useState([]);
    var arraySize = 5
    
    //var divs = [];

    

    const RandomArray = () =>{
        arraySize = 2 + Math.floor(Math.random()*100);
        CreateArray()
    }
    
    const arraychange = (num) =>{
        if (num > 2 && num < 100){
            arraySize = num;
            CreateArray()
        }
    }

    const CreateArray = () =>{
        var tempy = [];
        for (var i=0; i < arraySize; i++){  
            var divHeight = 1 + Math.floor(Math.random()*99);
            tempy.push(divHeight);
        }
        SetDataArray(tempy)
    }

    const WaitTime = (delay) =>{
        return new Promise(resolve => { 
            setTimeout(() => { 
                resolve(); 
            }, delay); 
        });
    }
    

    const BubbleSort = async() =>{
        var unsorted = true;
        var x = DataArray.length - 1;
        while (unsorted === true){
            unsorted = false;
            for (var i=0; i < x; i++){
                if (DataArray[i] > DataArray[i+1]){
                    unsorted = true;
                    var tempy2 = DataArray;
                    var temp = tempy2[i];
                    tempy2[i] = tempy2[i+1];
                    tempy2[i+1] = temp;
                    //console.log(DataArray);
                    console.log(tempy2);
                    SetDataArray(Array.from(tempy2));
                    await WaitTime(1000);
                    //SetDataArray()
                }
                //console.log(unsorted);   
            }        
            //unsorted = false
        }
    }



    return(
        <div>
            <h2>Sorting Visualiser</h2>
            <p1>Words describing the project</p1>
            <button onClick={RandomArray}>Generate Random Array</button>
            <label>Array Size</label>
            <input type="text" onChange={e => {arraychange(e.target.value)}}></input>
            <button onClick={BubbleSort}>Bubble Sort</button>  

            <SortingArray arraySize={arraySize} DataArray={DataArray}/>

        </div>
    );

   
}

export default SortingVis;