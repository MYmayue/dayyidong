<template>
    <div class="tu">
        <!-- 表头tab -->
        <van-tabs v-model="active">
        <van-tab :title="item.name" v-for="(item,index) in tabb" :key="index"></van-tab>
        </van-tabs>
        <div class="tabs">
            <van-tabs v-model="actives">
  <van-tab title="按时间">内容 1</van-tab>
  <van-tab title="按热度">内容 2</van-tab>
  <van-tab title="按价格">内容 3</van-tab>
</van-tabs>
        </div>
    </div>
</template>
<script>
import  Service from "@/http/service.js"
export default {
    data(){
        return{
            active:'',
            actives:'',
            tabb:[]
        }
    },
    methods:{
       async gettu(){
           let res = await Service.get("/book/classify")
           console.log(res)
           this.tabb = res.data.data
        }
    },
    created(){
        this.gettu()
    }
}
</script>
<style>
.tu{
    width: 100%;
    height: 100%;
}
.tabs{
    width: 60%;
    height: 50px;
}
</style>
