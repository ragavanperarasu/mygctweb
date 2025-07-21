import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Drawer, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // < md means mobile/tablet

  const DrawerList = (
    <Box sx={{ width: 250, p: 2 }} onClick={() => setOpen(false)}>
      <Button fullWidth startIcon={<HomeRoundedIcon />} sx={{ justifyContent: 'flex-start', mb: 1 , textTransform: 'none'}} onClick={()=>navigate('/')}>
        Home
      </Button>
      <Button fullWidth startIcon={<PersonRoundedIcon />} sx={{ justifyContent: 'flex-start', mb: 1, textTransform: 'none' }} onClick={()=>navigate('/alumni')}>
        Alumni
      </Button>
      <Button fullWidth startIcon={<InfoIcon />} sx={{ justifyContent: 'flex-start', mb: 1, textTransform: 'none' }}>
        About
      </Button>
      {/* <Button fullWidth startIcon={<LoginIcon />} sx={{ justifyContent: 'flex-start', textTransform: 'none' }}>
        Login
      </Button> */}
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{backgroundColor:'#003262', boxShadow:'none'}}>
        <Toolbar style={{backgroundColor:"#003262" }}>

          {/* Menu IconButton - visible always */}
          <IconButton
            onClick={() => setOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              '&:focus': {
                outline: 'none',
              }
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,  fontFamily:"Philosopher", fontWeight:800, fontStyle:'normal', fontSize:30, }}>
            My GCT
          </Typography>

          {/* Buttons - hide on small screens */}
          {!isMobile && (
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', width: '50%' }}>
              <Button color="inherit" startIcon={<HomeRoundedIcon/>} sx={{ fontSize: 20, textTransform: 'none', fontFamily:"Philosopher",}} onClick={()=>navigate('/')}>
                Home
              </Button>
              <Button color="inherit" startIcon={<PersonRoundedIcon />} sx={{ fontSize: 20, textTransform: 'none', fontFamily:"Philosopher" }} onClick={()=>navigate('/alumni')}>
                Alumni
              </Button>
              <Button color="inherit" startIcon={<InfoIcon />} sx={{ fontSize: 20, textTransform: 'none', fontFamily:"Philosopher"}}>
                About
              </Button>
              {/* <Button color="inherit" startIcon={<LoginIcon />} sx={{ fontSize: 16, textTransform: 'none' }}>
                Login
              </Button> */}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
