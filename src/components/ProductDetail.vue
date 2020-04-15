<template>
  <span class="prod-item">
    <a href="#" class="item-href">
      <div class="prod-picture">
        <img :src="itemDetail.picture"/>
        <!-- image -->
      </div>

      <div class="prod-describe">
        {{itemDetail.describe}}
        <!-- describe -->
      </div>
      <div class="prod-price">
        <strong>¥&nbsp;{{itemDetail.price}}</strong>
        <!-- price -->
      </div>
      <div>
        <button @click="push" class="push-btn">加入购物车</button>
        <button @click="buy" class="buy-btn">购买</button>

      </div>
    </a>
  </span>
</template>
<script>

  const TROLLERYIDS = "trolleryIds";
  let id = decodeURIComponent((new RegExp('[?|&]' + 'itemId' + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
  let itemsStr = localStorage.getItem("items");
  let item = JSON.parse(itemsStr)[id];

  export default {

    name: "ProductDetail",

    data() {
      return {
        itemDetail: item
      }
    }
    , created() {
      //下面这种只能在这里获取到id
      // let id = this.$route.query.itemId;

    }, methods: {
      push() {
        //存储购物车内的商品id，存储在数组内，第一个存储时定义一个新的数组
        let tros = [];
        let oldTrollery = JSON.parse(localStorage.getItem("trolleryIds"));
        if (oldTrollery != null && !oldTrollery.contains(id)) {
          oldTrollery.push(id);
          localStorage.setItem(TROLLERYIDS, JSON.stringify(oldTrollery))
        } else {
          tros.push(id);
          localStorage.setItem(TROLLERYIDS, JSON.stringify(tros))
        }
      },buy(){
        alert("购买成功，前去支付")
      }
    }

  }


</script>

<style>
  .push-btn  {
    width: 100px;
    height: 30px;
  }
  .buy-btn{
    width: 100px;
    height: 30px;
  }
</style>
