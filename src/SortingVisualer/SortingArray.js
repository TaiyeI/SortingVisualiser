import React from 'react';
import './SortingArray.css';

function SortingArray(props){

    const CreateDivs = () => {
        const temm = [];
        for (var i=0; i < props.DataArray.length; i++){
            temm.push(<div className="div" style={{width: (100/props.DataArray.length - 0.4)+ "vw" , height: (0.6*props.DataArray[i]) + "vh"}}></div>);

        }

        return temm;
    }

    console.log(props.DataArray);
    return(
        <div>
            <div className="divbar">{CreateDivs()}</div>
        </div>
    )

    
}

export default SortingArray;