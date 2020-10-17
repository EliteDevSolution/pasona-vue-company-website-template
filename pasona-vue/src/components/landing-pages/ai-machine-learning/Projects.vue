<template>
    <!-- Start ML Projects Area -->
    <section class="ml-projects-area pt-0 ptb-80">
        <div class="container">
            <div class="section-title">
                <h2>Proud Projects That Make Us Stand Out</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div class="container-fluid">
            <div class="ml-projects-slides">
                <carousel 
                    :autoplay = "true" 
                    :paginationEnabled = "false"
                    :loop = "true"
                    :smartSpeed = "1000"
                    :autoplayTimeout = "5000"
                    :perPageCustom = "[[0, 1],[576, 2],[768, 2], [1024, 3], [1200, 4]]"
                >
                    <slide>
                        <div class="single-ml-projects-box">
                            <img src="../../../assets/img/projects-img1.jpg" alt="image">
                        
                            <div class="plus-icon">
                                <a href="#">
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-ml-projects-box">
                            <img src="../../../assets/img/projects-img2.jpg" alt="image">
                        
                            <div class="plus-icon">
                                <a href="#">
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-ml-projects-box">
                            <img src="../../../assets/img/projects-img3.jpg" alt="image">
                        
                            <div class="plus-icon">
                                <a href="#">
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-ml-projects-box">
                            <img src="../../../assets/img/projects-img4.jpg" alt="image">
                        
                            <div class="plus-icon">
                                <a href="#">
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-ml-projects-box">
                            <img src="../../../assets/img/projects-img5.jpg" alt="image">
                        
                            <div class="plus-icon">
                                <a href="#">
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    </slide>
                
                </carousel>
            </div>
        </div>

        <div class="shape2 rotateme"><img src="../../../assets/img/shape2.svg" alt="shape"></div>
        <div class="shape3"><img src="../../../assets/img/shape3.svg" alt="shape"></div>
        <div class="shape4"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape6 rotateme"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape7"><img src="../../../assets/img/shape4.svg" alt="shape"></div>
        <div class="shape8 rotateme"><img src="../../../assets/img/shape2.svg" alt="shape"></div>
    </section>
    <!-- End ML Projects Area -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'Projects',
    components: { Carousel, Slide }
}
</script>