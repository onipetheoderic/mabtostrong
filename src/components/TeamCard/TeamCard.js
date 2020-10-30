import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

export default function TeamCard({bgImage, name, position}) {
    const useStyles = makeStyles((theme) => ({
       teamContainer: {
        width:'30%',
        minHeight:500,
        marginLeft:10,
        marginRight:10,
        position:'relative',
        [theme.breakpoints.down('sm')]: {
          flexDirection:'column',
          width:'100%',
          marginLeft:0,
          marginTop:20
        }, 
       },
       bgImage: {
        width:'100%',
        height:500,
       },
       name: {
        fontSize:13,
        fontWeight:'bold',
        textAlign:'center'
       },
       fullname: {
        fontSize:18,
        fontWeight:'bold'
       },
       bottomCardTextRegion: {
           display:'flex',
           flexDirection:'column',
           justifyContent:'center',
           alignItems:'center',
           position:'absolute',
           bottom:0,
           height:70,
           width:'100%',
           backgroundColor:'rgba(223, 224, 223, 0.8)'
       }
       
      }))

      const classes = useStyles();
  return (
    <div className={classes.teamContainer}>
        <img src={bgImage} className={classes.bgImage}/>
        <div className={classes.bottomCardTextRegion}>
        <span className={classes.fullname}>{name}</span>
        <span className={classes.name}>{position}</span>
        </div>
    </div>
  );
}

TeamCard.propTypes = {

}
