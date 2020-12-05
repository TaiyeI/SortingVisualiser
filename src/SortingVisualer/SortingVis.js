import React, {useState} from 'react';
import SortingArray from './SortingArray'
import './SortingVis.css'
 
function SortingVis(){

    const sortSpeed = 100 - x;
    const [DataArray, SetDataArray] = useState([50, 20, 11, 70]);
    const [checkcolour, setcheckcolour] = useState([]);
    const [sortedColour, setsortedColour] = useState([]);
    const [currentAlgorithm, setCurrentAlgorithm] = useState('0')
    var arraySize = 5
    var x;
    
    

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
        if (currentAlgorithm == "0"){
            BubbleSort()
        }
        if (currentAlgorithm == "1"){
            MergeSort()
        }
        if (currentAlgorithm == "2"){
            QuickSort()
        }
        if (currentAlgorithm == "3"){
            InsertionSort()
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
                setcheckcolour([i, i+1]);
                await WaitTime(100);
                if (DataArray[i] > DataArray[i+1]){
                    unsorted = true;
                    var tempDataArray = DataArray;
                    var swaptemp = tempDataArray[i];
                    tempDataArray[i] = tempDataArray[i+1];
                    tempDataArray[i+1] = swaptemp;;
                    SetDataArray(Array.from(tempDataArray));
                    //await WaitTime(100);
                    
                }
                await WaitTime(300); 
                //setsortedColour([]);
                
            }        
        }
        setcheckcolour([]);
        setsortedColour(Array.from(DataArray));
        await WaitTime(1000);
        setsortedColour([]);
    }

    const MergeSort = async() =>{
        
    }

    /*const MergeSort = async(DataArray) =>{
        var result = []
        if (DataArray.length < 2){
            return DataArray
        }
        var mid = math.floor(DataArray.length /2)
        y = MergeSort(DataArray[:mid])
        z = MergeSort(DataArray[:mid])
        l = 0
        j = 0
        while (l < y.length && j < z.length){
            if y[l]>z[j]{
                result.push(z[j])
                j += 1
            }
            else{
                result.push(y[l])
                l += 1
            }
        }
        result += y[l:]
        result += z[j:]
        return result
        results = MergeSort(DataArray)
        return results

        
    }*/

    const InsertionSort = async() =>{
        var x = DataArray.length
        var tempcolour = [];
        for (var i=0; i < x; i++){
            var tempDataArray = DataArray;
            var current = tempDataArray[i];
            while  (i>0 && tempDataArray[i-1] > current){
                tempDataArray[i] = tempDataArray[i-1];
                i = i-1;
            }
            tempDataArray[i] = current;
            tempcolour.push(i)
            SetDataArray(Array.from(tempDataArray)); 
            await WaitTime(100);
            setcheckcolour(Array.from(tempcolour));
        }
        await WaitTime(100);
        setcheckcolour([]);
        setsortedColour(Array.from(DataArray));
        await WaitTime(1000);
        setsortedColour([]);
    }

    const QuickSort = async() =>{
        
    }
    /*def partition(array, begin, end):
    pivot = begin
    for i in xrange(begin+1, end+1):
        if array[i] <= array[begin]:
            pivot += 1
            array[i], array[pivot] = array[pivot], array[i]
    array[pivot], array[begin] = array[begin], array[pivot]
    return pivot



def quicksort(array, begin=0, end=None):
    if end is None:
        end = len(array) - 1
    def _quicksort(array, begin, end):
        if begin >= end:
            return
        pivot = partition(array, begin, end)
        _quicksort(array, begin, pivot-1)
        _quicksort(array, pivot+1, end)
    return _quicksort(array, begin, end)
    */

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
                        </select>s
                        <label>Array Size</label>
                        <input type="text" onChange={e => {arraychange(e.target.value)}}></input>
                        <button onClick={RandomArray}>Generate Random Array</button>
                        <label>Sorting speed</label>
                    </div>
                    <div className="slidecontainer">
                        <input type="range" min="1" max="100" value="50" className="slider"></input>
                    </div>
                    
            </div>
            <SortingArray  DataArray={DataArray}  checkcolour={checkcolour} sortedColour={sortedColour}/>

        </div>
    );

   
}

export default SortingVis;