import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  parentDescriptionTextWithTopBorderLayout: props => ({
    width: '30%',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    borderTop: `1px solid ${props.smallLineColor}`
  }),  
  DescriptionTextWithTopBorderTitle: props => ({
    color: props.dominantTextColor,
    fontFamily: 'Montserrat',
    fontSize:12,
    marginTop:10
  }),
  numberText: {
      marginTop:10,
      fontFamily: 'Montserrat',
      fontSize:15,
      marginBottom:0
  }
}))

function DescriptionTextWithTopBorder({theme, title, textNo}) {
    const classes = useStyles(theme);
    return (
        <div className={classes.parentDescriptionTextWithTopBorderLayout}>
            <h3 className={classes.numberText}>{textNo}</h3>
            <h4 className={classes.DescriptionTextWithTopBorderTitle}>{title}</h4>
        </div>
    )
}

export default DescriptionTextWithTopBorder;