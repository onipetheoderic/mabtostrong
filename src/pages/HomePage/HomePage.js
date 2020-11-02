import React from 'react';

import MotionDiv from '../../components/MotionDiv';
import bgImage from '../../assets/images/bgImage.svg';
import BannerText from '../../components/BannerText';
import ClientDashboard from '../../layouts/ClientDashboard';
import ClientForm from '../../components/ClientForm';
import DescriptionText from '../../components/DescriptionText';
import DescriptionTextWithTopBorder from '../../components/DescriptionTextWithTopBorder';
import TextWithUpperLine from '../../components/TextWithUpperLine';
import YourMsg from '../../components/YourMsg';
import { Theme } from '../../theme';
import { fade, makeStyles } from '@material-ui/core/styles';

import One from '../../assets/images/logos/1.jpg';
import Two from '../../assets/images/logos/2.jpg';
import Three from '../../assets/images/logos/3.jpg';
import Four from '../../assets/images/logos/4.jpg';
import Five from '../../assets/images/logos/5.jpg';
import Six from '../../assets/images/logos/6.jpg';
import Seven from '../../assets/images/logos/7.jpg';
import Eight from '../../assets/images/logos/8.jpg';
import Nine from '../../assets/images/logos/9.jpg';
import Ten from '../../assets/images/logos/10.jpg';
import Eleven from '../../assets/images/logos/11.jpg';
import Twelve from '../../assets/images/logos/12.jpg';


function HomePage() {

    
    const useStyles = makeStyles((theme) => ({

        imageLogos: {
          justifyContent:'center',
            marginTop:20,
            marginBottom:20, 
            width:'100%',
            display:'flex',
            flexWrap:'wrap',
            flexDirection:'row',
            [theme.breakpoints.down('sm')]: {
               width: '100%'
              }, 
         
        },
        client2: {
            display:'flex',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            height:100,
            width:'100%',
           
        },
        client: {
            display:'flex',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
        },
        imagesStyle: {
            width:'14%', 
            height:70,
            [theme.breakpoints.down('sm')]: {
                width: '100%'
               }, 
        },
       
    }))

    const classes = useStyles();


    let bottomTextSection = [
        <DescriptionTextWithTopBorder theme={Theme} textNo="01." title="Contact Us" />,
        <DescriptionTextWithTopBorder theme={Theme} textNo="02." title="Give us your plan/model" />,
        <DescriptionTextWithTopBorder theme={Theme} textNo="03." title="We help you bring it to life" />,

    ]
    return (
        <MotionDiv>
            <ClientDashboard 
            bgImage = {<img src={bgImage}/>}
            chatBoxSection = {<YourMsg theme = {Theme}/>}
            textWithUpperLine = {<TextWithUpperLine theme = {Theme} title="Quick Delivery of Quality Products"/>}
            bannerText = {<BannerText theme={Theme} title="Many are better than one..."/>}
            descriptionSection = {
            <DescriptionText 
            theme={Theme} 
            title="Mabto strong Nigeria Limited is the top information technology and enterprise software development company in Nigeria that provides Information communication technology solutions, products and services using only the very best of ultra-modern technologies and the brightest engineers, programmers and product architects. 
            For the last 7 years we have gained above industry standard experience working with clients like the NNPC, NOA, REA, FMWH, ICPC, ETC AMONGST others. " />}
            linedTextSection = {bottomTextSection}
            />
            {/* <div className={classes.client}>
                <h1 className={classes.clientHeader}>Our Clients</h1>
            </div> */}
            <div className={classes.imageLogos}>
                <img src={One} className={classes.imagesStyle}/>
                <img src={Two} className={classes.imagesStyle}/>
                <img src={Three} className={classes.imagesStyle}/>
                <img src={Four} className={classes.imagesStyle}/>
                <img src={Five} className={classes.imagesStyle}/>
                <img src={Six} className={classes.imagesStyle}/>              
                <img src={Seven} className={classes.imagesStyle}/>
                <img src={Eight} className={classes.imagesStyle}/>
                <img src={Nine} className={classes.imagesStyle}/>
                <img src={Ten} className={classes.imagesStyle}/>
                <img src={Eleven} className={classes.imagesStyle}/>
                <img src={Twelve} className={classes.imagesStyle}/>
            </div>
            <div className={classes.client2}>
               <span>© 2020 MabtoStrong. All rights reserved.</span>
            </div>
        </MotionDiv>
    )
}

export default HomePage;
