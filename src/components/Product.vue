<template>
  <div class="prod-item">
    <a href="###" class="pet_topci_block">
      <div class="prod-picture">
        <img :src="picture" alt="">
        <!-- image -->
      </div>

      <div class="prod-descripe">
        {{item.descripe}}
        <!-- descripe -->
      </div>
      <div class="prod-price">
        {{price}}
        <!-- price -->
      </div>

    </a>
  </div>
</template>

<script>
  export default {
    name: 'Shopping',
    props: {
      item: Object
    },
    data() {
      return {}
    }
  }
</script>

<style>
  .prod-item {
    width: 200px;
    float: left;
    background-color: white;
    border-radius: 5px
  }

  .item-href {
    float: left;
    width: 200px;
    height: auto;
    text-decoration: none;
  }

  .prod-descripe {
    float: left;
    width: 200px;
    height: auto;
  }

  .prod-price {
    width: 100px;
    height: auto;
    font-size: 20px;
    font-family: 微软雅黑;
    color: red;
  }

  .prod-picture img {
    height: 200px;
    width: 200px;
  }
</style>
