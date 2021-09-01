<template>
    <div class="xiang">
        <div class="xianghead">
            <div class="xiang_xin">
                <img class="xiang_img" :src="arr.avatar" alt="">
                <p class="xiang_txt">{{arr.real_name}}</p>
            </div>
        </div>
        <!-- tab栏切换 -->
        <van-tabs v-model="active">
  <van-tab title="讲师介绍">
      <p>老师简介</p>
      <p>{{arr.introduction}}</p>
  </van-tab>
  <van-tab title="主讲课程">
       <div class="zisheng">
            <!-- 信息 -->
            <div class="zi_xin" v-for="(item,index) in ke" :key="index" @click="$router.push(`/xiang_x/${item.id}`)">
                <img class="ke_img" :src="item.cover_img" alt="">
                <div class="zi_r">
                    <p style="font-size:14px">{{item.title}}</p>
                    <p class="ke_p">{{item.sales_num}}人已报名</p>
                </div>
                <div class="ke_r">
                    {{item.price}}
                </div>
            </div>
        </div>
  </van-tab>
</van-tabs>
    </div>
</template>
<script>
import  Service from "@/http/service.js"
export default {
    data(){
        return{
            arr:[],
            active:'',
            ke:[]
        }
    },
    methods:{
       async getarr(){
           let res = await Service.get('/teacher/'+this.$route.params.id)
            // console.log(res)
            this.arr = res.data.data.teacher
        },
        async getke(){
            let res = await Service.post('/teacher/mainCourse',
            {page: 1, limit: 10, teacher_id: this.$route.params.id})
            console.log(res)
            this.ke = res.data.data.list
        }
    },
    created(){
        this.getarr()
        this.getke()
    }
}
</script>
<style>
.xianghead{
    width: 100%;
    height: 120px;
    border-bottom: 1px solid #ddd;
}
.xiang_xin{
    display: flex;
    margin-left: 40px;
    margin-top: 40px;
}
.xiang_img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.xiang_txt{
    margin-left: 30px;
    font-size: 18px;
}
.ke_img{
    width: 80px;
    height: 40px;
}
.ke_p{
    margin-top: 15px;
}
.ke_r{
    margin-top: 36px;
    margin-left: 103px;
}
.zisheng{
    width: 100%;
    background: #f7f8fa;
    margin-top: 10px;
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
.zi_r{
    margin-left: 10px;
}
</style>

