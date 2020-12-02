import React from 'react';
import './SortingArray.css';

function SortingArray(props){

    const CreateDivs = () => {
        const divarray = [];
        for (var i=0; i < props.DataArray.length; i++){
            if (props.sortedColour.includes(props.DataArray)){
                divarray.push(<div className="div" style={{width: (100/props.DataArray.length - 0.4)+ "vw" , height: (0.6*props.DataArray[i]) + "vh", backgroundColor: "green"}}></div>);
            }
            else if (props.checkcolour.includes(props.DataArray[i])){
                divarray.push(<div className="div" style={{width: (100/props.DataArray.length - 0.4)+ "vw" , height: (0.6*props.DataArray[i]) + "vh", backgroundColor: "purple"}}></div>);
            }
            else{
                divarray.push(<div className="div" style={{width: (100/props.DataArray.length - 0.4)+ "vw" , height: (0.6*props.DataArray[i]) + "vh", backgroundColor: "blue"}}></div>);
            }    
        }

        return divarray;
    }

    //console.log(props.DataArray);
    return(
        <div className="divbar">{CreateDivs()}</div>
    )

    
}

export default SortingArray;