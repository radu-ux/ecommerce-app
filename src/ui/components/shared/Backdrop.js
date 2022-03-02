import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BackdropWrapper = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.2);
    visibility: ${props => props.visibility};

    &:hover { 
        visibility: hidden;
    }
`

const Backdrop = () => { 
    // console.log("<Backdrop />");

    const backdropVisibility = useSelector(state => state.ui.backdropVisibility);

    return ReactDOM.createPortal(   
        <BackdropWrapper visibility={backdropVisibility}/>,
        document.body
    );
};

export default Backdrop;