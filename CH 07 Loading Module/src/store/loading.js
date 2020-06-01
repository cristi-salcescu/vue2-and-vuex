
import { createActions } from '@/helpers';

const state = {
    loading: false
}

const getters = {
    loading(state){
        return state.loading
    }
}

const mutations = {
    showLoading(state){
        state.loading = true;
    },
    hideLoading(state){
        state.loading = false;
    }
}

const actions = {
    ...createActions([
        'showLoading',
        'hideLoading'
    ])
}

export default {
    namespaced: false,
    state,
    getters,
    mutations,
    actions
}
