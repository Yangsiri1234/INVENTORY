// src/Main.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'; // Ensure this file exists
import Members from './Members'; // Ensure this file exists
import Sidebar from './Sidebar'; // นำเข้า Sidebar ตรงนี้

function Main() {
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/members" element={<Members />} />
                </Routes>
            </div>
        </div>
    );
}

export default Main;