import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  parentYourMsgLayout: props=> ({
    width: '100%',
    height:'180px',
    backgroundColor: props.recessiveColor,
    borderRadius:10,
  }),
  YourMsgTitle: {
      fontFamily: 'Montserrat',
      fontSize: 15,
      color: 'white',
      paddingTop:20,
      paddingLeft:30
  },
  surroundText: props => ({
      backgroundColor: props.iconSurroundColor,
      width: 60,
      height: 60,
      borderRadius:30,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      
  }),
  surroundContainer: {
    flex:1,
    marginLeft:30,
    marginRight:30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textLetter: props =>({
      color: props.singleTextColor,
      fontSize:18,
  }),
  textSection: {
      marginLeft:20,
      flex:4, 
      borderBottom:'1px solid #836fe9',
      paddingBottom:20
  },
  minContainer: props => ({
      display:'flex',
      justifyContent:'space-between',
      color: props.chatTextColor
  }),
  minContainer2: props => ({
    display:'flex',
    marginTop:10,
    justifyContent:'space-between',
    color: props.chatTextColor
}),

buttonPositioner: {
    display:'flex',
    justifyContent:'flex-end',
    marginRight:30,
    marginTop:5
},
buttonCont: props =>({
    backgroundColor: props.oceanBlue,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:5,
    paddingBottom:5,
    borderRadius:4,
})

  
}))

function YourMsg({theme}) {
    const classes = useStyles(theme);
    return (
        <div className={classes.parentYourMsgLayout}>
            <h4 className={classes.YourMsgTitle}>Your Messages</h4>
            <div className={classes.surroundContainer}>
                <div className={classes.surroundText}>
                    <span className={classes.textLetter}>M</span>
                </div>
                <div className={classes.textSection}>
                    <div className={classes.minContainer}>
                        <span>Mabto</span> <span>2 mins Ago</span>
                    </div>
                    <div className={classes.minContainer2}>
                        <span>Hey there, How can we help you</span>
                    </div>
                    
                </div>
               
            </div>
            <div className={classes.buttonPositioner}>
                <div className={classes.buttonCont}>
                    <span>Lets Chat</span>
                </div>
            </div>
           
          
        </div>
    )
}

export default YourMsg;