<template>
    <div>
        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>Features Details</h2>
                    </div>
                </div>
			</div>
			
			<div class="shape1"><img src="../../../assets/img/shape1.png" alt="shape"></div>
			<div class="shape2 rotateme"><img src="../../../assets/img/shape2.svg" alt="shape"></div>
			<div class="shape3"><img src="../../../assets/img/shape3.svg" alt="shape"></div>
			<div class="shape4"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
			<div class="shape5"><img src="../../../assets/img/shape5.png" alt="shape"></div>
			<div class="shape6 rotateme"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
			<div class="shape7"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
			<div class="shape8 rotateme"><img src="../../../assets/img/shape2.svg" alt="shape"></div>
        </div>
        <!-- End Page Title -->

        <!-- Start Features Details Area -->
        <section class="features-details-area ptb-80">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 features-details-image">
                        <img src="../../../assets/img/features-details-image/1.png" class="wow fadeInUp" alt="image">
                    </div>

                    <div class="col-lg-6 features-details">
                        <div class="features-details-desc">
                            <h3>Information Retrieval</h3>
                            <p>Build integration aute irure design in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat design proident.</p>

                            <ul class="features-details-list">
                                <li>Life time supports</li>
                                <li>Exclusive design</li>
                                <li>Solve your problem with us</li>
                                <li>We Provide Awesome Services</li>
                                <li>Your business deserves best Software</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="separate"></div>

                <div class="row align-items-center">
					<div class="col-lg-6 features-details">
						<div class="features-details-desc">
							<p>Took a galley of type and scrambled it to make a type specimen book. survived not only five centuries, but also the leap into electronic remaining. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer when an unknown.</p>

							<div class="features-details-accordion">
								<div role="tablist">
                                    <VueFaqAccordion 
                                        :items="myItems"
                                    />
                                </div>
							</div>
						</div>
                    </div>
                    
					<div class="col-lg-6 features-details-image">
						<img src="../../../assets/img/features-details-image/2.png" class="wow fadeInUp" alt="image">
					</div>
				</div>
            </div>
        </section>
        <!-- End Features Details Area -->
    </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion';
export default {
    name: 'FeatureDetails',
    components: {
        VueFaqAccordion
    },
    data() {
        return {
            text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.`,
            myItems: [
                {
                    title: 'How many time zones are there in all?',
                    value: 'Given a 24-hour day and 360 degrees of longitude around the Earth'
                },
                {
                    title: 'How long is a day and year on Venus?',
                    value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.'
                },
                {
                    title: 'What animal smells like popcorn?',
                    value: 'Binturongs smell like popcorn.'
                }
            ]
        }
    }
}
</script>