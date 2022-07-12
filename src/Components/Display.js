import { useState, useEffect, Fragment } from 'react';
import { ReactComponent as Gallows } from '../Images/gallows.svg';
import NumInput from './NumInput';
import WordInput from './WordInput';
import SubmitButton from './SubmitButton';
import InvalidText from './InvalidText';
import Guess from './Guess';
import Expand from './Animations/Expand';
import Fade from './Animations/Fade';
import Slide from './Animations/Slide';

const Display = () => {
    
    const [valid, setValid] = useState(true);
    const [wordLength, setWordLength] = useState(10);
    const [inGame, setInGame] = useState(false);
    const [input, setInput] = useState([]);
    const [tempInput, setTemp] = useState([]); //log every change in WordInputs, only finalize in input at end of round
    const [guess, setGuess] = useState('A');

    const startGame = () => {
        if (!valid) return;
        setInGame(true);
        setInput(new Array(wordLength).fill(null));
        setTemp(new Array(wordLength).fill(null));
    };

    //executes at finish of each guessing round
    const finishRound = () => {
        setInput(tempInput); //locks in tempInput changes

    };

    useEffect(() => { //remove later, logs input
        console.log(input);
    }, [input]);

    //bottom of display before game start
    const pregame = () => {
        return (
            <>
            <NumInput setWordLength={setWordLength} setValid={setValid}>
            </NumInput>
            
            <Expand scale="1.1">
                <SubmitButton submit={startGame}></SubmitButton>
            </Expand>

            <Slide trigger="both" show={!valid}>
                <InvalidText></InvalidText>
            </Slide>
            </>
            
        );
    }

    //bottom of display while game is active
    const ingame = () => {
        return (
            <div className="align-vertical">
                 <Slide show={inGame} wait={500} trigger="both">
                    <Guess letter={guess}></Guess>
                 </Slide>
                <div className="submit-boxes">
                    {Array(wordLength).fill(0).map((_, i) => {  
                        return (
                            <Slide show={inGame} wait={500 + (i * 30)} trigger="both" key={i}>
                                <WordInput letter={guess} key={i} 
                                index={i} setTemp={setTemp} input={input}
                                temp={tempInput}></WordInput>
                            </Slide>
                        )
                    })}
                </div>
                <Slide show={inGame} wait={500 + (wordLength * 30) + 30}>
                    <SubmitButton submit={finishRound}></SubmitButton>
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