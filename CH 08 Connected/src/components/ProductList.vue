<template>
    <div class="product-list">
        <ProductItem 
            v-for="product in products" 
            :product="product" 
            :key="product.id" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductItem from './ProductItem.vue';

export default {
    computed: {
        ...mapGetters('products', [
            'products'
        ])
    },
    components: {
        ProductItem
    }
}
</script>