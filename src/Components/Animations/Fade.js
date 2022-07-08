import { useSpring, animated } from 'react-spring';
const FadeIn = ({ wait = 0, direction, children }) => {

    const style = useSpring({
        from: {
            opacity: (direction == 'in') ? 0 : 1
        },
        to: {
            opacity: (direction == 'in') ? 1 : 0
        },
        config: { duration: 1000 },
        delay: wait
    })

    return (  
        <animated.div style={style}>
            {children}
        </animated.div>
    );
}
 
export default FadeIn;