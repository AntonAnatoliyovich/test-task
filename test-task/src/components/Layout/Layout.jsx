import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, StyledNavLink } from './Layout.styled';

export const Layout = () => {
    return (
        <div>
            <Header>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/tweets">Tweets</StyledNavLink>
            </Header>
            <Suspense fallback={<p>Loading...</p>}>
                <main>
                    <Outlet />
                </main>      
            </Suspense>
        </div>
    );
};