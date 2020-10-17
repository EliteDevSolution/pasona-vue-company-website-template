<template>
    <div>
        <Banner></Banner>
        <BoxesArea></BoxesArea>
        <Services></Services>
        <ServicesArea></ServicesArea>
        <Features></Features>
        <Team></Team>
        <Funfacts></Funfacts>
        <Works></Works>
        <Pricing></Pricing>
        <Feedback></Feedback>

        <!-- Start Ready To Talk Area -->
		<section class="ready-to-talk">
			<div class="container">
				<h3>Ready to talk?</h3>
				<p>Our team is here to answer your question about StartP</p>
				<a href="#" class="btn btn-primary">Contact Us</a>
				<span><a href="#">Or, get started now with a free trial</a></span>
			</div>
		</section>
		<!-- End Ready To Talk Area -->

        <Partner></Partner>
        <Blog></Blog>
    </div>
</template>

<script>
import Banner from './it-startup/Banner';
import BoxesArea from './it-startup/BoxesArea';
import Services from './it-startup/Services';
import ServicesArea from './it-startup/ServicesArea';
import Features from './it-startup/Features';
import Team from './it-startup/Team';
import Funfacts from './it-startup/Funfacts';
import Works from './it-startup/Works';
import Pricing from './it-startup/Pricing';
import Feedback from './it-startup/Feedback';
import Partner from './it-startup/Partner';
import Blog from './it-startup/Blog';
export default {
    name: 'ITStartup',
    components: {
        Banner,
        BoxesArea,
        Services,
        ServicesArea,
        Features,
        Team,
        Funfacts,
        Works,
        Pricing,
        Feedback,
        Partner,
        Blog
    }
}
</script>