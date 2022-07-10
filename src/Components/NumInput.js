import Expand from './Animations/Expand';
import { useState } from 'react';

const NumInput = ({setWordLength, setValid }) => {


    return ( 
        <div className="align-horizontal">
            <p className="bold-text" id="length-label">ENTER WORD LENGTH: </p>
            <Expand scale="1.1">
                <div className="num-input">
                    <input type="number" id="input" 
                    onChange={(e) => {
                        if (e.target.value <= 12 && e.target.value > 0) {
                            setValid(true);
                            setWordLength(parseInt(e.target.value));
                        } else {
                            setValid(false);
                        }
                        }}/>
                </div>
            </Expand>
        </div>        
     );
}
 
export default NumInput;