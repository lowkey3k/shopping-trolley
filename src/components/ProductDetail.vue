<template>
  <span class="prod-item">
    <div>
      <button @click="shoppingTrollery">购物车</button>
    </div>
    <div href="#" class="item-href">
      <div class="prod-picture">
        <img :src="itemDetail.picture" />
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
    </div>
  </span>
</template>
<script>
  const TROLLERYIDS = "trolleryIds";
  let id;
  let item;
  //判断购物车里是否已经加入
  function isContainsTrolley(trolleyObj, itemId) {
    var i;
    for (i=0;i<trolleyObj.length;i++) {
      let obj=trolleyObj[i];
      if(obj.id === itemId){
        return true;
      }
    }
  }


  export default {
    name: "ProductDetail",
    data() {
      return {
        itemDetail: item
      }
    },
    created() {
      //下面这种只能在这里获取到id
      // let id = this.$route.query.itemId;
      //缓存  页面图片加载不到
      let id = decodeURIComponent((new RegExp('[?|&]' + 'itemId' + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [,
        ""
      ])[
        1].replace(/\+/g, '%20')) || null
      let itemsStr = localStorage.getItem("items");
      this.itemDetail = JSON.parse(itemsStr)[id];

    },
    methods: {
      push() {
        let trolleyInfo = {
          id: this.itemDetail.id,
          num: 1
        }
        let trolleyInfoArr = [];
        trolleyInfoArr.push(trolleyInfo);
        //存储购物车内的商品id，存储为字符串，用'，'隔开
        let oldTrolley = localStorage.getItem(TROLLERYIDS);
        if (oldTrolley === null) {
          localStorage.setItem(TROLLERYIDS, JSON.stringify(trolleyInfoArr));
        } else {
          let oldTrolleryObj = JSON.parse(oldTrolley);
          if (!isContainsTrolley(oldTrolleryObj, this.itemDetail.id)) {
            oldTrolleryObj.push(trolleyInfo);
            localStorage.setItem(TROLLERYIDS, JSON.stringify(oldTrolleryObj));
          }else{
            alert("已加入购物车，无需重复添加");
          }
        }
      },
      buy() {
        alert("购买成功，前去支付")
      },
      shoppingTrollery() {
        this.$router.push({
          path: "/trolley",
          query: ""
        })
      }
    }

  }
</script>

<style scoped>
  .push-btn {
    width: 100px;
    height: 30px;
  }

  .buy-btn {
    width: 100px;
    height: 30px;
  }
</style>
