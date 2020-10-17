<template>
    <div>
        <Banner></Banner>
        <Partner></Partner>
        <Services></Services>
        <Cta></Cta>
        <Funfacts></Funfacts>
        <Features></Features>
        <FeaturesTwo></FeaturesTwo>
        <Team></Team>
        <Feedback></Feedback>
        <WhyChooseUs></WhyChooseUs>
        <Blog></Blog>
    </div>
</template>

<script>
import Banner from './iot/Banner';
import Partner from './iot/Partner';
import Services from './iot/Services';
import Cta from './iot/Cta';
import Funfacts from './iot/Funfacts';
import Features from './iot/Features';
import FeaturesTwo from './iot/FeaturesTwo';
import Team from './iot/Team';
import Feedback from './iot/Feedback';
import WhyChooseUs from './iot/WhyChooseUs';
import Blog from './iot/Blog';
export default {
    name: 'Iot',
    components: {
        Banner,
        Partner,
        Services,
        Cta,
        Funfacts,
        Features,
        FeaturesTwo,
        Team,
        Feedback,
        WhyChooseUs,
        Blog
    }
}
</script>