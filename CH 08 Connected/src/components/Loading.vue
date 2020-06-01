<template>
    <div v-if="loading">Loading ...</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['loading'])
  }
}
</script>

<style scoped>
div { 
    text-align: center;
}
</style>