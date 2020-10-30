import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  parentDescriptionTextLayout: props => ({
    marginTop:10,
    width: '75%',
    display:'flex',
    alignItems:'flex-end',
    [theme.breakpoints.down('sm')]: {
      marginLeft:20,
      width: '90%',
      alignSelf:'center',
      display:'flex',
    }, 
  }),  
  DescriptionTextTitle: props => ({
    color: props.recessiveTextColor,
    fontFamily: 'Montserrat',
    fontSize: 15,
  })
}))

function DescriptionText({theme, title}) {
    const classes = useStyles(theme);
    return (
        <div className={classes.parentDescriptionTextLayout}>
            <h4 className={classes.DescriptionTextTitle}>{title}</h4>
        </div>
    )
}

export default DescriptionText;