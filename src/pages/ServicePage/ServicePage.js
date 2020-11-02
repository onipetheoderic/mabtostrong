import React from 'react';

import MotionDiv from '../../components/MotionDiv';
import bgImage from '../../assets/images/contact3.svg';
import BannerText from '../../components/BannerText';
import ClientDashboard from '../../layouts/ClientDashboard';
import ClientForm from '../../components/ClientForm';
import DescriptionText from '../../components/DescriptionText';
import DescriptionTextWithTopBorder from '../../components/DescriptionTextWithTopBorder';
import TextWithUpperLine from '../../components/TextWithUpperLine';
import YourMsg from '../../components/YourMsg';
import { Theme } from '../../theme';
import { fade, makeStyles } from '@material-ui/core/styles';

function ServicePage() {
    const useStyles = makeStyles((theme) => ({

        imageLogos: {
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:20,
            marginBottom:20, 
            width:'90%',
            display:'flex',
            flexWrap:'wrap',
            flexDirection:'row',
         
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
            backgroundColor:'#DFE0DF'
        },
        clientHeader: {          

            
        }
    }))

    const classes = useStyles();

    
    let bottomTextSection = [
        <DescriptionTextWithTopBorder theme={Theme} textNo="01." title="Create App faster at Lower" />,
        <DescriptionTextWithTopBorder theme={Theme} textNo="02." title="Create App faster at Lower" />,
        <DescriptionTextWithTopBorder theme={Theme} textNo="03." title="Create App faster at Lower" />,

    ]
    return (
        <MotionDiv>
            <ClientDashboard 
            bgImage = {<img src={bgImage}/>}
            services={true}
            textWithUpperLine = {<TextWithUpperLine theme = {Theme} title="Our Services are listed below"/>}
           
            descriptionSection = {
            <DescriptionText 
            theme={Theme} 
            title="" />}
           
           
            />
            <div className={classes.client2}>
               <span>© 2020 MabtoStrong. All rights reserved.</span>
            </div>
        </MotionDiv>
    )
}

export default ServicePage;
