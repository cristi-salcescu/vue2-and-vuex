import Vue from 'vue';
import Vuex from 'vuex'
import { createActions } from './helpers';
import api from './api/productsAPI';

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

function Store(){
  return new Vuex.Store({
    state: {
      products: [],
      shoppingMap : {},
      query : { text: '' }
    },
    getters: {
      cart(state){
        return toCartView(state.shoppingMap)
      },
      products(state) {
        return filterProducts(state.products, state.query);
      }
    },    
    mutations: {
      resetProducts(state, newProducts) {
        state.products = newProducts;
      },
      setQuery(state, newQuery) {
        state.query = newQuery;
      },
      addToCart(state, product){
        const newProduct = createCartProduct(state.shoppingMap, product);
        Vue.set(state.shoppingMap, newProduct.id, newProduct);
      },
      removeFromCart(state, product){
        Vue.delete(state.shoppingMap, product.id);
      }
    },
    actions: {
      ...createActions([
        'setQuery',
        'addToCart',
        'removeFromCart'
      ]),
      reloadProducts({commit}){
        api.fetchProducts().then(products => {
          commit("resetProducts", products)
        });
      }
    }
  });
}

export default Store;