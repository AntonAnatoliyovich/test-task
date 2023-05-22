import styled from "styled-components";

export const CardListStyled = styled.ul`
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
`

export const PaginationButtons = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
`

export const Button = styled.button`
    cursor: pointer;
    height: 50px;
    width: 196px;
    border-radius: 10px;
    border: none;
    color: #e1fa00;
    background-color: #040640;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;

    .isDisable:hover {
        background-color: #2a4bf5;
    }

    &:hover {
        background-color: ${props => (props.disabled ? '#82827d' : '#2a4bf5')};
    }
`

export const InformationMessage = styled.p`
    text-align: center;
`
