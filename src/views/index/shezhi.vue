<template>
    <div class="shezhi">
        <div class="box">
            <van-cell @click="$router.push('/she')" title="设置密码" is-link  />
         <van-cell  title="注销账号" is-link  />
         <p>
             <button class="btnd" @click="tui">退出登录</button>
         </p>
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
        tui(){
            this.$store.commit("tui")
            this.$router.push("/login")
        }
    }
}
</script>
<style>
.shezhi{
    width: 100%;
    height: 100%;
    background:#f7f8fa;
}
.box{
    width: 100%;
    height: 300px;
    background: white;
}
.btnd{
    width: 80%;
    margin-left: 10%;
    height: 40px;
    text-align: center;
    color: white;
    background: orangered;
    border: 0;
    margin-top: 100px;
}
</style>
