import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Card } from "../SideBar/Card";
import Box from '@mui/material/Box';

export function Layout() {
    return (
        <>
            <NavBar />
            <Box>
                <Card />
            </Box>


        </>
    )
}