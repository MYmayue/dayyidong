<template>
    <div class="ke">
         <div class="zi_xin" v-for="(item,index) in list" :key="index">
                <img class="zi_img" :src="item.avatar" alt="">
                <div class="zi_r">
                    <p style="font-size:14px">{{item.teacher_name}}</p>
                    <p>{{item.introduction}}</p>
                </div>
            </div>
    </div>
</template>
<script>
import  Service from "@/http/service.js"
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
      async getlist(){
            let res = await Service.get('/teacher/search/attrs')
            console.log(res)
            this.list = res.data.data.list
        }
    },
    created(){
       this.getlist()
    }
}
</script>
<style>
.ke{
    width: 100%;
    height: 100%;
    background: #f7f8fa;
    overflow: hidden;
}
.zi_xin{
    width: 90%;
    height: 75px;
    background: white;
    border-radius: 5px;
    margin-left: 5%;
    display: flex;
    padding-left: 40px;
    padding-top: 20px;
    box-sizing: border-box;
    margin-top: 20px;
}
.zi_img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
.zi_r{
    margin-left: 10px;
}
</style>
