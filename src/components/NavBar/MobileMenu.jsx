
import { Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {


    return (


        <Menu
            sx={{ mt: '-46px' }}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                
            }}

            keepMounted
            transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen (false)}
        >

            <MenuItem sx={{ padding: '0px 16px' }}>
                <Typography
                    component={'h2'}>
                    Home
                </Typography>
            </MenuItem>
            <Divider />
            <MenuItem sx={{ padding: '0px 16px' }}>
                <Typography component={'h2'}>
                    Services
                </Typography>
            </MenuItem>
            <Divider />
            <MenuItem sx={{ padding: '0px 16px' }}>
                <Typography component={'h2'}>
                    Our Works
                </Typography>
            </MenuItem >
            <Divider />
            <MenuItem sx={{ padding: '0px 16px' }}> 
                <Typography component={'h2'}>
                    Clients
                </Typography>
            </MenuItem >
            <Divider />
            <MenuItem sx={{ padding: '0px 16px' }}>
                <Typography component={'h2'}>
                    Contact
                </Typography>
            </MenuItem >

        </Menu >
    )
}

export default MobileMenu