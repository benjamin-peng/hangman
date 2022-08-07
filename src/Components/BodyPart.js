import styled from "styled-components";

const Styles = styled.div`
    .body-part {
        border-radius: 50%;
        height: 50px;
        width: 50px;
        border: 4px solid black;
        position: absolute;
        top: 23%;
        right: 13%;
    }
`;

const BodyPart = () => {
    return (  
        <Styles>
            <div className="body-part"></div>
        </Styles>
    );
}
 
export default BodyPart;
