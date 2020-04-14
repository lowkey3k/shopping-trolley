<template>
  <span class="prod-item">
    <a href="###" class="item-href">
      <div class="prod-picture">
        <img :src="item.picture"  />
        <!-- image -->
      </div>
      <div class="prod-price">
        <strong>¥&nbsp;{{item.price}}</strong>
        <!-- price -->
      </div>
      <div class="prod-describe">
        {{item.describe}}
        <!-- describe -->
      </div>


    </a>
  </span>
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
    border-radius: 5px;
    margin-left: 40px;
    margin-top: 40px;
    border:1px solid rgba(0, 0, 0, 0.1);
  }

  .item-href {
    float: left;
    width: 200px;
    height: auto;
    text-decoration: none;
  }

  .prod-describe {
    float: left;
    width: 180px;
    font-size: 15px;
    height: auto;
    text-align: left;
    margin-left: 10px;
    color: black;
  }

  .prod-price {
    width: 190px;
    height: auto;
    font-size: 18px;
    font-family: 微软雅黑;
    color: red;
    float: left;
    text-align: left;
    margin-left: 10px;

  }

  .prod-picture img {
    height: 200px;
    width: 190px;
  }
</style>
