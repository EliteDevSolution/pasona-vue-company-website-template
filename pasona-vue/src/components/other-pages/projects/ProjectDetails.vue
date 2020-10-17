<template>
    <div>
        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>Project Details</h2>
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

        <!-- Start Project Details Area -->
		<section class="project-details-area ptb-80">
            <div class="container">
                <CoolLightBox 
                    :items = "items" 
                    :index = "index"
                    loop
                    @close = "index = null">
                </CoolLightBox>
                <div class="row">

                    <div
                        class="col-lg-6 col-md-6 col-sm-6"
                        v-for="(image, imageIndex) in items"
                        :key="imageIndex"
                    >
                        <div class="project-details-image">
                            <img :src="image.src" alt="work">

                            <a @click="setIndex(imageIndex)" class="popup-btn"><feather type="plus"></feather></a>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                        <div class="project-details-desc">
                            <h3>Network Marketing</h3>
							
                            <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis. Primis nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise.  Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p>

                            <p>Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis. Primis nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise.  Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p>

                            <div class="project-details-information">
                                <div class="single-info-box">
                                    <h4>Happy Client</h4>
                                    <p>John Doe</p>
                                </div>

                                <div class="single-info-box">
                                    <h4>Category</h4>
                                    <p>Portfolio, Personal</p>
                                </div>

                                <div class="single-info-box">
                                    <h4>Date</h4>
                                    <p>February 28, 2019</p>
                                </div>

                                <div class="single-info-box">
                                    <h4>Share</h4>
                                    <ul>
                                        <li><a href="#"><feather type="facebook"></feather></a></li>
                                        <li><a href="#"><feather type="twitter"></feather></a></li>
                                        <li><a href="#"><feather type="instagram"></feather></a></li>
                                        <li><a href="#"><feather type="linkedin"></feather></a></li>
                                    </ul>
                                </div>

                                <div class="single-info-box">
                                    <a href="#" class="btn btn-primary">Live Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		<!-- End Project Details Area -->
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox';
export default {
    name: 'ProjectDetails',
    components: {
        CoolLightBox
    },
    data: function () {
        return {
        items: [
            {
                src: require('../../../assets/img/works-image/1.jpg'),
            },
            {
                src: require('../../../assets/img/works-image/2.jpg'),
            },
            {
                src: require('../../../assets/img/works-image/3.jpg'),
            },
            {
                src: require('../../../assets/img/works-image/4.jpg'),
            }
        ],
        index: null
        };
    },
    methods: {
        setIndex(index) {
            this.index = index
        }
    }
}
</script>