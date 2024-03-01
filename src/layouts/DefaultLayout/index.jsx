import React from 'react';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom'
import {  Sidebar } from '../../components';


const DefaultLayout = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
                    <Outlet />
                </Box>
            </Box>
        </>
    );
};

export default DefaultLayout;