import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function SideMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <div>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuIcon/>
        </IconButton>
        <Popper open={open} anchorEl={anchorRef.current} transition>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper id="menu-list-grow" >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList >
                  <MenuItem onClick={handleClose}><Link to='/clients' >Clients</Link></MenuItem>
                  <MenuItem onClick={handleClose}><Link to='/users' >Utilisateurs</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to='/alarms'>Alarmes</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link to='/appareils'>Appareils</Link></MenuItem>

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}