<template>
    <!-- Start Feedback Area -->
    <section class="feedback-area ptb-80">
        <div class="container">
            <div class="section-title">
                <h2>What users Saying</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="testimonials-slides">
                <carousel 
                    :autoplay = "true" 
                    :loop = "false"
                    :autoplaySpeed = "true"
                    :autoplayTimeout = "5000"
                    :perPageCustom = "[[0, 1],[576, 1],[768, 1],[1200, 1], [1500, 1]]"
                >
                    <slide>
                        <div class="single-feedback-item">
                            <div class="client-info align-items-center">
                                <div class="image">
                                    <img src="../../../assets/img/client-image/1.jpg" alt="image">
                                </div>

                                <div class="title">
                                    <h3>Steve Lucy</h3>
                                    <span>Lead Developer at Envato</span>
                                </div>
                            </div>

                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-feedback-item">
                            <div class="client-info align-items-center">
                                <div class="image">
                                    <img src="../../../assets/img/client-image/2.jpg" alt="image">
                                </div>

                                <div class="title">
                                    <h3>David Luiz</h3>
                                    <span>Lead Developer at Envato</span>
                                </div>
                            </div>

                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-feedback-item">
                            <div class="client-info align-items-center">
                                <div class="image">
                                    <img src="../../../assets/img/client-image/3.jpg" alt="image">
                                </div>

                                <div class="title">
                                    <h3>Marta Smith</h3>
                                    <span>Lead Developer at Envato</span>
                                </div>
                            </div>

                            <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>

        <div class="shape1"><img src="../../../assets/img/shape1.png" alt="shape"></div>
        <div class="shape2 rotateme"><img src="../../../assets/img/shape2.svg" alt="shape"></div>
        <div class="shape4"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape5"><img src="../../../assets/img/shape5.png" alt="shape"></div>
        <div class="shape6 rotateme"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape7"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape8 rotateme"><img src="../../../assets/img/shape2.svg" alt="shape"></div>
    </section>
    <!-- End Feedback Area -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'Feedback',
    components: { Carousel, Slide }
}
</script>