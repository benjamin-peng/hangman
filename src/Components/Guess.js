const Guess = ({ letter }) => {
    return ( 
        <div className="guess">
            <p className="bold-text">I GUESS THE LETTER:&nbsp;</p>
            <p className="bold-text">{letter}</p>
        </div>
    );
}
 
export default Guess;