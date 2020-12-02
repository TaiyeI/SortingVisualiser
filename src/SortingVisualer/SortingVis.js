import React, {useState} from 'react';
import SortingArray from './SortingArray'
import './SortingVis.css'
 
function SortingVis(){

    const sortSpeed = 1;
    const [DataArray, SetDataArray] = useState([]);
    const [checkcolour, setcheckcolour] = useState([]);
    const [sortedColour, setsortedColour] = useState([]);
    const [currentAlgorithm, setCurrentAlgorithm] = useState('BubbleSort')
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
    
    const ChangeAlgorithm = (newalgo) => {
        setCurrentAlgorithm(newalgo)
      
    }
    const RunAlgorithm = () => {
        if (currentAlgorithm === "0"){
            BubbleSort()
        }
        else{
            console.log(currentAlgorithm);
        }

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
                console.log(setcheckcolour);
                await WaitTime(100);
                if (DataArray[i] > DataArray[i+1]){
                    unsorted = true;
                    var tempDataArray = DataArray;
                    var swaptemp = tempDataArray[i];
                    tempDataArray[i] = tempDataArray[i+1];
                    tempDataArray[i+1] = swaptemp;
                    //console.log(DataArray);
                    //console.log(tempDataArray);
                    SetDataArray(Array.from(tempDataArray));
                    await WaitTime(100);
                } 
            }        
        }
        //setsortedColour(Array.from(DataArray));
    }



    return(
        <div>
            <div className="OptionsMenu">
                    <div>
                        <h2>Sorting Visualiser</h2>
                        <p>Words describing the project</p>
                    </div>
                    <div className="Interactables">
                        <button onClick={RunAlgorithm}>Start</button>  
                        <label>Algorithms:</label>
                        <select onChange={(event) => ChangeAlgorithm(event.target.value)} 
                                value = {currentAlgorithm}>
                            <option value="0">BubbleSort</option>
                            <option value="1">MergeSort</option>
                            <option value="2">QuickSort</option>
                            <option value="3">InsertionSort</option>
                        </select>
                        <label>Array Size</label>
                        <input type="text" onChange={e => {arraychange(e.target.value)}}></input>
                        <button onClick={RandomArray}>Generate Random Array</button>
                    </div>
            </div>
            <SortingArray  DataArray={DataArray}  checkcolour={checkcolour} sortedColour={sortedColour}/>

        </div>
    );

   
}

export default SortingVis;