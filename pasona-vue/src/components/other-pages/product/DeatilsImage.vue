<template>
    <div>
        <ul class="slickslide">
            <carousel
                :autoplay = "true" 
                :loop = "true"
                :autoplaySpeed = "true"
                :autoplayTimeout = "2000"
                :paginationEnabled = "false"
                :perPageCustom = "[[0, 1], [768, 1], [1024, 1], [1200, 1], [1500, 1]]"
            >
                <slide>
                    <li><img src="../../../assets/img/shop-image/1.jpg" alt="img"></li>
                </slide>
                <slide>
                    <li><img src="../../../assets/img/shop-image/2.jpg" alt="img"></li>
                </slide>
                <slide>
                    <li><img src="../../../assets/img/shop-image/3.jpg" alt="img"></li>
                </slide>
                <slide>
                    <li><img src="../../../assets/img/shop-image/4.jpg" alt="img"></li>
                </slide>
                <slide>
                    <li><img src="../../../assets/img/shop-image/5.jpg" alt="img"></li>
                </slide>
            </carousel>
        </ul>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name: 'DetailsImage',
    components: { Carousel, Slide }
}
</script>