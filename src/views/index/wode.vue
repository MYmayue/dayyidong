<template>
    <div class="wode">
         <!-- 头部 -->
         <div class="head">
             <div class="head_l" v-show="$store.token==''">
                 <img class="wode_img" src="@/assets/imgs/10.png" alt="">
                 <p @click="deng">登录/注册</p>
             </div>
             <div class="head_r" v-show="$store.token!=''">
                 <div class="tuwen">
                 <img class="img_s"  src="@/assets/imgs/11.png" alt="">
                 <p class="p_1">{{$store.state.username}}</p>
                 </div>
                 <p class="p_2"><button class="qiand" @click="$router.push('/qian')">签到</button></p>
             </div>
         </div>
         <!-- 宫格 -->
         <div class="gong">
          <div class="gong_l">
              <p style="color:blue">0</p>
              <p>我的学习</p>
          </div>
          <div class="gong_l">
              <p style="color:red">0</p>
              <p>本周课时</p>
          </div>
          <div class="gong_l">
              <p style="color:red">1</p>
              <p>我的积分</p>
          </div>
         </div>
         <!-- xx -->
         <div class="xx"></div>
         <van-cell title="我的作业" is-link icon="todo-list-o" />
         <van-cell title="我的社区" is-link icon="send-gift-o" />
         <div class="xx"></div>
         <van-cell title="课程订单" is-link icon="todo-list-o" />
         <van-cell title="图书订单" is-link icon="send-gift-o" />
         <div class="xx"></div>
         <van-cell title="优惠券" is-link icon="todo-list-o" />
         <van-cell title="学习卡" is-link icon="send-gift-o" />
         <van-cell title="分销中心" is-link icon="send-gift-o" />
          <div class="xx"></div>
         <van-cell title="消息中戏" is-link icon="todo-list-o" />
         <van-cell title="地址管理" is-link icon="send-gift-o" />
         <van-cell title="关于我们" is-link icon="send-gift-o" />
         <van-cell title="意见反馈" is-link icon="send-gift-o" />
         <van-cell @click="shezhi" title="设置" is-link icon="send-gift-o" />
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        deng(){
            this.$router.push("/login")
        },
        shezhi(){
            this.$router.push("/shezhi")
        }
    }
}
</script>
<style>
.wode{
    width: 100%;
    height: 100%;
}
.head{
    width: 100%;
    height: 250px;
    background-image: url(imgs/4.png);
    background-repeat:no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
}
.wode_img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid blue;
}
.head p{
    font-size: 16px
}
.head_l{
    margin-left: 150px;
    margin-top: 50px;
}
.head_r{
    display: flex;
    justify-content: space-between;
    margin-left:30px;
    margin-top: 80px;
}
.tuwen{
    display: flex;
}
.img_s{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid blue;
}
.p_1{
    margin-left: 20px;
}
.p_2{
    margin-right: 5px;
}
.gong{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.gong_l{
    width: 33%;
    text-align: center;
    font-size: 16px;
}
.xx{
    width: 100%;
    height: 10px;
    background: #ddd;
    margin-top: 20px;
}
.qiand{
    width: 70px;
    height: 30px;
    background: blue;
    color: white;
    border: 0;
    border-radius: 20px;
}
</style>
