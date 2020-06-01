<template>
    <form class="search-form">
        <input
        v-model="text"
        placeholder="Product"
        type="text"
        name="text" />

        <button 
        type="search" 
        class="search-button" 
        @click.prevent="setQuery(query)">
            Search
        </button>
    </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data(){
        return {
            text : ''
        }
    },
    computed: {
        query(){
            return { text: this.text };
        }
    },
    methods: {
        ...mapActions('products', [
            'setQuery'
        ])
    }
}
</script>

<style>
.search-button {
    padding: 10px;
    margin: 10px;
    background-color: #FF9C00;
    color: #FFF;
    border: 1px solid #FF9C00;
}

.search-form {
    display: flex;
    justify-content: space-between;
 }
</style>

