<template>
  <div>
    <Header />
    <div class="content">
      <div>
        <ProductSearch 
          @search="setQuery" />

        <ProductList 
          @add="addToCart" 
          :products="products" />
      </div>
      <ShoppingCart 
        @remove="removeFromCart" 
        :cart="cart" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './components/Header.vue';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ProductSearch from './components/ProductSearch.vue';

export default {
  name: 'app',
  computed: {
    ...mapGetters([
      'products',
      'cart'
    ])
  },
  methods : {
    ...mapActions([
      'addToCart',
      'removeFromCart',
      'setQuery',
      'reloadProducts'
    ])
  },
  mounted(){
    this.reloadProducts();
  },
  components: {
    Header,
    ProductList,
    ShoppingCart,
    ProductSearch
  }
}
</script>

<style>
button {
    background: #FAF1DD;
    border: 1px solid #FAF1DD;
    color: #654321;
    padding: 5px;
    cursor: pointer;
}

input {
    padding: 10px;
    margin: 10px;
    color: #654321;
    border: 1px solid #FF9C00;
}

header {
    text-align: center;
}

.content {
    display: flex;
    width: 70%;
    margin: 0 auto;
}

.content > div{
    flex : 1;
}
</style>
