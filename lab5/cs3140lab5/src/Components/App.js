import React from 'react';
import {BrowserRouter as Router, Link, Outlet} from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(Link)`
    padding-left: 3rem;
    text-decoration: none;
    color: black;
`;

function App() {
    return (
        <>
        <h1>Lab5</h1>
            <nav>
                <ul>
                    <StyledLink to="/home">Homepage</StyledLink> 
                    <StyledLink to="/search">Search</StyledLink>
                    <StyledLink to="/cars">Cars</StyledLink>
                    <StyledLink to="/owners">Owners</StyledLink>
                    <StyledLink to="/addcar">Add a Car</StyledLink>
                    <StyledLink to="/updatecar">Update Cars</StyledLink>
                    <StyledLink to="/addowner">Add Owner</StyledLink>
                    <StyledLink to="/updateowner">Update Owner</StyledLink>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default App;