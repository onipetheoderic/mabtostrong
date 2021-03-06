import React from 'react';

import MotionDiv from '../../components/MotionDiv';
import bgImage from '../../assets/images/bgImage3.svg';
import BannerText from '../../components/BannerText';
import ClientDashboard from '../../layouts/ClientDashboard';
import ClientForm from '../../components/ClientForm';
import DescriptionText from '../../components/DescriptionText';
import DescriptionTextWithTopBorder from '../../components/DescriptionTextWithTopBorder';
import TextWithUpperLine from '../../components/TextWithUpperLine';
import YourMsg from '../../components/YourMsg';
import { Theme } from '../../theme';
import TeamCard from '../../components/TeamCard';
import { fade, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

import One from '../../assets/images/1.jpg';
import Two from '../../assets/images/2.jpg'
import Three from '../../assets/images/3.jpg'
import Four from '../../assets/images/4.jpg'
import Five from '../../assets/images/5.jpg'


function AboutusPage() {
    const useStyles = makeStyles((theme) => ({
        teamContainer: {
            width:'30%',
            minHeight:300,
            backgroundColor:'blue',
            marginLeft:10,
            marginRight:10,
            position:'relative'
           },

        teamCont1: {
            display:'flex', 
            flexDirection:'row', 
            marginBottom:20,
            [theme.breakpoints.down('sm')]: {
                flexWrap:'wrap'
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
    }));
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
            // chatBoxSection = {<YourMsg theme = {Theme}/>}
            textWithUpperLine = {<TextWithUpperLine theme = {Theme} title="The Company"/>}
            bannerText = {<BannerText theme={Theme} title="About Mabto"/>}
            descriptionSection = {<DescriptionText theme={Theme} title="Since 2015, Mabto strong Nigeria limited has helped transform organizations in the public and private sector to leaders of their industry.
            Using a combination of cutting edge software development tools, the best and the brightest software engineers and intensive world standard pre and post development business case research analysis; we have created a niche for ourselves in the competitive world of enterprise software design and development.
            Every client and every project is unique, so we strive to deliver an individual, innovative and affordable product every time and to follow it through with an outstanding delivery which is both on time and within budget. 
            We pride ourselves on our after sales client care including our superb system security protocols, software performance warranties, intensive staff training, seamless onboarding and on and off site support.
            We have designed, developed, delivered and still maintain enterprise software and knowledge management products at the highest possible levels and at every scale.  
            Our clients across our range of services include the NNPC, NOA, REA, FMWH, ICPC, ETC AMONGST others." />}
            />
            <h1 style={{alignSelf:'center', fontSize:20, textAlign:'center'}}>Team members</h1>
            <div className={classes.teamCont1}>
                <TeamCard certification="B.Eng. MBA; 7+ years enterprise software project management." certification2="ICT business development and IT product management experience." bgImage = {Three} name="Joshua Sadoluwa" position="CEO, Chief Architect" />
                <TeamCard certification="7+ years full stack senior web developer" certification2="Senior Software Engineer/Devops, website development, ios/android application development using react native and flutter, Infrastructure as code using ansible, backend development using nodejs, ruby on rails, frontend development using Reactjs and svelte"  bgImage = {Two} name="Theoderic Onipe" position="Senior Software engineer, DevOps Engineer" />               
                <TeamCard certification="5+ years, Digital Marketing and Product Manager" certification2="Digital 	marketing and Market 	Research, and Market research" bgImage = {Four} name="Samuel Joshua" position="Product & Marketing Manager" />
                <TeamCard certification="Network infrastructure and operations " certification2="Network infrastructure management, Logistic supply chain management " bgImage = {One} name="Francis Nnorom" position="Network Infrastructure & Operations" />
                <TeamCard certification="6+ years Global certified emotional intelligence and business strategy coach" certification2="Workforce Activation Trainer, Strategy Consultant, Performance Coach" bgImage = {Five} name="Ojobo Agbo" position="Knowledge management and research LEA" />
            </div>
            <div className={classes.client2}>
               <span>© 2020 MabtoStrong. All rights reserved.</span>
            </div>
        </MotionDiv>
    )
}

export default AboutusPage;
