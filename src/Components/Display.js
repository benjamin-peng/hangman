import WordList from '../WordData/wordlist.txt';
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
    const [inGame, setInGame] = useState(0);
    const [input, setInput] = useState([]);
    const [tempInput, setTemp] = useState([]); //log every change in WordInputs, only finalize in input at end of round
    const [guess, setGuess] = useState('E');
    const [madeGuesses, setMadeGuesses] = useState(['E']);
    const [trigger, setTrigger] = useState(0);

    const [wordList, setWordList] = useState([]); //list of all english words, uppercase
    //get list of words
    fetch(WordList)
    .then(r => r.text())
    .then(text => {
        setWordList(text.split('\r\n'));
    });

    const startGame = () => {
        if (!valid) return;
        setInGame(1);
        setInput(new Array(wordLength).fill(null));
        setTemp(new Array(wordLength).fill(null));
    };

    //executes at finish of each guessing round
    const finishRound = () => {
        setInput(tempInput); //locks in tempInput changes
        setTrigger(trigger + 1);
    };

    useEffect(() => {
        if (!input.includes(null) && trigger != 0) {
            setInGame(2);
        }
        else if (wordList.length > 0) {
            var possibleWords = [];
            for (var i = 0; i < wordList.length; i++) {
                if (wordList[i].length != wordLength) continue;
                var candidate = true;
                for (var j = 0; j < input.length; j++) {
                    if (input[j] == null) continue; //skip if input char isn't filled
                    if (input[j] != wordList[i].charAt(j)) candidate = false;
                }
                if (candidate) possibleWords.push(wordList[i]);
            }
            var counts = new Map();
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var i = 0; i < possibleWords.length; i++) {
                for (var j = 0; j < 26; j++) {
                    const letter = alphabet.charAt(j);
                    if (madeGuesses.includes(letter)) continue;
                    if (!possibleWords[i].includes(letter)) {
                        if (!counts.has(letter)) counts.set(letter, 0);
                        counts.set(letter, counts.get(letter) + 1);
                    }
                }
                for (var j = 0; j < 26; j++) {
                    const letter = alphabet.charAt(j);
                    if (madeGuesses.includes(letter)) continue;
                    if (!counts.has(letter)) {
                        counts.set(letter, 0);
                    }
                }
            }
            counts = new Map([...counts.entries()].sort((a, b) => a[1] - b[1]));
            console.log(counts);
            const firstKey = counts.keys().next().value;
            console.log(firstKey);
            setGuess(firstKey);
            setMadeGuesses(madeGuesses.concat(firstKey));
        }
       
    }, [trigger]);

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
                <Slide show={inGame==1} wait={500} trigger="mount">
                    <Guess letter={guess}></Guess>
                </Slide>
                <div className="submit-boxes">
                    {Array(wordLength).fill(0).map((_, i) => {  
                        return (
                            <Slide show={inGame==1} wait={500 + (i * 30)} trigger="mount" key={i}>
                                <WordInput letter={guess} key={i} 
                                index={i} setTemp={setTemp} input={input}
                                temp={tempInput}></WordInput>
                            </Slide>
                        )
                    })}
                </div>
                <Slide show={inGame==1} wait={500 + (wordLength * 30) + 30}>
                    <SubmitButton submit={finishRound}></SubmitButton>
                </Slide>
            </div>
        )
    }

    const finishgame = () => {
        return (
            <Slide show={inGame==2} wait={500} trigger="mount">
                <p className="bold-text">I WIN!</p>
            </Slide>
        );
    };

    return (  
        <Fade wait={1000} direction="in">
            <div className="display">
                    <Gallows id="gallows"></Gallows>
                    <Slide show={inGame==0} delay={1000} trigger="unmount" className="display">
                        {pregame()}
                    </Slide>
                    <Slide show={inGame==1} delay={1000} trigger="unmount">
                        {ingame()}                                        
                    </Slide>
                    <Slide show={inGame==2} delay={1000} trigger="unmount">
                        {finishgame()}                                        
                    </Slide>
            </div>
        </Fade>

    );
}
 
export default Display;