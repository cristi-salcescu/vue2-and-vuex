<template>
  <div>
    <Header />
    <div class="content">
      <div>
        <ProductSearch @search="setQuery" />
        <ProductList @add="addToCart" :products="filteredProducts" />
      </div>
      <ShoppingCart @remove="removeFromCart" :cart="cart" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Header from './components/Header.vue';
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ProductSearch from './components/ProductSearch.vue';

//computations
function createCartProduct(map, product){
  const existingProduct = map[product.id];
  const currentQuantity = (existingProduct) ? existingProduct.quantity : 0;
  return { ...product, quantity: currentQuantity + 1 }
}

function toCartView(map) {
  const list = Object.values(map);
  return Object.freeze({
    list,
    total: list.reduce(addPrice, 0)
  });
}

function addPrice(totalPrice, line) {
  return totalPrice + line.price * line.quantity;
}

function filterProducts(products, query){
  return products.filter(product =>
    product.name.includes(query.text) 
  );
}

const products = [
  {
      'id' : 1,
      'name' : 'mango',
      'price' : 10
  },
  {
      'id' : 2,
      'name' : 'apple',
      'price': 5
  }];

export default {
  name: 'app',
  computed: {
    cart(){
      return toCartView(this.shoppingMap)
    },
    filteredProducts(){
      return filterProducts(this.products, this.query);
    }
  },
  data(){
    return {
      shoppingMap : {},
      products: products,
      query : {text: ''}
    }
  },
  methods : {
    addToCart(product) {
      const newProduct = createCartProduct(this.shoppingMap, product);
      Vue.set(this.shoppingMap, newProduct.id, newProduct);
    },
    removeFromCart(product) {
      Vue.delete(this.shoppingMap, product.id);
    },
    setQuery(query){
      this.query = query;
    }
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
