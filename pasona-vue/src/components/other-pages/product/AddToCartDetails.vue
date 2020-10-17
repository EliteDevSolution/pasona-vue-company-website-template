<template>
        <form v-on:submit.prevent> 
            <div class="quantity">
                <span>Quantity:</span>
                <div class="input-counter">
                    <span @click="decrement" class="minus-btn">
                        <feather type="minus"></feather>
                    </span>
                    {{itemNumber}}
                    <span @click="increment" class="plus-btn">
                        <feather type="plus"></feather>
                    </span>
                </div>
            </div>
            
            <button @click="addToCart({ 
                id: 1, 
                name: 'Wood Pencil', 
                price: 191.00,  
                image: require('../../../assets/img/shop-image/1.jpg')
            })">Add to Cart</button>

            <a href="#" class="add-to-wishlist-btn" title="Add to Wishlist">
                <feather type="heart"></feather>
            </a>
            
            <div class="buy-btn">
                <a href="#" class="btn btn-primary">Buy it Now</a>
            </div>
        </form>
</template>

<script>
export default {
    name: 'AddToCartDetails',
    data() {
        return {
            itemNumber: 1
        }
    },
    methods: {
        increment(){
            if(this.itemNumber < 10){
                this.itemNumber++
            } else {
                this.$toasted.show('Can\'t add more than 10 items', {
                    icons: 'shopping_cart',
                    theme: "bubble", 
                    position: "top-right", 
                    duration : 3000
                });
            }
        },
        decrement(){
            if(this.itemNumber > 1){
                this.itemNumber--
            } else {
                this.$toasted.show('Can\'t add less than 1 item', {
                    icons: 'shopping_cart',
                    theme: "bubble", 
                    position: "top-right", 
                    duration : 3000
                });
            }
        },
        addToCart(item) {
            this.$toasted.show('Added to bag', {
                icons: 'shopping_cart',
                theme: "bubble", 
                position: "top-right", 
                duration : 3000
            });
            if(this.size !== '') {
                this.$store.commit({
                    type: 'addToCart',
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    productQuantity: this.itemNumber,
                    totalPrice: item.price * this.itemNumber,
                })
            }
        }
    }
}
</script>