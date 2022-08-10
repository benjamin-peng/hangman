import Expand from './Animations/Expand';

const SubmitButton = ({ submit, text='SUBMIT' }) => {
    return (  
        <div className="button-wrapper">
            <Expand scale="1.1">
                <div className="submit-button" onClick={submit}>
                    <p className="bold-text button-text">{text}</p>
                </div>
            </Expand>
        </div>
        
    );
}
 
export default SubmitButton;