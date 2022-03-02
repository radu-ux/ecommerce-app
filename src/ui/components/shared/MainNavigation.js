import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationWrapper = styled.ul`
    ul {
        display: flex;
        flex-direction: row;
        column-gap: 2em;
    }

    li {
        list-style-type: none;
        text-transform: uppercase;
        padding: 1em 0;
    }

    li a { 
        text-decoration: none;
        color: black;
        font-size: 1.1em;
        padding: 1em 0;
    }

    .active,
    li a:hover { 
        border-bottom: 2.5px solid #5ECE7B;
    }

`

const MainNavigation = () => { 
    // console.log("<MainNavigation />");

    return (
        <NavigationWrapper>
            <ul>
                <li>
                    <NavLink to="/category/clothes">Clothes</NavLink>
                </li>
                <li>
                    <NavLink to="/category/tech">Tech</NavLink>
                </li>
            </ul>
        </NavigationWrapper>
    );
}

export default MainNavigation;