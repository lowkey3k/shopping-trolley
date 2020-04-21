<template>
  <!-- <span> -->
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
      <!--金额-->
      <div class="order-total-price">
        {{orderInfo.totalPrice}}
      </div>
      <!--加减功能  文本框数量-->
      <div class="sum_cont">
        <div class="minute" @click="btn_minute(orderInfo.id)"><strong>-</strong></div>
        <input class="input" v-model="num" />
        <div class="add" @click="btn_add(orderInfo.id)"><strong>+</strong></div>
      </div>
    </div>
  <!-- </span> -->
</template>

<script>
  export default {
    name: "ShoppingTrolley",
    props: {
      orderInfo: Object
    },
    data() {
      return {
        num: 0
      }
    },
    created () {
      this.num = this.orderInfo.num;
    },
    methods: {
      btn_minute(id) {
        this.num-=1;
        if (this.num===0){
          this.num=1;
        }
        this.$emit("calTotalPrice",id,this.num)
      },
      btn_add(id) {
        this.num+=1;
        this.$emit("calTotalPrice",id,this.num)

      }
    }
  }
</script>

<style scoped>


  .order-content {
    float: left;
    width: 100%;
    background-color: #ffffff;
    /*flex 布局*/
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;
    text-align: justify;
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
    text-align: justify;
    font-size: 14px;
    margin-left: 10px;
  }



  .order-picture img {
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
    text-align: justify;
    font-size: 14px;
    color: #7e7e7e;
     margin-left: 10px;
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
    text-align: justify;

     margin-left: 10px;
  }

  .order-price {
    float: left;
    width: 10%;
    height: 130px;
    line-height: 130px;
    font-size: 14px;
    color: #7e7e7e;
     margin-left: 10px;
 margin-left: 10px;
  }


  .sum_cont {
    /* width: 120px; */
    height: 130px;
    line-height: 130px;
    float: left;
     margin-left: 10px;
  }

  /*减号*/

  .minute {
    width: 18px;
    height: 18px;
    line-height: 18px;
    font-size: 18px;
    border: 1px solid #b3b3b3;
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    cursor:pointer;
  }

  /*加号*/

  .add {
    /* float: left; */
    width: 18px;
    border: 1px solid #b3b3b3;
    height: 18px;
    line-height: 18px;
    font-size: 18px;
    display: inline-block;
    text-align: center;
    border-radius: 5px;
    cursor:pointer;
  }

  /*文本框*/

  .input {
    width: 40px;
    height: 25px;
    display: inline-block;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
  }
</style>
