<template>
    <div>
        <Banner></Banner>
        <BoxesArea></BoxesArea>
        <FeaturesArea></FeaturesArea>
        <Features></Features>
        <Services></Services>
        <Team></Team>
        <Funfacts></Funfacts>
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
import Banner from './developer/Banner';
import BoxesArea from './developer/BoxesArea';
import FeaturesArea from './developer/FeaturesArea';
import Features from './developer/Features';
import Services from './developer/Services';
import Team from './developer/Team';
import Funfacts from './developer/Funfacts';
import Pricing from './developer/Pricing';
import Feedback from './developer/Feedback';
import Partner from './developer/Partner';
import Blog from './developer/Blog';
export default {
    name: 'Developer',
    components: {
        Banner,
        BoxesArea,
        FeaturesArea,
        Features,
        Services,
        Team,
        Funfacts,
        Pricing,
        Feedback,
        Partner,
        Blog
    }
}
</script>