<template>
  <div class="order-view">
    <div class="order-content">
      <!--图片-->
      <div class="order-picture">
        1231231111111111111111111
      </div>
      <!--描述-->
      <div class="order-describe">
        123123
      </div>
      <!--属性-->
      <div class="order-params">
        123123
      </div>
      <!--单价-->
      <div class="order-price">
        123123
      </div>
      <!--金额-->
      <div class="order-total-price">
        123123
      </div>

    </div>




    <shopping-trolley v-for="orderInfo in orderInfoList" :key="orderInfo.id" :orderInfo="orderInfo" @calTotalPrice='calTotalPrice'>
    </shopping-trolley>
    <div class="bottom">
      <!--已获得数量-->
      <div class="bott_num">总共：{{totalNum}} 件</div>
      <!--总价-->

      <div class="bott_money">总和：{{totalMoney}} 元</div>
      <!--支付-->
      <div class="pay-btn">
        <button class="btn_sub" @click="payTotal">支付</button>
      </div>
    </div>
  </div>

</template>

<script>
  import ShoppingTrolley from "@/components/ShoppingTrolley"
  export default {
    name: "ShoppingTrolleyView",
    data() {
      return {
        orderInfoList: [],
        totalMoney: 0,
        totalNum: 0
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
      },
      calTotalPrice(id, num) {
        //计算数量改变后的总价
        let i = 0;
        for (i; i < this.orderInfoList.length; i++) {
          if (this.orderInfoList[i].id === id) {
            this.orderInfoList[i].totalPrice = num * this.orderInfoList[i].price;
            this.orderInfoList[i].num = num;
          }
        }
        let j = 0;
        this.totalMoney = 0;
        this.totalNum = 0;
        for (j; j < this.orderInfoList.length; j++) {
          this.totalNum += this.orderInfoList[j].num;
          this.totalMoney += this.orderInfoList[j].totalPrice;
        }



      },
      payTotal() {
        alert("模拟支付成功！！！")
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


  .pay-btn {

    margin-left: 20px;
  }

  .btn_sub {
    width: 70px;
  }

  .bott_money {
    margin-left: 20px;
  }

  .bottom {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    width: 100%;
  }

  body {
    background-color: #e8e8e8;
  }



  .order-content {
    float: left;
    width: 100%;
    background-color: #ffffff;
    /*flex 布局*/
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
     /* justify-content: space-between; */
     justify-content: center;
    /* text-align: center; */
    margin-top: 15px;
  }

  .order-describe {
    float: left;
    width: 20%;
    height: 130px;
    /* padding: 10px; */
    /*flex 布局*/
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    text-align: center;
    font-size: 14px;
  }



  .order-picture {
    width: 130px;
    height: 130px;
    line-height: 130px;
    float: left;
  }

  .order-params {
    float: left;
    width: 15%;
    height: 130px;
    /*flex 布局*/
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    text-align: center;
    font-size: 14px;
    color: #7e7e7e;
  }



  .order-total-price {
    float: left;
    width: 10%;
    height: 130px;
    line-height: 130px;
    font-size: 14px;

    /*flex 布局*/
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    text-align: center;
  }

  .order-price {
    float: left;
    width: 10%;
    height: 130px;
    line-height: 130px;
    font-size: 14px;
    color: #7e7e7e;
    text-align: center;
  }
</style>
