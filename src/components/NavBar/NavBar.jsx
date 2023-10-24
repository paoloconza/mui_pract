import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

export function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


    return (
        <AppBar>
            <Toolbar sx={{backgroundColor: 'white'}}>
                <Box >
                    <Typography 
                    sx={{ fontSize: '18px', color: 'black',fontWeight: 'bold' }}>
                        Edie
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box
                    sx={{ gap:'1.5rem', display: { xs: 'none', md: 'flex' } }}
                    component={'nav'} >
                    <IconButton >
                        <Typography component={'h2'}>
                            <strong>Home</strong>
                        </Typography>
                    </IconButton>
                    <IconButton >
                        <Typography component={'h2'}>
                            <strong>Services</strong>
                        </Typography>
                    </IconButton>
                    <IconButton >
                        <Typography component={'h2'}>
                            <strong>Our Works</strong>
                        </Typography>
                    </IconButton>
                    <IconButton >
                        <Typography component={'h2'}>
                            <strong>Clients</strong>
                        </Typography>
                    </IconButton>
                    <IconButton >
                        <Typography component={'h2'}>
                            <strong>Contact</strong>
                        </Typography>
                    </IconButton>
                </Box>
                <Box
                    sx={{ display: { xs: 'flex', md: 'none' } }}
                >
                    <IconButton onClick={() => setIsMobileMenuOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                </Box>

            </Toolbar>

            <MobileMenu
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
        </AppBar>
    )
} 