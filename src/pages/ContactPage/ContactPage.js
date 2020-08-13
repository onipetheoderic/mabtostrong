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

function ContactPage() {
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
            textWithUpperLine = {<TextWithUpperLine theme = {Theme} title="Contact Us Today"/>}
            bannerText = {<BannerText theme={Theme} title="We are always ready to Answer your needs"/>}
            descriptionSection = {<DescriptionText theme={Theme} title="Need a Quote or You want to make Enquiries about our Services, Contact Us on this Address" />}
            clientForm = {<ClientForm theme={Theme}/>}
            linedTextSection = {bottomTextSection}
            />
        </MotionDiv>
    )
}

export default ContactPage;
