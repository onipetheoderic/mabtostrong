import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  parentTextWithUpperLineLayout: props=> ({
    width: '40%',
    display:'flex',
    height:'70px',
    alignItems:'flex-end',
    borderTop: `2px solid ${props.lineColor}`,
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginLeft:20
    }, 
  }),  
  TextWithUpperLineTitle: props => ({
    color: props.oceanBlue,
    fontFamily: 'Montserrat'
  })
}))

function TextWithUpperLine({theme}) {
    const classes = useStyles(theme);
    return (
        <div className={classes.parentTextWithUpperLineLayout}>
            <h4 className={classes.TextWithUpperLineTitle}>Quick Delivery of Product</h4>
        </div>
    )
}

export default TextWithUpperLine;