<template>
    <div>
        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>About Us</h2>
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

        <!-- Start About Area -->
		<section class="about-area ptb-80">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="ml-about-img">
                            <img src="../../../assets/img/about4.png" alt="image">
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="ml-about-content">
                            <span class="sub-title">About Us</span>
                            <h2>Engaging New Audiences Through Smart Approach</h2>
                            <div class="bar"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.Donec vitae sapien ut libero venenatis faucibus tempus.</p>

                            <a href="#" class="btn btn-secondary">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>

			<div class="container">
				<div class="about-inner-area">
					<div class="row">
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="about-text">
								<h3>Our History</h3>
								<p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="about-text">
								<h3>Our Mission</h3>
								<p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
							</div>
						</div>

						<div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
							<div class="about-text">
								<h3>Who we are</h3>
								<p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End About Area -->

        <Team></Team>
        <Feedback></Feedback>
        <Funfacts></Funfacts>
        <PartnerTwo></PartnerTwo>
    </div>
</template>

<script>
import Team from '../common/Team';
import Funfacts from '../common/Funfacts';
import Feedback from '../common/Feedback';
import PartnerTwo from '../common/PartnerTwo';
export default {
    name: 'AboutStyleTwo',
    components: {
        Team,
        Funfacts,
        Feedback,
        PartnerTwo
    }
}
</script>