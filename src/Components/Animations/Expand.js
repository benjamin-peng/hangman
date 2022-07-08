import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';

const Shake = ({ scale = 1.2, children }) => {
    const [hover, setHover] = useState(false);

    const style = useSpring({
        transform: hover ? `scale(${scale})`: 'scale(1)',
        config: {
            tension: 400,
            friction: 25
        }
    });
    useEffect(() => {
    }, [hover]);


    const mouseEnter = () => {
        setHover(true);
        console.log(hover);
    };
    const mouseLeave = () => {
        setHover(false);
        console.log(hover);
    };

    return (
        <animated.span onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={style}>
            {children}
        </animated.span>
      );
}
 
export default Shake;
