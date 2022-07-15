import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';

const Guess = ({ letter }) => {

    const [style, setStyle] = useSpring(() => ({ opacity: 0 }));
    const [displayed, setDisplayed] = useState(letter);
    useEffect(() => {
        setStyle({ 
            opacity: 0,
            from: { opacity: 1 },
            onRest: () => {
                setStyle({
                    opacity: 1
                });
                setDisplayed(letter);
            }});
    }, [letter]);

    
    return ( 
        <div className="guess">
            <p className="bold-text">I GUESS THE LETTER:&nbsp;</p>
            <animated.div style={style}>
                <p className="bold-text" id="guessed-letter">{displayed}</p>
            </animated.div>
        </div>
    );
}
 
export default Guess;