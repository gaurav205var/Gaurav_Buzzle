import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/icons/AccountCircle';
import { Box, Button } from '@material-ui/core';

// es7 snippets {Go download as an extension on VSC}

function header() {
  return (
    <div className='header'>
       <div className='header__left'> 
        
        
  
         </div> 
          <div className='header__input'>
          <input placeholder='Search' type="text"/>
          <SearchIcon className='header__inputbutton' />
        </div>

        <div className='header__icons'>
        {/* <VideoCallIcon />
        <AppsIcon />
           <NotificationsIcon />
           <Avatar 
           alt=""
           src=""
           /> */}
           
           <Box marginRight={1}>

           <Button variant="contained" color="primary">Login</Button>
           </Box>
           <Box>

           <Button variant="contained" color="primary">Signup</Button>
           </Box>
            



        </div>

        </div>

  );
}

export default header