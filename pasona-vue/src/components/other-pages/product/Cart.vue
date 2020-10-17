<template>
    <div>
        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>Cart</h2>
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

        <!-- Start Cart Area -->
		<section class="cart-area ptb-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <form v-if="shoppingCart.length !== 0">
                            <div class="cart-table table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                        </tr>
                                    </thead>

                                    <transition-group name="list" tag="tbody">
                                        <CartItem
                                            v-for="product in shoppingCart"
                                            :item="product"
                                            :key="product.name"
                                        ></CartItem>
                                    </transition-group>
                                </table>
                            </div>

                            <div class="cart-buttons">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="continue-shopping-box">
                                            <a href="#" class="btn btn-light">Continue Shopping</a>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div class="cart-totals">
                                            <h3>Cart Totals</h3>

                                            <ul>
                                                <li>Subtotal <span>${{totalAmount.toFixed(1)}}</span></li>
                                                <li>Shipping <span>$10.00</span></li>
                                                <li>Total <span><b>${{(totalAmount + 10).toFixed(1)}}</b></span></li>
                                            </ul>
                                            <router-link to="/checkout" class="btn btn-primary">Proceed to Checkout</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div v-else>
                            <h2>Cart Is Empty!</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		<!-- End Cart Area -->
    </div>
</template>

<script>
import CartItem from './CartItem';
export default {
    name: 'Cart',
    components: {
        CartItem
    },
    computed: {
        shoppingCart() {
            return this.$store.state.cart
        },
        totalAmount() {
          return this.$store.getters.total
        }
    }
}
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>