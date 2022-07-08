import Expand from './Animations/Expand';

const NumInput = () => {
    return ( 
        <div className="align-horizontal">
            <p className="bold-text" id="length-label">ENTER WORD LENGTH: </p>
            <Expand scale="1.1">
            <div className="num-input">
                <input type="number" id="input" max="15"/>
            </div>
            </Expand>
        </div>
        
     );
}
 
export default NumInput;