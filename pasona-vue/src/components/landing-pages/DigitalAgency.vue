<template>
    <div>
        <Banner></Banner>
        <Solutions></Solutions>
        <About></About>
        <Services></Services>
        <Funfacts></Funfacts>
        <Projects></Projects>
        <Pricing></Pricing>
        <Feedback></Feedback>
        <Blog></Blog>

        <!-- Start CTA Area -->
        <section class="agency-cta-area ptb-80">
            <div class="container">
                <div class="agency-cta-content">
                    <h2>Do you have any projects?</h2>
                    <a href="#" class="btn btn-gradient">Contact Us</a>
                </div>
            </div>
        </section>
        <!-- End CTA Area -->
    </div>
</template>

<script>
import Banner from './digital-agency/Banner';
import Solutions from './digital-agency/Solutions';
import About from './digital-agency/About';
import Services from './digital-agency/Services';
import Funfacts from './digital-agency/Funfacts';
import Projects from './digital-agency/Projects';
import Pricing from './digital-agency/Pricing';
import Feedback from './digital-agency/Feedback';
import Blog from './digital-agency/Blog';
export default {
    name: 'DigitalAgency',
    components: {
        Banner,
        Solutions,
        About,
        Services,
        Funfacts,
        Projects,
        Pricing,
        Feedback,
        Blog
    }
}
</script>