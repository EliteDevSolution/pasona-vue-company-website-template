import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    // state is the same as what would typically go inside of the data object when using Vue without Vuex.
    state: {
        items: [
            { 
                id: 1, 
                name: 'Wood Pencil', 
                price: 191.00,  
                image: require('../assets/img/shop-image/1.jpg')
            },
            { 
                id: 2, 
                name: 'T-Shirt', 
                price: 191.00,  
                image: require('../assets/img/shop-image/2.jpg')
            },
            { 
                id: 3, 
                name: 'Casual Shoe', 
                price: 100.00,  
                image: require('../assets/img/shop-image/3.jpg')
            },
            { 
                id: 4, 
                name: 'Coffee Bag', 
                price: 150.00,  
                image: require('../assets/img/shop-image/4.jpg')
            },
            { 
                id: 5, 
                name: 'Single Chair', 
                price: 131.00,  
                image: require('../assets/img/shop-image/5.jpg')
            },
            { 
                id: 6, 
                name: 'Business Card', 
                price: 35.00,  
                image: require('../assets/img/shop-image/6.jpg')
            },
            { 
                id: 7, 
                name: 'Book Cover', 
                price: 500.00,  
                image: require('../assets/img/shop-image/7.jpg')
            },
            { 
                id: 8, 
                name: 'Wall Watch', 
                price: 129.00,  
                image: require('../assets/img/shop-image/8.jpg')
            },
        ],
        cart: []
    },

    // getters are Vuex's equivalent to computed properties in Vue.
    // functions here will always contain state as a parameter
    getters: {
        total: state => {
            if(state.cart.length > 0) {
                return state.cart.map(item => item.totalPrice).reduce((total, amount) => total + amount);
            } else {
                return 0;
            }
        }
    },

    // mutations are essentially functions that update state in some way.
    // You can think of these as kind of being Vuex's equivalent to Vue's methods.
    mutations: {
        addToCart(state, payload) {
            let addedItem = state.items.find(item => item.id === payload.id)

            let existItem = state.cart.find(item => item.id == payload.id);

            if(existItem){
                existItem.productQuantity++;
                existItem.totalPrice += addedItem.price;
            } else {
                return state.cart.push(payload);
            }
            // return state.cart.push(payload);
        },

        removeFromCart(state, item){
            let index = state.cart.indexOf(item);
            state.cart.splice(index,1);
        }
    },
    // actions are effectively the functions that get called by your components in order to trigger a mutation.
    actions: {

    }
});