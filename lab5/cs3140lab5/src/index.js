import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './Components/App';
import Cars from "./Components/Cars";
import Owners from "./Components/Owners";
import Search from "./Components/Search";
import AddCar from "./Components/AddCar";
import UpdateCar from "./Components/UpdateCar";
import AddOwner from "./Components/AddOwner";
import UpdateOwner from "./Components/UpdateOwner";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="home" element={<App />} />
            <Route path="/" element={<App />} >
                <Route path="cars" element={<Cars />} />
                <Route path="owners" element={<Owners />} />
                <Route path="search" element={<Search />} />
                <Route path="addcar" element={<AddCar />} />
                <Route path="updatecar" element={<UpdateCar />} />
                <Route path="addowner" element={<AddOwner />} />
                <Route path="updateowner" element={<UpdateOwner />} />
                <Route path="*" element={
                    <main style={{ padding: "1rem" }}>
                        <p>Invalid URL</p>
                    </main>
                }/>
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);