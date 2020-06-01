import Vuex from 'vuex';

import products from './products';
import shoppingCart from './shoppingCart';

function Store(){
    return new Vuex.Store({
        modules : {
            products,
            shoppingCart
        }
    });
}

export default Store;