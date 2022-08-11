import styled from "styled-components";
import MountFade from "./Animations/MountFade";
import { useSpring, animated } from 'react-spring';

const Styles = styled.div`
    .head {
        border-radius: 50%;
        height: 50px;
        width: 50px;
        border: 4px solid black;
        position: absolute;
        top: 23.3%;
        right: 16.3%;
    }
    .torso {
        border: 2px solid black;
        position: absolute;
        height: 130px;
        right: 21.8%;
        top: 34%;
    }
    .left-arm {
        border: 2px solid black;
        position: absolute;
        height: 40px;
        right: 25.2%;
        top: 38%;
        transform: rotate(-45deg);
    }
    .right-arm {
        border: 2px solid black;
        position: absolute;
        height: 40px;
        right: 18.2%;
        top: 38%;
        transform: rotate(45deg);
    }
    .left-leg {
        border: 2px solid black;
        position: absolute;
        height: 40px;
        right: 25.1%;
        top: 61.7%;
        transform: rotate(45deg);
    }
    .right-leg {
        border: 2px solid black;
        position: absolute;
        height: 40px;
        right: 18.2%;
        top: 61.7%;
        transform: rotate(135deg);
    }
`;

const BodyPart = ({ frame }) => {
    return (  
        <Styles>
            <MountFade show={frame >= 1}>
                <div className="head"></div>
            </MountFade>
            <MountFade show={frame >= 2}>
                <div className="torso"></div>
            </MountFade>
            <MountFade show={frame >= 3}>
                <div className="left-arm"></div>
            </MountFade>
            <MountFade show={frame >= 4}>
                <div className="right-arm"></div>
            </MountFade>
            <MountFade show={frame >= 5}>
                <div className="left-leg"></div>
            </MountFade>
            <MountFade show={frame >= 6}>
                <div className="right-leg"></div>
            </MountFade>
        </Styles>
    );
}
 
export default BodyPart;
