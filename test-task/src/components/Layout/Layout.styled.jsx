import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.nav`
    display: flex;
    justify-content: space-evenly;
    margin-left: -15px;
    margin-right: -15px;
    padding: 15px;
    gap: 30px;
    background-color: #e1fa00;
    color: #EBD8FF;
    border-bottom: 1px solid #040640;
`;

export const StyledNavLink = styled(NavLink)`
    font-size: 35px;
    font-weight: bold;
    color: #373737;
    text-decoration: none;

    &.active {
        color: #5CD3A8;
        border-bottom: 1px solid #040640;
    }
`;
