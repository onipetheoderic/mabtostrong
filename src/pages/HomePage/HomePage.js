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

function HomePage() {
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
        </MotionDiv>
    )
}

export default HomePage;
