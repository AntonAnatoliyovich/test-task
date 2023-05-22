import styled from "styled-components";
import { Link } from "react-router-dom";

export const TweetsPageSection = styled.section`
    padding: 15px 0;
`

export const LinkBack = styled(Link)`
    width: 196px;
    height: 50px;
    border-radius: 10px;
    text-align: center;
    background-color: #040640;
    text-decoration: none;
    margin: 0 auto;
    font-size: 16px;
    padding: 10px;
    color: #e1fa00;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);;
    transition-duration: 250ms;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

    &:hover, :focus {
        background-color: #2a4bf5;
    }
`
