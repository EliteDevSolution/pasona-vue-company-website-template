<template>
    <div>
        <div class="single-products">
            <div class="products-image">
                <img :src="item.image" :alt="item.name">

                <!-- <ul>
                    <li><a href="#" data-toggle="modal" data-target="#productsModalCenter"><feather type="search"></feather></a></li>
                    <li><a href="#"><feather type="heart"></feather></a></li>
                    <li><a href="#"><feather type="link"></feather></a></li>
                </ul> -->
            </div>

            <div class="products-content">
                <h3>
                    <router-link to="/details">{{item.name}}</router-link>
                </h3>
                <span>${{item.price}}</span>
                <ul>
                    <li><i class="flaticon-star-1"></i></li>
                    <li><i class="flaticon-star-1"></i></li>
                    <li><i class="flaticon-star-1"></i></li>
                    <li><i class="flaticon-star-1"></i></li>
                    <li><i class="flaticon-star-1"></i></li>
                </ul>
                <a 
                    href="javascript:void(0)" 
                    class="add-to-cart-btn"
                    @click="addToCart(item)"
                >
                    Add to Cart
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopItem',
    props: ['item'],
    methods: {
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
                    productQuantity: 1,
                    totalPrice: item.price,
                })
            }
        }
    }
}
</script>