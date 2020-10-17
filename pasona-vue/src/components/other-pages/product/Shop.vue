<template>
    <div>
        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>Products</h2>
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

        <!-- Start Shop Area -->
        <section class="shop-area ptb-80">
            <div class="container">
                <div class="woocommerce-topbar">
                    <div class="row align-items-center">
                        <div class="col-lg-9 col-md-7 col-sm-7">
                            <div class="woocommerce-result-count">
                                <p>Showing 1-8 of 14 results</p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-5 col-sm-5">
                            <div class="woocommerce-topbar-ordering">
                                <select class="form-control">
                                    <option value="1">Sort by Popularity</option>
                                    <option value="2">Sort by Average Rating</option>
                                    <option value="0">Sort by Latest</option>
                                    <option value="3">Sort by price: Low to High</option>
                                    <option value="4">Sort by price: High to Low</option>
                                    <option value="5">Sort by New</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <ShopItem 
                        v-for="product in products" 
                        :item="product" 
                        :key="product.id" 
                        @update-cart="updateCart"
                        class="col-lg-3 col-md-6 col-sm-6"
                    >
                    </ShopItem>

                    <div class="col-lg-12 col-md-12 col-sm-12">
						<div class="pagination-area">
							<nav aria-label="Page navigation">
								<ul class="pagination justify-content-center">
									<li class="page-item"><a class="page-link" href="#">Prev</a></li>
									<li class="page-item active"><a class="page-link" href="#">1</a></li>
									<li class="page-item"><a class="page-link" href="#">2</a></li>
									<li class="page-item"><a class="page-link" href="#">3</a></li>
									<li class="page-item"><a class="page-link" href="#">Next</a></li>
								</ul>
							</nav>
						</div>
					</div>
                </div>
            </div>
        </section>
        <!-- End Shop Area -->
    </div>
</template>

<script>
import ShopItem from './ShopItem';
export default {
    name: 'Shop',
    components: {
        ShopItem
    },
    methods: {
        updateCart(e) {
            this.cart.push(e);
            this.total = this.shoppingCartTotal;
        },
        emptyCart(){
            this.cart = [];
            this.total = 0;
        }
    },
    computed: {
        products(){
            return this.$store.state.items;
        }
    }
}
</script>