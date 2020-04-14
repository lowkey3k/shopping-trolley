<template>
  <div class="item-list">
    <product-item v-for="item in prodList" :key="item.id" :item="item"></product-item>
    <span></span>
  </div>
</template>

<script>
  import Product from './Product'
  import image01 from '../assets/notify.jpg'

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
            picture: image01,
            price: 12,
            describe: '        HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
          },
          {
            id: 2,
            picture: image01,
            price: 12,
            describe: '        HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
          },{
            id: 3,
            picture: image01,
            price: 12,
            describe: '        HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
          },{
            id: 4,
            picture: image01,
            price: 12,
            describe: '        HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
          },{
            id: 5,
            picture: image01,
            price: 12,
            describe: '        HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
          },{
            id: 6,
            picture: image01,
            price: 12,
            describe: '        HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
          },{
            id: 7,
            picture: image01,
            price: 12,
            describe: '        HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
          },{
            id: 8,
            picture: image01,
            price: 12,
            describe: '        HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
          },{
            id: 9,
            picture: image01,
            price: 12,
            describe: '        HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
          }
        ]
      }
    }
  }
</script>

<style>
  .item-list{
  }
</style>
