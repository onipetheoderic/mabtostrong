import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import { motion } from "framer-motion";
import './styles.css';
export default function TeamCard({bgImage, name, position, mainPosition, certification2, certification}) {
    const useStyles = makeStyles((theme) => ({
       flipCard: {
        backgroundColor: 'transparent',
        perspective: 1000,
        width:'30%',
        minHeight:400,
        marginLeft:10,
        marginRight:10,
        position:'relative',
        [theme.breakpoints.down('sm')]: {
          flexDirection:'column',
          width:'100%',
          marginLeft:0,
          marginTop:20
        }, 

        "&:hover": {
          transform: 'rotateY(180deg)'
        },
       },
       bgImage: {
        width:'100%',
        height:400,
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
      //  .flip-card:hover .flip-card-inner {
      //   transform: rotateY(180deg);
      // }
       flipCardInner: {
        position: 'relative',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        transition: 'transform 0.5s',
        transformStyle: 'preserve-3d',
        "&:hover": {
          transform: 'rotateY(180deg)'
        },
      },
       flipCardFront: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
      },
      
       flipCardBack: {
        backgroundColor: 'dodgerblue',
        color: 'white',
        transform: 'rotateY(180deg)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden'
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
      // <div className={classes.flipCard}>
    //   <div className={classes.flipCardInner}>
    //     <div className={classes.flipCardFront}>
    //       <img src={bgImage} className={classes.bgImage}/>
    //       <div className={classes.bottomCardTextRegion}>
    //         <span className={classes.fullname}>{name}</span>
    //       <span className={classes.name}>{position}</span>
    //     </div>
    //     </div>        
         
    //     <div className={classes.flipCardBack}>
    //       <h1>John Doe</h1> 
    //       <p>Architect & Engineer</p> 
    //       <p>We love that guy</p>
    //     </div>
    //   </div>    
    // </div>
  return (
     <div className={classes.flipCard}>
      <div className={classes.flipCardInner}>
        <div className={classes.flipCardFront}>
          <img src={bgImage} className={classes.bgImage}/>
          <div className={classes.bottomCardTextRegion}>
            <span className={classes.fullname}>{name}</span>
          <span className={classes.name}>{position}</span>
        </div>
        </div>        
         
        <div className={classes.flipCardBack}>
          <h1 style={{  transform: 'rotateY(180deg)'}}>{mainPosition}</h1> 
  <p style={{  transform: 'rotateY(180deg)'}}>{certification}</p> 
  <p style={{  transform: 'rotateY(180deg)'}}>{certification2}</p> 
        </div>
      </div>    
    </div>
  );
}

TeamCard.propTypes = {

}
