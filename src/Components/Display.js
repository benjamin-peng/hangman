import { useSpring, animated } from 'react-spring';

import { ReactComponent as Gallows } from '../Images/gallows.svg';

const Display = () => {
    const props = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: { duration: 1000 },
        delay: 500
    })
    const AnimatedGallows = animated(Gallows);
    return (  
        <div className="display">
            <AnimatedGallows style={props}></AnimatedGallows>
        </div>
    );
}
 
export default Display;