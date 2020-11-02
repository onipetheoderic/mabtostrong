import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  parentBannerTextLayout: props => ({
    width: '70%',
    display:'flex',
    marginBottom:10,
    marginTop:20,
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      alignSelf:'center',
      display:'flex',
      marginBottom:20,
     
     
    }, 
  }),  
  BannerTextTitle: props => ({
    color: props.dominantTextColor,
    fontFamily: 'Montserrat',
    fontSize: 34,
    fontWeight:'bold',
    [theme.breakpoints.down('sm')]: {     
      fontSize: 27,
      textAlign:'center',
      alignSelf:'center',
      display:'flex',
     
    }, 
  })
}))

function BannerText({theme, title}) {
    const classes = useStyles(theme);
    return (
        <div className={classes.parentBannerTextLayout}>
            <span className={classes.BannerTextTitle}>{title}</span>
        </div>
    )
}

export default BannerText;