<template>
  <span class="prod-item">
    <div @click="handlerToDetail" class="item-href">
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


    </div>
  </span>
</template>

<script>
  export default {
    name: 'Shopping',
    props: {
      item: Object
    },
    data() {
      return {

      }
    },
    methods:{
      handlerToDetail(){
        this.$router.push({
          path:"/detail",
          query:{
            itemId: this.item.id
          }
        })
      }
    }
  }
</script>

<style scoped>
  .prod-item {
    width: 15%;
    background-color: white;
    border-radius: 5px;
    margin: 10px;
    border:1px solid rgba(135, 135, 135, 0.1);

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
