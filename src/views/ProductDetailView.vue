<template>
  <div>
    <product-detail></product-detail>
  </div>
</template>

<script>
  import ProductDetail from '@/components/ProductDetail'

  export default {
    name: "ProductDetailView",
    components: {
      'product-detail': ProductDetail
    },
    data() {
      return {}
    }
  }
</script>

<style>
  .prod-detail{

  }


</style>
