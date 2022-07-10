import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';

const Expand = ({ scale, children }) => {
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
    };
    const mouseLeave = () => {
        setHover(false);
    };

    return (
        <animated.div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={style}>
            {children}
        </animated.div>
      );
}
 
export default Expand;
