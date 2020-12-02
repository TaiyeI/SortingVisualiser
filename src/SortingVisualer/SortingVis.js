import React, {useState} from 'react';
import SortingArray from './SortingArray'
 
function SortingVis(){

    const sortSpeed = 1;
    const [DataArray, SetDataArray] = useState([]);
    const [checkcolour, setcheckcolour] = useState([]);
    var arraySize = 5
    

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
                var colourtemp = [];
                colourtemp.push(DataArray[i], DataArray[i+1])
                setcheckcolour(Array.from(colourtemp));
                await WaitTime(100);
                if (DataArray[i] > DataArray[i+1]){
                    unsorted = true;
                    //colour them
                    //wait
                    var tempDataArray = DataArray;
                    var swaptemp = tempDataArray[i];
                    tempDataArray[i] = tempDataArray[i+1];
                    tempDataArray[i+1] = swaptemp;
                    //console.log(DataArray);
                    console.log(tempDataArray);
                    SetDataArray(Array.from(tempDataArray));
                    await WaitTime(100);
                    //discolour them
                    setcheckcolour([]);
                } 
            }        
        }
        //var sortedColour = []
    }



    return(
        <div>
            <h2>Sorting Visualiser</h2>
            <p1>Words describing the project</p1>
            <button onClick={RandomArray}>Generate Random Array</button>
            <label>Array Size</label>
            <input type="text" onChange={e => {arraychange(e.target.value)}}></input>
            <button onClick={BubbleSort}>Bubble Sort</button>  

            <SortingArray  DataArray={DataArray}  checkcolour={checkcolour}/>

        </div>
    );

   
}

export default SortingVis;