import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import {
  NavLink
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appStyle: {
        backgroundColor:'transparent',
        boxShadow:'none',
        marginTop:20
      },
  title: props => ({
    color: props.logoTextColor,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      fontSize:28,
      fontWeight:'400',
      fontFamily: 'Ubuntu',
      color: props.logoTextColor
    },
  }),
    linkStyle: {
    color:'white',
    textDecoration:'none'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
    iconText: {
    fontSize:10,
    paddingLeft:5,
    fontFamily: 'Montserrat'
  },
    linkItemStyle: props => ({
    textDecoration:'none',
    fontWeight: 'bold',
    color:props.appBarTextColor,
  }),

  linkItemStyleMobile: (props)=>({
    textDecoration:'none',
    color:props.appBarTextColor,
  }),

    itemStyle: {
    fontSize:12,
    marginLeft:40,
    color:'white',
    
  },
    iconWithText: {
    fontSize:12,
    marginLeft:20,
    fontFamily: 'Montserrat'
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
    itemStyle: {
    fontSize:12,
    marginLeft:40,
    fontFamily: 'Montserrat',
    color:'white',
    
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems:'center'
    },
  },
    iconBtn: {
      marginRight:40,
      fontFamily: 'Montserrat'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function AppBarClient(props) {
    let { theme } = props
  const classes = useStyles(theme);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Services</MenuItem>
      <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
      <NavLink to="/" exact className={classes.linkItemStyle} activeStyle={{ color: 'black' }}>Home</NavLink>
      </MenuItem>
      <MenuItem>              
      <p> <NavLink to="/services" className={classes.linkItemStyle}  
          activeStyle={{ color: 'black' }}>Services</NavLink></p></MenuItem>
      <MenuItem>
      <p> <NavLink to="/contact" className={classes.linkItemStyle}  
          activeStyle={{ color: 'black' }}>Contact</NavLink></p></MenuItem>
      <MenuItem>
        <p> <NavLink to="/aboutus" className={classes.linkItemStyle}  
      activeStyle={{ color: 'black' }}>About Us</NavLink></p>
      </MenuItem>
      
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appStyle}>
        <Toolbar>
        
          <Typography className={classes.title} variant="h6" >
          Mabto<span style={{fontWeight:"900"}}>Strong</span>
          </Typography>
          <div className={classes.search}>
           
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           
            <Typography className={classes.itemStyle} variant="h6" noWrap>
            <NavLink to="/" exact className={classes.linkItemStyle} activeStyle={{ color: 'black' }}>Home</NavLink>
             </Typography>
             <Typography className={classes.itemStyle} variant="h6" noWrap>
                  <NavLink to="/services" className={classes.linkItemStyle} 
          activeStyle={{ color: 'black' }}>Services</NavLink>          
             </Typography>
            <Typography className={classes.itemStyle} variant="h6" noWrap>
                  <NavLink to="/contact" className={classes.linkItemStyle} 
          activeStyle={{ color: 'black' }}>Contact</NavLink>          
             </Typography>

             <Typography className={classes.itemStyle} variant="h6" noWrap>
                  <NavLink to="/aboutus" className={classes.linkItemStyle} 
          activeStyle={{ color: 'black' }}>About Us</NavLink>          
             </Typography>
          
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            >
               <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}



