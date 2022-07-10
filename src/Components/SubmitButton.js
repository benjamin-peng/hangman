import Expand from './Animations/Expand';

const SubmitButton = ({ submit }) => {
    return (  
        <div className="button-wrapper">
            <Expand scale="1.1">
                <div className="submit-button" onClick={submit}>
                    <p className="bold-text">SUBMIT</p>
                </div>
            </Expand>
        </div>
        
    );
}
 
export default SubmitButton;