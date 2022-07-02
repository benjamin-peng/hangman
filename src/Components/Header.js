import { useSpring, animated } from 'react-spring';

const Header = () => {
    const props = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: { duration: 1000 }
    });
    return (  
        <animated.div style={props} className="header">
            <h1>HANGMAN</h1>
        </animated.div>
    );
}
 
export default Header;