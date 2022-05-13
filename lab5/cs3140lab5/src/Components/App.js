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
        <h1>Lab5 FrontEnd</h1>
            <nav>
                <ul>
                    <StyledLink to="/Home">Homepage</StyledLink> 
                    <StyledLink to="/Search">Search Engine</StyledLink>
                    <StyledLink to="/Cars">Cars</StyledLink>
                    <StyledLink to="/Owners">Owners</StyledLink>
                    <StyledLink to="/NewCarEntry">Add a New Car</StyledLink>
                    <StyledLink to="/AddCar">Update Car Info</StyledLink>
                    <StyledLink to="/AddOwner">Add New Owner</StyledLink>
                    <StyledLink to="/NewOwnerInfo">Update Owners Info</StyledLink>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}
export default App;