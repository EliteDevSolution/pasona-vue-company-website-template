<template>
    <div>
        <Banner></Banner>
        <BoxesArea></BoxesArea>
        <DomainSearch></DomainSearch>
        <WhyChooseUs></WhyChooseUs>
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
        <HostingFeatures></HostingFeatures>
        <Blog></Blog>

        <!-- Start CTA Area -->
		<section class="cta-area ptb-80">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-7 col-md-6">
						<div class="cta-content">
							<h3>Sign up for web hosting today!</h3>
						</div>
					</div>

					<div class="col-lg-5 col-md-6">
						<div class="cta-right-content">
							<div class="hosting-price">
								<span>Starting at only</span>
								<h4>$4.75/mo*</h4>
							</div>

							<div class="buy-btn">
								<a href="#" class="btn btn-primary">Get Started</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End CTA Area -->
    </div>
</template>

<script>
import Banner from './web-hosting/Banner';
import BoxesArea from './web-hosting/BoxesArea';
import DomainSearch from './web-hosting/DomainSearch';
import WhyChooseUs from './web-hosting/WhyChooseUs';
import Pricing from './web-hosting/Pricing';
import Feedback from './web-hosting/Feedback';
import Partner from './web-hosting/Partner';
import HostingFeatures from './web-hosting/HostingFeatures';
import Blog from './web-hosting/Blog';
export default {
    name: 'WebHosting',
    components: {
        Banner,
        BoxesArea,
        DomainSearch,
        WhyChooseUs,
        Pricing,
        Feedback,
        Partner,
        HostingFeatures,
        Blog
    }
}
</script>