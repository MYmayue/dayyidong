<template>
    <div class="wode">
         <!-- 头部 -->
         <div class="head">
             <img class="wode_img" src="@/assets/imgs/10.png" alt="">
             <p @click="deng">登录/注册</p>
         </div>
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
    padding-left: 150px;
    padding-top: 50px;
    box-sizing: border-box;
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
</style>
