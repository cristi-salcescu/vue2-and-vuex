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
        @click.prevent="triggerSearch">
            Search
        </button>
    </form>
</template>

<script>
export default {
    data(){
        return {
            text : ''
        }
    },
    methods: {
        triggerSearch() {
            const query = { text: this.text };
            this.$emit('search', query);
        }
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

