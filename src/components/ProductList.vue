<template>
  <div>
    <product-item v-for="item in prodList" :key="item.id" :item="item"></product-item>
  </div>
</template>

<script>
  import Product from './Product'


  export default {
    name: 'product-list',
    components: {
      "product-item": Product
    },
    data () {
      return {
        prodList: [
          {
            id: 1,
            picture: 'a',
            price: 12,
            descripe: '        HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
          }
        ]
      }
    }
  }
</script>

<style>
</style>
