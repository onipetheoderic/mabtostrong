import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCode, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import bgImage from '../../assets/images/bgImage.svg';
import AppBar from '../../components/AppBar';
import YourMsg from '../../components/YourMsg';
import TextWithUpperLine from '../../components/TextWithUpperLine';
import BannerText from '../../components/BannerText';
import DescriptionText from '../../components/DescriptionText';
import ClientForm from '../../components/ClientForm';

import DescriptionTextWithTopBorder from '../../components/DescriptionTextWithTopBorder';

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

function ClientDashboard() {
    const classes = useStyles();
    return (
        <div className={classes.parentAdminLayout}>
            <div className={classes.toolBarPortion}>
                <AppBar theme = {Theme}/>
            </div>

            <div className={classes.mainSection}>
                <div className={classes.imageBackgroundSection}>
                <img src={bgImage} />
                <div className={classes.yourMsgSection}>
                    <YourMsg theme = {Theme}/>
                </div>
                </div>
    
                <div className={classes.descriptionSection}>
                    <div className={classes.spacerz} />
                    <TextWithUpperLine theme = {Theme}/>
                   
                    <BannerText theme={Theme} title="Grow your Business with #1 CRM"/>
                    <DescriptionText theme={Theme} title="Our Elite Team builds apps, responsive web apps,
                     mobile apps, and any digital products that interacts" />
                     <ClientForm theme={Theme}/>
                    <div className={classes.linedTexts}>
                    <DescriptionTextWithTopBorder theme={Theme} textNo="01." title="Create App faster at Lower" />
                    <DescriptionTextWithTopBorder theme={Theme} textNo="02." title="Create App faster at Lower" />
                    <DescriptionTextWithTopBorder theme={Theme} textNo="03." title="Create App faster at Lower" />
                    </div>
                    
                </div>
            </div>
           
        </div>
    )
}

export default ClientDashboard;
