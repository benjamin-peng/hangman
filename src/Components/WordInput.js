import { useState, useEffect } from 'react';

import Expand from './Animations/Expand';

const WordInput = ({ letter, index, setTemp, temp, input }) => {

    const [val, setVal] = useState('');
    const [disabled, setDisabled] = useState(false); //disables input

    useEffect(() => {
        if (input[index] != null) {
            setVal(input[index]);
            setDisabled(true);
        }
    }, [input]);

    const change = (e) => {
        if (e.target.value == '') {
            setVal('');
            var tempClone = [...temp];
            tempClone[index] = null;
            setTemp(tempClone);
        }
        else {
            setVal(letter);
            var tempClone = [...temp];
            tempClone[index] = letter;
            setTemp(tempClone);
        }
    };

    return (
        <Expand scale={1.2}>
            <div className="word-input">
                <input type="text" maxLength={1} id="input" 
                onChange={change} value={val} disabled={disabled}>
                </input>
            </div>
        </Expand>
    );
}
 
export default WordInput;