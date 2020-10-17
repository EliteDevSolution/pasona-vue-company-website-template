<template>
    <!-- Start ML Feedback Area -->
    <section class="ml-feedback-area ptb-80">
        <div class="container">
            <div class="section-title">
                <span class="sub-title">Testimonials</span>
                <h2>Our Clients Feedback</h2>
                <div class="bar"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class="ml-feedback-slides">
                <carousel 
                    :autoplay = "true"
                    :loop = "true"
                    :smartSpeed = "1000"
                    :autoplaySpeed = "true"
                    :autoplayTimeout = "5000"
                    :perPageCustom = "[[0, 1],[576, 1],[768, 1],[1024, 1], [1200, 1]]"
                >
                    <slide>
                        <div class="single-ml-feedback-item">
                            <div class="client-info">
                                <img src="../../../assets/img/client-image/1.jpg" alt="image">
                                <h3>Sarah Taylor</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>
                            <div class="rating">
                                <feather type="star"></feather>
                                <feather type="star"></feather>
                                <feather type="star"></feather>
                                <feather type="star"></feather>
                                <feather type="star"></feather>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-ml-feedback-item">
                            <div class="client-info">
                                <img src="../../../assets/img/client-image/3.jpg" alt="image">
                                <h3>Steven Smith</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>
                            <div class="rating">
                                <feather type="star"></feather>
                                <feather type="star"></feather>
                                <feather type="star"></feather>
                                <feather type="star"></feather>
                                <feather type="star"></feather>
                            </div>
                        </div>
                    </slide>

                    <slide>
                        <div class="single-ml-feedback-item">
                            <div class="client-info">
                                <img src="../../../assets/img/client-image/2.jpg" alt="image">
                                <h3>James Eva</h3>
                                <span>CEO at Envato</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>
                            <div class="rating">
                                <feather type="star"></feather>
                                <feather type="star"></feather>
                                <feather type="star"></feather>
                                <feather type="star"></feather>
                                <feather type="star"></feather>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
        
        <div class="user-shape1"><img src="../../../assets/img/agency-image/user1.png" alt="image"></div>
        <div class="user-shape2"><img src="../../../assets/img/agency-image/user2.png" alt="image"></div>
        <div class="user-shape3"><img src="../../../assets/img/agency-image/user3.png" alt="image"></div>
        <div class="user-shape4"><img src="../../../assets/img/agency-image/user4.png" alt="image"></div>
        <div class="user-shape5"><img src="../../../assets/img/agency-image/user5.png" alt="image"></div>
        <div class="user-shape6"><img src="../../../assets/img/agency-image/user6.png" alt="image"></div>
    </section>
    <!-- End ML Feedback Area -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'Feedback',
    components: { Carousel, Slide }
}
</script>