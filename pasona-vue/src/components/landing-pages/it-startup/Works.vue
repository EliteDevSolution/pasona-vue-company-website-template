<template>
    <!-- Start Works Area -->
    <section class="works-area ptb-80 bg-f7fafd">
        <div class="container">
            <div class="section-title">
                <h2>Our Recent Works</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div class="works-slides">
            <carousel 
                :autoplay = "true"
                :paginationEnabled = "false"
                :loop = "true"
                :autoplaySpeed = "true"
                :autoplayTimeout = "5000"
                :perPageCustom = "[[0, 1],[768, 2],[1200, 3], [1500, 4]]"
            >
                <slide>
                    <div class="single-works">
                        <img src="../../../assets/img/works-image/1.jpg" alt="image">

                        <a href="#" class="icon"><feather type="settings"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Incredible infrastructure</a></h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                </slide>
                    
                <slide>
                    <div class="single-works">
                        <img src="../../../assets/img/works-image/2.jpg" alt="image">

                        <a href="#" class="icon"><feather type="settings"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Incredible infrastructure</a></h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                </slide>
                    
                <slide>
                    <div class="single-works">
                        <img src="../../../assets/img/works-image/3.jpg" alt="image">

                        <a href="#" class="icon"><feather type="settings"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Incredible infrastructure</a></h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                </slide>
                    
                <slide>
                    <div class="single-works">
                        <img src="../../../assets/img/works-image/4.jpg" alt="image">

                        <a href="#" class="icon"><feather type="settings"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Incredible infrastructure</a></h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                </slide>
                    
                <slide>
                    <div class="single-works">
                        <img src="../../../assets/img/works-image/5.jpg" alt="image">

                        <a href="#" class="icon"><feather type="settings"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Incredible infrastructure</a></h3>
                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>

        <div class="shape8 rotateme"><img src="../../../assets/img/shape2.svg" alt="shape"></div>
        <div class="shape2 rotateme"><img src="../../../assets/img/shape2.svg" alt="shape"></div>
        <div class="shape7"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape4"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
    </section>
    <!-- End Works Area -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'Works',
    components: { Carousel, Slide }
}
</script>