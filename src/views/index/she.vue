<template>
    <div class="she">
        <!-- 头 -->
        <van-nav-bar
  title="设置密码"
  left-text="返回"
  left-arrow
  @click-left="$router.go(-1)"
/>
<!-- 设置 -->
<p>
<input class="inp" type="text" placeholder="请设置登录密码" v-model="mima" name="" id="">
</p>
<p>
<input class="inp" type="text" placeholder="请再次输入密码" v-model="quemima" name="" id="">
</p>
<p>
    <button class="btn" @click="add">提交</button>
</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mima:'',
            quemima:''
        }
    },
    methods:{
        add(){
            if(this.mima==''&&this.quemima==''){
                return alert('不能为空')
            }
            if(this.mima.length<6&&this.quemima.length<6){
                return alert('输入格式不正确')
            }
            if(this.quemima!=this.mima){
                return alert('密码不正确')
            }
            this.$router.push('/wode')
        }
    }
}
</script>
<style>
.inp{
    width: 100%;
    height: 40px;
    border: 0;
    border-bottom: 1px solid #ddd;
    margin-left: 10px;
}
.btn{
    width: 90%;
    margin-left: 5%;
    height: 35px;
    margin-top:20px;
    border: 0;
    background: orangered;
    color: white;
    line-height: 35px;
    font-size: 14px;
}
</style>
