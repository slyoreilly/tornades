import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBarr =()=>{
    return(
        <div>
        <AppBar position="static" >
            <ToolBar>
                <Typography variant="Title" color="inherit">
                    SyncStats
                </Typography>
            </ToolBar>

</AppBar>
            </div>


    )
}

export default NavBarr;