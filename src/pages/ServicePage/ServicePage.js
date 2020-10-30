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

function ServicePage() {
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
            
        </MotionDiv>
    )
}

export default ServicePage;
