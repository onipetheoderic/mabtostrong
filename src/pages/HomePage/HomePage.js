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
        <DescriptionTextWithTopBorder theme={Theme} textNo="01." title="Create App faster at Lower" />,
        <DescriptionTextWithTopBorder theme={Theme} textNo="02." title="Create App faster at Lower" />,
        <DescriptionTextWithTopBorder theme={Theme} textNo="03." title="Create App faster at Lower" />,

    ]
    return (
        <MotionDiv>
            <ClientDashboard 
            bgImage = {<img src={bgImage}/>}
            chatBoxSection = {<YourMsg theme = {Theme}/>}
            textWithUpperLine = {<TextWithUpperLine theme = {Theme} title="Quick Delivery of Quality Products"/>}
            bannerText = {<BannerText theme={Theme} title="Grow your Business with #1 CRM"/>}
            descriptionSection = {<DescriptionText theme={Theme} title="Our Elite Team builds apps, responsive web apps,
            mobile apps, and any digital products that interacts" />}
            clientForm = {<ClientForm theme={Theme}/>}
            linedTextSection = {bottomTextSection}
            />
        </MotionDiv>
    )
}

export default HomePage;
