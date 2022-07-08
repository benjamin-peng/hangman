import { useSpring, animated } from 'react-spring';
import Fade from './Animations/Fade';
const Header = () => {
    
    return (  
        <div className="header">
            <Fade direction="in">
                <h1 id="header-text">HANGMAN</h1>
            </Fade>
        </div>
    );
}
 
export default Header;