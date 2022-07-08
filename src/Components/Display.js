import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import { ReactComponent as Gallows } from '../Images/gallows.svg';
import NumInput from './NumInput';
import SubmitButton from './SubmitButton';
import Expand from './Animations/Expand';
import Fade from './Animations/Fade';

const Display = () => {
    
    const [valid, setValid] = useState(true);
    const [wordLength, setWordLength] = useState(true);

    const submitLength = (length) => {
        //if (length > f)
    };

    return (  
        <Fade wait={1000} direction="in">
        <div className="display">
            
                <Gallows id="gallows"></Gallows>
                <NumInput></NumInput>
                <Expand>
                    <SubmitButton></SubmitButton>
                </Expand>
            
        </div>
        </Fade>

    );
}
 
export default Display;