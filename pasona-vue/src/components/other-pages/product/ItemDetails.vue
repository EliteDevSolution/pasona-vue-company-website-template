<template>
    <div>
        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>Products Details</h2>
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

        <!-- Start Shop Details Area -->
        <section class="shop-details-area ptb-80">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5">
                        <div class="products-details-image">
                            <DetailsImage></DetailsImage>
                        </div>
                    </div>

                    <div class="col-lg-7">
                        <div class="products-details">
                            <h3>Wood Pencil</h3>

                            <div class="price">
                                <span>$200.00</span> $199.00
                            </div>
                            <ul class="rating">
                                <li><i class="flaticon-star-1"></i></li>
                                <li><i class="flaticon-star-1"></i></li>
                                <li><i class="flaticon-star-1"></i></li>
                                <li><i class="flaticon-star-1"></i></li>
                                <li><i class="flaticon-star-1"></i></li>
                            </ul>

                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                            <div class="availability">
                                Availability: <span>In Stock</span>
                            </div>

                            <AddToCartDetails></AddToCartDetails>

                            <div class="custom-payment-options">
                                <span>Guaranteed safe checkout:</span>

                                <div class="payment-methods">
                                    <img src="../../../assets/img/payment-image/1.svg" alt="image">
                                    <img src="../../../assets/img/payment-image/2.svg" alt="image">
                                    <img src="../../../assets/img/payment-image/3.svg" alt="image">
                                    <img src="../../../assets/img/payment-image/4.svg" alt="image">
                                    <img src="../../../assets/img/payment-image/5.svg" alt="image">
                                    <img src="../../../assets/img/payment-image/6.svg" alt="image">
                                    <img src="../../../assets/img/payment-image/7.svg" alt="image">
                                </div>
                            </div>

                            <div class="products-share-social">
                                <span>Share:</span>

                                <ul>
                                    <li><a href="#" class="facebook"><feather type="facebook"></feather></a></li>
                                    <li><a href="#" class="twitter"><feather type="twitter"></feather></a></li>
                                    <li><a href="#" class="linkedin"><feather type="linkedin"></feather></a></li>
                                    <li><a href="#" class="instagram"><feather type="instagram"></feather></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                        <div class="products-details-tabs">
                            <ul id="tabs">
                                <li class="active" id="tab_1">Description</li>
                            </ul>

                            <div class="content show" id="tab_1_content">
                                <div class="products-description">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing.</p>

                                    <ul class="additional-information">
                                        <li><span>Brand</span> ThemeForest</li>
                                        <li><span>Color</span> Brown</li>
                                        <li><span>Size</span> Large, Medium</li>
                                        <li><span>Weight</span> 27 kg</li>
                                        <li><span>Dimensions</span> 16 x 22 x 123 cm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Shop Details Area -->
    </div>
</template>

<script>
import DetailsImage from './DeatilsImage';
import AddToCartDetails from './AddToCartDetails';
export default {
    name: 'ItemDetails',
    components: {
        DetailsImage,
        AddToCartDetails
    }
}
</script>