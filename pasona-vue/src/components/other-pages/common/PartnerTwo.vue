<template>
    <!-- Start Repair Partner Area -->
    <section class="ml-partner-area pt-0 ptb-80">
        <div class="container">
            <div class="partner-slides">
                <carousel
                    :autoplay = "true" 
                    :paginationEnabled = "false"
                    :loop = "true"
                    :smartSpeed = "1000"
                    :autoplayTimeout = "5000"
                    :perPageCustom = "[[0, 2],[576, 4],[768, 4], [1200, 6]]"
                >
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="../../../assets/img/partner-img/partner-1.png" alt="image">
                                <img src="../../../assets/img/partner-img/partner-hover1.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="../../../assets/img/partner-img/partner-2.png" alt="image">
                                <img src="../../../assets/img/partner-img/partner-hover2.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="../../../assets/img/partner-img/partner-3.png" alt="image">
                                <img src="../../../assets/img/partner-img/partner-hover3.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="../../../assets/img/partner-img/partner-10.png" alt="image">
                                <img src="../../../assets/img/partner-img/partner-hover10.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="../../../assets/img/partner-img/partner-5.png" alt="image">
                                <img src="../../../assets/img/partner-img/partner-hover5.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="../../../assets/img/partner-img/partner-6.png" alt="image">
                                <img src="../../../assets/img/partner-img/partner-hover6.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    
                    <slide>
                        <div class="single-repair-partner">
                            <a href="#">
                                <img src="../../../assets/img/partner-img/partner-7.png" alt="image">
                                <img src="../../../assets/img/partner-img/partner-hover7.png" alt="image">
                            </a>
                        </div>
                    </slide>
                
                </carousel>
            </div>
        </div>
    </section>
    <!-- End Repair Partner Area -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'PartnerTwo',
    components: { Carousel, Slide }
}
</script>