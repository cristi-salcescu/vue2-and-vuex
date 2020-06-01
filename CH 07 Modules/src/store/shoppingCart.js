import Vue from 'vue';
import { createActions } from '@/helpers';

const state = {
    shoppingMap : {}
}

const getters = {
    cart(state){
        return toCartView(state.shoppingMap)
    }
}    

const mutations = {
    addToCart(state, product){
        const newProduct = createCartProduct(state.shoppingMap, product);
        Vue.set(state.shoppingMap, newProduct.id, newProduct);
    },
    removeFromCart(state, product){
        Vue.delete(state.shoppingMap, product.id);
    }
}

const actions = {
    ...createActions([
        'addToCart',
        'removeFromCart'
    ])
}

//computations
function createCartProduct(map, product){
    const existingProduct = map[product.id];
    const currentQuantity = (existingProduct) ? existingProduct.quantity : 0;
    return { ...product, quantity: currentQuantity + 1 };
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

export default {
    namespaced: false,
    state,
    getters,
    mutations,
    actions
}