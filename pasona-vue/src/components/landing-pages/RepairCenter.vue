<template>
    <div>
        <Banner></Banner>
        <RepairPartner></RepairPartner>
        <About></About>
        <Services></Services>
        <Cta></Cta>
        <Funfacts></Funfacts>
        <Team></Team>
        <Feedback></Feedback>
        <WhyChooseUs></WhyChooseUs>
        <Blog></Blog>
    </div>
</template>

<script>
import Banner from './repair-center/Banner';
import RepairPartner from './repair-center/RepairPartner';
import About from './repair-center/About';
import Services from './repair-center/Services';
import Cta from './repair-center/Cta';
import Funfacts from './repair-center/Funfacts';
import Team from './repair-center/Team';
import Feedback from './repair-center/Feedback';
import WhyChooseUs from './repair-center/WhyChooseUs';
import Blog from './repair-center/Blog';

export default {
    name: 'RepairCenter',
    components: {
        Banner,
        RepairPartner,
        About,
        Services,
        Cta,
        Funfacts,
        Team,
        Feedback,
        WhyChooseUs,
        Blog
    }
}
</script>