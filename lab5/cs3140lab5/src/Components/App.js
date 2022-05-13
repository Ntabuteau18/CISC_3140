import React from 'react';
import {BrowserRouter as Router, Link, Outlet} from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(Link)`
    padding-left: 4rem;
    text-decoration: underline;
    color: blue;
`;

function App() {
    return (
        <>
        <h1>Lab5</h1>
            <nav>
                <ul>
                    <StyledLink to="/home">Homepage</StyledLink> 
                    <StyledLink to="/search">Search Engine</StyledLink>
                    <StyledLink to="/cars">Cars</StyledLink>
                    <StyledLink to="/owners">Owners</StyledLink>
                    <StyledLink to="/addcar">Add a New Car</StyledLink>
                    <StyledLink to="/updatecar">Update Car Info</StyledLink>
                    <StyledLink to="/addowner">Add New Owner</StyledLink>
                    <StyledLink to="/updateowner">Update Owners Info</StyledLink>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default App;