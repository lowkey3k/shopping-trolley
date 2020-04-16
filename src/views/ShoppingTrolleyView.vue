<template>
 <div>

   <shopping-trollery v-for="orderInfo in orderInfoList" :key="orderInfo.id" :orderInfo="orderInfo"></shopping-trollery>

 </div>

</template>

<script>
  const TROLLERYIDS = "trolleryIds";
  let orderIds = localStorage.getItem(TROLLERYIDS);
  let itemsStr=localStorage.getItem("items");

  let itemsObj = JSON.parse(itemsStr);
  let orderInfos=[];
  let i;
  for (i=0;i<orderIds.length;i++){
    let id=orderIds[i];

    for (let j=0;j<itemsObj.length;j++){
      if (itemsObj[j].id===id){
        itemsObj[j]["num"]=1;
        itemsObj[j]["totalPrice"]=100;
        orderInfos.push(itemsObj[j]);
      }
    }
  }

  import ShoppingTrolley from "@/components/ShoppingTrolley"
    export default {
        name: "ShoppingTrollery",
        data(){
          return {
            orderInfoList: orderInfos
          }
        },
      components:{
          "shopping-trolley": ShoppingTrolley
      }
    }
</script>

<style scoped>

</style>
