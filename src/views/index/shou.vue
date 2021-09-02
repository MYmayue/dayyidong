<template>
    <div class="shou">
        <!-- 搜索 -->
        <div class="search">
            <img class="search-l" src="@/assets/imgs/5.png" alt="">
            <input class="search-i" placeholder="搜索" type="text">
            <img class="search-r" src="@/assets/imgs/6.png" alt="">
        </div>
        <!-- 轮播 -->
        <div class="lun">
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
      <img class="lun_img" src="@/assets/imgs/7.png" alt="">
  </van-swipe-item>
  <van-swipe-item>
      <img class="lun_img" src="@/assets/imgs/8.png" alt="">
  </van-swipe-item>
</van-swipe>
        </div>
        <!-- 大威天龙 -->
        <div class="dawei">
            <div>
                <img src="@/assets/imgs/9.png" alt="">
                <p>大威天龙</p>
            </div>
        </div>

        <!-- 资深讲师 -->
        <div class="zisheng">
            <!-- 头部 -->
            <div class="zi_head">
                <div class="zi_b">
                    <div class="zi_a"></div>
                    <p class="zi_txt">资深讲师</p>
                </div>
                <p @click="addzi">更多 ></p>
            </div>
            <!-- 信息 -->
            <div class="zi_xin" v-for="(item,index) in zi" :key="index">
                <img class="zi_img" :src="item.teacher_avatar" alt="">
                <div class="zi_r">
                    <p style="font-size:14px">{{item.teacher_name}}</p>
                    <p>{{item.introduction}}</p>
                </div>
            </div>
        </div>
        <!-- 推荐课程 -->
         <div class="zisheng">
            <!-- 头部 -->
            <div class="zi_head">
                <div class="zi_b">
                    <div class="zi_a"></div>
                    <p class="zi_txt">推荐课程</p>
                </div>
                <p>更多 ></p>
            </div>
            <!--  -->
            <van-card
                v-for="(item,index) in ke" :key="index"
                :num="item.price"
                :price="item.sales_num+'人已报名'"
                :title="item.title"
                :thumb="item.cover_img"
            />
            <!-- 信息 -->
           <!-- <div class="zi_xin" v-for="(item,index) in ke" :key="index">
                <img class="ke_img" :src="item.cover_img" alt="">
                <div class="zi_r">
                    <p style="font-size:14px">{{item.title}}</p>
                    <p class="ke_p">{{item.sales_num}}人已报名</p>
                </div>
                <div class="ke_r">
                    {{item.price}}
                </div>
            </div> -->
        </div> 
        <!-- 名师 -->
        <div class="zisheng">
            <!-- 头部 -->
            <div class="zi_head">
                <div class="zi_b">
                    <div class="zi_a"></div>
                    <p class="zi_txt">名师</p>
                </div>
                <p>更多 ></p>
            </div>
            <!-- 信息 -->
            <div class="zi_xin" v-for="(item,index) in ming" :key="index">
                <img class="zi_img" :src="item.teacher_avatar" alt="">
                <div class="zi_r">
                    <p style="font-size:14px">{{item.teacher_name}}</p>
                    <p>{{item.introduction}}</p>
                </div>
            </div>
        </div>
        <!--  -->
    </div>
</template>
<script>
import  Service from "@/http/service.js"
export default {
    data(){
        return{
            zi:[],
            ke:[],
            ming:[]
        }
    },
    methods:{
       async getlist(){
           let res =await Service.get('/recommend/appIndex')
        //    console.log(res.data.data)
           this.zi = res.data.data[0].list
           this.ke = res.data.data[1].list
           this.ming = res.data.data[2].list
        },
        addzi(){
                this.$router.push("/ke")
        }
    },
    created(){
        this.getlist()
    }
}
</script>
<style>
.shou{
    width: 100%;
    background: #f7f8fa;
    height: 100%;
}
.search{
    background: white;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    box-sizing: border-box;
}
.search-l{
    width: 30px;
    height: 30px;
}
.search-i{
    width: 250px;
    height: 30px;
    border-radius: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    position: relative;
}
.search-i::after{
    content: "搜搜";
    display: inline-block;
    color: red;
    position: absolute;
    top: 0;
    left: 0;
}
.search-r{
    width: 20px;
    height: 20px;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 150px;
}
.lun_img{
      width: 100%;
      height: 100%;
  }
.dawei{
      background: white;
      width: 100%;
      height: 100px;
      padding-left: 30px;
      padding-top: 30px;
      box-sizing: border-box;
  }
.dawei img{
      width: 40px;
      height: 50px;
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
</style>
