<template>
  <div class="product-list-item">
    <div>{{product.name}}</div>
    <div><button type="button" @click="addToCart(product)">Add</button></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props : ["product"],
  methods: {
    ...mapActions('shoppingCart', [
      'addToCart'
    ])
  }
}
</script>

<style>
.product-list-item {
    padding: 10px;
    margin: 10px;
    background-color: #CC6500;
    color: #FFF;
}
</style>
