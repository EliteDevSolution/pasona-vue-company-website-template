<template>
    <tr>
        <td class="product-thumbnail">
            <a href="#">
                <img :src="item.image" alt="item">
            </a>
        </td>

        <td class="product-name">
            <a href="#">{{item.name}}</a>
        </td>

        <td class="product-price">
            <span class="unit-amount">${{item.price}}</span>
        </td>

        <td class="product-quantity">
            <div class="input-counter">
                <!-- <span class="minus-btn"><feather type="minus"></feather></span>
                <input type="text" min="1" value="1">
                <span class="plus-btn"><feather type="plus"></feather></span> -->
                {{item.productQuantity}}
            </div>
        </td>

        <td class="product-subtotal">
            <span class="subtotal-amount">${{item.totalPrice}}</span>

            <a href="javascript:void(0)" @click="removeFromCart(item)" class="remove">
                <feather type="trash-2"></feather>
            </a>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'CartItem',
    props: ['item'],
    methods: {
        removeFromCart(item){
            this.$toasted.show('Removed from bag', {
                icons: 'shopping_cart',
                theme: "bubble", 
                position: "top-right", 
                duration : 3000
            });
            this.$store.commit('removeFromCart', item);
        }
    }
}
</script>