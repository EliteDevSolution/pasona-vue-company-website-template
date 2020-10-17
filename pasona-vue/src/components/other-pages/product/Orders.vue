<template>
    <div class="col-lg-6 col-md-12">
        <div class="order-details">
            <h3 class="title">Your Order</h3>

            <div class="order-table table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr
                            v-for="product in shoppingCart"
                            :key="product.name"
                        >
                            <td class="product-name">
                                <a href="#">{{product.name}}</a>
                            </td>

                            <td class="product-total">
                                <span class="subtotal-amount">${{product.totalPrice}}</span>
                            </td>
                        </tr>
                        
                        <tr>
                            <td class="order-subtotal">
                                <span>Cart Subtotal</span>
                            </td>

                            <td class="order-subtotal-price">
                                <span class="order-subtotal-amount">${{totalAmount.toFixed(1)}}</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="order-shipping">
                                <span>Shipping</span>
                            </td>

                            <td class="shipping-price">
                                <span>$10.00</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="total-price">
                                <span>Order Total</span>
                            </td>

                            <td class="product-subtotal">
                                <span class="subtotal-amount">${{(totalAmount + 10).toFixed(1)}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="payment-method">
                <p>
                    <input type="radio" id="direct-bank-transfer" name="radio-group" checked>
                    <label for="direct-bank-transfer">Direct Bank Transfer</label>

                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
                <p>
                    <input type="radio" id="paypal" name="radio-group">
                    <label for="paypal">PayPal</label>
                </p>
                <p>
                    <input type="radio" id="cash-on-delivery" name="radio-group">
                    <label for="cash-on-delivery">Cash on Delivery</label>
                </p>
            </div>

            <a href="javascript:void(0)" @click="placeOrder" class="btn btn-primary order-btn">Place Order</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Orders',
    methods: {
        placeOrder(){
            this.$toasted.show('Thanks for the order', {
                icons: 'shopping_cart',
                theme: "bubble", 
                position: "top-right", 
                duration : 3000
            });

            this.$store.state.cart = [];
            this.$router.push("/")
        }
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