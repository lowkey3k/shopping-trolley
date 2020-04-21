<template>
  <div class="order-view">
    <shopping-trolley v-for="orderInfo in orderInfoList" :key="orderInfo.id" :orderInfo="orderInfo">
    </shopping-trolley>
  </div>

</template>

<script>
  import ShoppingTrolley from "@/components/ShoppingTrolley"
  export default {
    name: "ShoppingTrolleyView",
    data() {
      return {
        orderInfoList: []
      }
    },
    components: {
      "shopping-trolley": ShoppingTrolley
    },
    created() {
      this.handleData()
    },
    methods: {
      handleData() {
        const TROLLERYIDS = "trolleryIds";
        let itemsStr = localStorage.getItem("items");
        let itemObjArr = JSON.parse(itemsStr);
        //购物车容器
        let trolleyInfoList = [];
        //获取购物车内容，存储的内容是商品id和商品数量，类型为json数组
        let trolleyInfos = localStorage.getItem(TROLLERYIDS);
        let trolleyInfoArrObj = JSON.parse(trolleyInfos);
        var i;
        var j;
        for (i = 0; i < trolleyInfoArrObj.length; i++) {
          for (j = 0; j < itemObjArr.length; j++) {
            if (trolleyInfoArrObj[i].id === itemObjArr[j].id) {
              let info = {
                id: trolleyInfoArrObj[i].id,
                picture: itemObjArr[j].picture,
                num: trolleyInfoArrObj[i].num,
                describe: itemObjArr[j].describe,
                params: itemObjArr[j].params,
                price: itemObjArr[j].price,
                totalPrice: itemObjArr[j].price * trolleyInfoArrObj[i].num
              }
              trolleyInfoList.push(info);
            }
          }
        }
        this.orderInfoList = trolleyInfoList
      }
      ,calTotalPrice(){

      }
    }
  }
</script>

<style scoped>
  .order-view {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* margin-left: 30px; */
    /* margin-right: 30px; */
    justify-content: center;
  }


  body{
    background-color: #e8e8e8;
  }


</style>
