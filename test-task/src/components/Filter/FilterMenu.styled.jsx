import styled from "styled-components";

export const FilterMenuContainer = styled.div`
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 90px;
    z-index: 5;
    border-radius: 10px;
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
        background-color: ${props => (props.isOpen ? '#2a4bf5' : '#2a4bf5')};
    }
`

export const SelectorList = styled.ul`
    list-style: none;
    text-decoration: none;
`

export const Selector = styled.li`
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);;
    transition-duration: 250ms;
    &:hover {
        background-color: #5CD3A8;
        cursor: pointer;
    }
`
