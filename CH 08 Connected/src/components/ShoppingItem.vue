<template>
    <div class="shopping-cart-item">
        <div>{{product.name}}</div>
        <div>{{product.quantity}}</div>
        <div>
            <button 
                type="button" 
                @click="removeFromCart(product)">
                    Remove
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props : ["product"],
  methods: {
    ...mapActions('shoppingCart', [
        'removeFromCart'
    ])
  }  
}
</script>

<style>
.shopping-cart-item {
    padding: 10px;
    margin: 10px;
    color: #FFF;  
    background-color: #FF9C00;
    display: flex;
    flex-direction: column;
}

.shopping-cart-item div {
    margin: 5px;
}
</style>