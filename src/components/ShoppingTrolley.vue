<template>
  <div class="order-content">
    <!--图片-->
    <div class="order-picture">
      <img :src="orderInfo.picture">
    </div>
    <!--描述-->
    <div class="order-describe">
      {{orderInfo.describe}}
    </div>
    <!--属性-->
    <div class="order-params">
      {{orderInfo.params}}
    </div>

    <!--单价-->
    <div class="order-price">
      {{orderInfo.price}}
    </div>
    <!--数量-->
    <div class="order-num">
      {{orderInfo.num}}
    </div>
    <!--金额-->
    <div class="order-total-price">
        {{orderInfo.totalPrice}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShoppingTrolley",
    props:{
      orderInfo: Object
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
  .order-content{
    
  }
  .order-describe{
    
  }
  .order-num{
    
  }
  .order-picture{
    
  }
  .order-params{
    
  }
  .order-total-price{
    
  }
</style>
