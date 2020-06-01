import Vuex from 'vuex';

import products from './products';
import shoppingCart from './shoppingCart';
import loading from './loading';

function Store(){
    return new Vuex.Store({
        modules : {
            products,
            shoppingCart,
            loading
        }
    });
}

export default Store;