import Expand from './Animations/Expand';

const WordInput = () => {
    return (
        <Expand scale={1.2}>
            <div className="word-input">
                    <input type="text" maxLength={1} id="input">
                    </input>
            </div>
        </Expand>
    );
}
 
export default WordInput;