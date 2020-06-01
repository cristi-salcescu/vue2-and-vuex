import api from '@/api/productsAPI';
import { createActions } from '@/helpers';

const state = {
    products: [],
    query : { text: '' }
}

const getters = {
    products(state) {
        return filterProducts(state.products, state.query);
    }
}

const mutations = {
    resetProducts(state, newProducts) {
        state.products = newProducts;
    },
    setQuery(state, newQuery) {
        state.query = newQuery;
    }    
}

const actions = {
    ...createActions([
        'setQuery'
    ]),
    reloadProducts({commit}){
        api.fetchProducts().then(products => {
            commit("resetProducts", products)
        });
    }
}

//computations  
function filterProducts(products, query){
    return products.filter(product =>
        product.name.includes(query.text) 
    );
}

export default {
    namespaced: false,
    state,
    getters,
    mutations,
    actions
}