<template>
  <div>
    <Header />
    <Loading />
    <div class="content">
      <div>
        <ProductSearch />
        <ProductList />
      </div>
      <ShoppingCart />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/Header.vue';
import Loading from './components/Loading.vue';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ProductSearch from './components/ProductSearch.vue';

export default {
  name: 'app',
  methods : {
    ...mapActions('products', [
      'reloadProducts'
    ])
  },
  mounted(){
    this.reloadProducts();
  },
  components: {
    Header,
    Loading,
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
