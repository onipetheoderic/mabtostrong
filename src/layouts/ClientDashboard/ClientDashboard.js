import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

import AppBar from '../../components/AppBar';

import { Theme } from '../../theme';

const useStyles = makeStyles((theme) => ({
  parentAdminLayout: {
      width:'100%',
      display:'flex',
      flexDirection:'column'
  },

  toolBarPortion: {
    width: '100%',
    height: 100,
  },
  mainSection: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        flexDirection:'column',
      }, 
    
  },
  imageBackgroundSection: {
    flex: 1,
    backgroundColor:'white',
  },
  descriptionSection: {
    flex: 1,
    marginLeft:50,
    [theme.breakpoints.down('sm')]: {
       margin:0,
      }, 
  },
  services: {
    width:'80%', 
    height:300, 
    [theme.breakpoints.down('sm')]: {
        width:'100%', 
       }, 
  },
  yourMsgSection: {
      marginLeft:'20%',
      width:'80%',
      height:'200px',
      [theme.breakpoints.down('sm')]: {
       display:'none'
       }, 
  },
  spacerz: {
      marginTop:100
  },

  linedTexts: {
      marginTop:150,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      width:'60%',
      [theme.breakpoints.down('sm')]: {
        width:'90%',
        marginTop:80,
        marginLeft:20
        }, 
  }


}))

function ClientDashboard(props) {
    const classes = useStyles();

    return (
        <div className={classes.parentAdminLayout}>
            <div className={classes.toolBarPortion}>
                <AppBar theme = {Theme}/>
            </div>

            <div className={classes.mainSection}>
                <div className={classes.imageBackgroundSection}>
                    {/* Image Section */}
                    {props.bgImage}               
                <div className={classes.yourMsgSection}>
                    {/* Chat box Section */}
                    {props.chatBoxSection}
                </div>
                </div>
    
                <div className={classes.descriptionSection}>
                    
                    <div className={classes.spacerz} />
                    {/* Text With Upper Line Section */}
                    {props.textWithUpperLine}
                    {props.services
                    &&  
                    <div className={classes.services}>
                        <ol>
                            <li>
                            Enterprise software development 
                            </li>
                            <li>
                            Network and cyber security 
                            </li>
                            <li>
                            ICT courseware design and development 
                            </li>
                            <li>
                            Corporate training and development 
                            </li>
                            <li>
                            Mobile App development
                            </li>
                            <li>
                            Digital marketing & Content management 
                            </li>
                            <li>
                            Website and web portal Design and development
                            </li>
                            <li>
                            Embedded Systems & Machine Learning
                            </li>
                            <li>
                            Cloud Infrastructure Management
                            </li>
                            <li>
                            Software testing, Maintenance and Support Service
                            </li>
                            <li>
                            Big Data Ware Housing and data security
                            </li>
                            <li>
                            Social Media Optimization and business strategy development
                            </li>
                        </ol>
                    </div>
                    }
                   
                       {/* Banner Text Section */}
                       <div>
                       {props.bannerText}
                       </div>
                   
                    {props.descriptionSection}
               
                    {props.clientForm}
                    <div className={classes.linedTexts}>
                   {props.linedTextSection}
                    </div>
                    
                </div>
            </div>
           
        </div>
    )
}

export default ClientDashboard;
