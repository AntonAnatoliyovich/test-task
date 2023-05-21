import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.nav`
    display: flex;
    justify-content: space-evenly;
    margin-left: -15px;
    margin-right: -15px;
    padding: 15px;
    gap: 30px;
    background-color: #2d690e;
    color: #EBD8FF;
    border: none;
`;

export const StyledNavLink = styled(NavLink)`
    font-size: 35px;
    font-weight: bold;
    color: #EBD8FF;
    text-decoration: none;

    &.active {
        color: #5CD3A8;
        border-bottom: 1px solid #5CD3A8;
    }
`;
