<template>
  <div class="item-list">
    <product-item v-for="item in products" :key="item.id" :item="item"></product-item>
  </div>
</template>

<script>
  import Product from './Product'
  import image01 from '../assets/notify.jpg'
  //定义商品信息
  const prodList = [
    {
      id: 1,
      picture: image01,
      params: "1,颜色：岩石黑；内存：8+128；前置摄像：2000W像素；后置：1亿像素",
      price: 12,
      describe: 'HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
    },
    {
      id: 2,
      picture: image01,
      params: "2,颜色：岩石黑；内存：8+128；前置摄像：2000W像素；后置：1亿像素",
      price: 12,
      describe: 'HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
    }, {
      id: 3,
      picture: image01,
      params: "3,颜色：岩石黑；内存：8+128；前置摄像：2000W像素；后置：1亿像素",

      price: 12,
      describe: 'HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
    }, {
      id: 4,
      picture: image01,
      params: "4,颜色：岩石黑；内存：8+128；前置摄像：2000W像素；后置：1亿像素",

      price: 12,
      describe: 'HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
    }, {
      id: 5,
      picture: image01,
      params: "5,颜色：岩石黑；内存：8+128；前置摄像：2000W像素；后置：1亿像素",

      price: 12,
      describe: 'HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
    }, {
      id: 6,
      picture: image01,
      params: "6,颜色：岩石黑；内存：8+128；前置摄像：2000W像素；后置：1亿像素",

      price: 12,
      describe: 'HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
    }, {
      id: 7,
      picture: image01,
      params: "7,颜色：岩石黑；内存：8+128；前置摄像：2000W像素；后置：1亿像素",

      price: 12,
      describe: 'HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
    }, {
      id: 8,
      picture: image01,
      params: "8,颜色：岩石黑；内存：8+128；前置摄像：2000W像素；后置：1亿像素",

      price: 12,
      describe: 'HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
    }, {
      id: 9,
      picture: image01,
      params: "9,颜色：岩石黑；内存：8+128；前置摄像：2000W像素；后置：1亿像素",

      price: 12,
      describe: 'HuaWei mate 30 Pro 充電兩分鐘通話兩個月'
    }
  ]

  export default {
    name: 'product-list',
    components: {
      "product-item": Product
    },
    data() {
      return {
        products: prodList
      }
    },
    created() {
      localStorage.setItem("items", JSON.stringify(prodList));
    }
  };

</script>

<style>
  .item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-left;
    margin-left: 30px;
    margin-right: 30px;
  }
</style>
