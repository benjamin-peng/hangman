import { useState, Fragment } from 'react';
import { ReactComponent as Gallows } from '../Images/gallows.svg';
import NumInput from './NumInput';
import WordInput from './WordInput';
import SubmitButton from './SubmitButton';
import InvalidText from './InvalidText';
import Expand from './Animations/Expand';
import Fade from './Animations/Fade';
import Slide from './Animations/Slide';

const Display = () => {
    
    const [valid, setValid] = useState(true);
    const [wordLength, setWordLength] = useState(10);
    const [inGame, setInGame] = useState(false);

    const submit = () => {
        if (!valid) return;
        setInGame(true);
    };

    //bottom of display before game start
    const pregame = () => {
        return (
            <>
            <NumInput setWordLength={setWordLength} setValid={setValid}>
            </NumInput>
            
            <Expand scale="1.1">
                <SubmitButton submit={submit}></SubmitButton>
            </Expand>

            <Slide trigger="both" show={!valid}>
                <InvalidText></InvalidText>
            </Slide>
            </>
            
        );
    }

    //bottom of display while game is active
    const ingame = () => {
        console.log(wordLength);
        return (
            <div className="align-vertical">
                <div className="submit-boxes">
                    {Array(wordLength).fill(0).map((_, i) => {  
                        return (
                            <Slide show={inGame} wait={500 + (i * 30)} trigger="both" key={i}>
                                <WordInput key="key"></WordInput>
                            </Slide>
                        )
                    })}
                </div>
                <Slide show={inGame} wait={500 + (wordLength * 30) + 30}>
                    <SubmitButton></SubmitButton>
                </Slide>
            </div>
            
        )
    }

    return (  
        <Fade wait={1000} direction="in">
            <div className="display">
                    <Gallows id="gallows"></Gallows>
                    <Slide show={!inGame} trigger="unmount" className="display">
                        {pregame()}
                    </Slide>
                    {inGame && ingame()}                                        
            </div>
        </Fade>

    );
}
 
export default Display;