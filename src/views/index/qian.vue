<template>
    <div class="qian">
        <div class="qian_head">
        <!-- 头像信息 -->
        <div class="qian_tou">
            <img class="qian_img" src="@/assets/imgs/11.png" alt="">
            <div class="qian_xin">
                <p class="qian_p1">{{$store.state.username}}</p>
                <p>积分：5</p>
            </div>
            <p class="qian_r">
                <button class="qian_giu" @click="tan">签到规则</button>
            </p>
        </div>
        <!-- 日历 -->
        <div class="ri">
            <van-calendar
            row-height=30
            :poppable="false"
            :show-confirm="false"
            :style="{ height: '300px' }"
            />
        </div>
    </div>
        <!-- 好课推荐 -->
         <div class="zisheng">
            <!-- 头部 -->
            <div class="zi_head">
                <div class="zi_b">
                    <div class="zi_a"></div>
                    <p class="zi_txt">好课推荐</p>
                </div>
                <p >更多 ></p>
            </div>
            <!-- 信息 -->
            <div class="zi_xin" >
                <img class="zi_img" src="@/assets/imgs/12.png" alt="">
                <div class="zi_r">
                    <p style="font-size:14px">论渣男的自我修养</p>
                    <p class="zi_pa">1积分</p>
                </div>
            </div>
        </div>
        
        <!-- 热门图书 -->
        <div class="zisheng">
            <!-- 头部 -->
            <div class="zi_head">
                <div class="zi_b">
                    <div class="zi_a"></div>
                    <p class="zi_txt">热门图书</p>
                </div>
                <p >更多 ></p>
            </div>
            <!-- 信息 -->
            <div class="zi_xin" >
                <img class="zi_img" src="@/assets/imgs/13.png" alt="">
                <div class="zi_r">
                    <p style="font-size:14px">vue开发后台管理系统</p>
                    <p class="zi_pa">1积分</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import  Service from "@/http/service.js"
import { Dialog } from 'vant';
export default {
    data(){
        return{
            list:[]
        }
    },
    methods:{
       async getlist(){
           let res = await Service.get("/integral/shop/index?type=1&")
           console.log(res)
        },
        tan(){
            Dialog.alert({
  message: '优雅，永不过时！',
}).then(() => {
  // on close
});
        }
    },
    created(){
        this.getlist()
    }
}
</script>
<style>
.qian{
    width: 100%;
    height: 100%;
}
.qian_head{
    width: 100%;
    height: 450px;
    background-image: url(imgs/12.png);
    background-repeat:no-repeat;
    background-size: 100% 200px;
    overflow: hidden;
    /* padding-left: 20px;
    padding-top: 50px;
    box-sizing: border-box; */
}
.qian_tou{
    display: flex;
    color: white;
    align-items: center;
    margin-left: 20px;
    margin-top: 50px;
}
.qian_img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid blue;
}
.qian_xin{
    margin-left: 10px;
}
.qian_p1{
    font-size: 18px;
}
.qian_r{
    margin-left: 90px;
}
.qian_giu{
    border: 1px solid white;
    border-radius: 10px;
    width: 70px;
    height: 30px;
    background:0
}
.ri{
    width: 80%;
    margin-left: 10%;
    height: 300px;
    margin-top: 20px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 10px;
}
van-calendar{
    background: white;
}
.qian_hao{
    width: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    margin-top: 20px;
    /* height: 200px; */
    /* background: pink; */
}
.qian_a{
    display: flex;
}
.qian_c{
    width: 5px;
    height: 10px;;
    background: red;
}

.zisheng{
    width: 100%;
}
.zi_head{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    font-size: 14px;
}
.zi_b{
    display: flex;
}
.zi_a{
    background: red;
    height: 20px;
    width: 4px;
    margin-top: 15px;
}
.zi_txt{
    margin-left: 5px;
}
.zi_xin{
    width: 90%;
    height: 75px;
    background: white;
    border-radius: 5px;
    margin-left: 5%;
    display: flex;
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
}
.zi_img{
    width: 80px;
    height: 80px;
}
.zi_r{
    margin-left: 30px;
    margin-top: 10px;
}
.zi_pa{
    margin-top: 20px;
}
</style>
