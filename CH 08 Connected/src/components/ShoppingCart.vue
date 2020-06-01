<template>
    <div className="shopping-cart">
      <ShoppingItem 
        v-for="product in cart.list" 
        :product="product" 
        :key="product.id" />

      <div class="shopping-cart-total">Total: {{cart.total}}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ShoppingItem from './ShoppingItem.vue';

export default {
    computed: {
        ...mapGetters('shoppingCart', [
            'cart'
        ])
    },
    components: {
        ShoppingItem
    }
}
</script>

<style>
.shopping-cart-total {
    padding: 10px;
    margin: 10px;
    color: #654321;
    border: 1px solid #FF9C00;
}
</style>

