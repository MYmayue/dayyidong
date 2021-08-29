<template>
    <div class="login">
        <!-- 头部  -->
        <van-nav-bar
            left-text="返回"
            left-arrow
            @click-left="$router.go(-1)"
        />

        <!-- 标题 -->
        <div class="biao">
            <div class="tu">
                <img
                    src="@/assets/imgs/1.png"
                    alt=""
                >
                <div class="txt">
                    <p class="txt-1">每时没课 因你而设</p>
                    <p class="txt-2">在线辅导 · 答疑 · 陪读</p>
                </div>
            </div>
        </div>

        <!-- 登录 -->
        <div class="deng">
            <div class="shou-p">
                <img
                    class="shou-img"
                    src="@/assets/imgs/2.png"
                    alt=""
                >
                <input
                    v-model="form.username"
                    class="shou"
                    type="text"
                    placeholder="请输入手机号"
                >
                <p class="btn">
                    <button
                        class="ma"
                        @click="yan"
                    >获取验证码</button>
                </p>

            </div>
            <div class="yan-p">
                <img
                    class="yan-img"
                    src="@/assets/imgs/3.png"
                    alt=""
                >
                <input
                    v-model="form.yanzheng"
                    class="yan"
                    type="text"
                    placeholder="请输入验证码"
                >
            </div>
            <div class="deng-btn">
                <button
                    class="btn-add"
                    @click="add"
                >登录</button>
            </div>
            <div class="ti">
                <p>*未注册的手机号将自动注册</p>
                <p class="ti-r">密码登录</p>
            </div>
        </div>
        <!-- 第三方 -->
        <div class="san">
            <div class="san-txt">
                <p>————————————</p>
                <p>第三方登录</p>
                <p>————————————</p>
            </div>
            <div class="san-tu">

            </div>
        </div>
    </div>
</template>
<script>
import  Service from "@/http/service.js"
export default {
  data() {
    return {
      form: {
        username: "",
        yanzheng: ""
      }
    };
  },
  methods: {
  async yan() {
        var reg = /^[1]([3-9])[0-9]{9}$/
        if(!reg.test(this.form.username)){
         this.$toast.fail('手机号格式不正确');
         return false
        }
       let res = await Service.post('/smsCode',{
          mobile: this.form.username,
          sms_type: "login"
        })
        // console.log(res)
    },
   async add() {
        if(this.form.yanzheng==''){
            return false;
        }
      let res = await Service.post("/login",{
       mobile: this.form.username,type:2,client:'1',
       sms_code:this.form.yanzheng
     })
      console.log(res)
     if(res.data.code == 200){
       this.$router.push('/she')
     }
     console.log(res)
   
    }
  }
};
</script>
<style>
.login {
  width: 100%;
  height: 100%;
}
.biao {
  padding-top: 60px;
  padding-left: 30px;
  box-sizing: border-box;
}
.tu {
  display: flex;
  color: orangered;
}
.tu img {
  width: 120px;
  height: 120px;
}
.txt-1 {
  font-size: 18px;
  border-bottom: 1px solid orangered;
  font-weight: 900;
  letter-spacing: 3px;
  margin-top: 35px;
  margin-left: 10px;
}
.txt-2 {
  font-size: 14px;
  letter-spacing: 3px;
  margin-top: 5px;
  margin-left: 10px;
}
.deng {
  padding-left: 40px;
  box-sizing: border-box;
  margin-top: 40px;
}
.shou {
  border: 0;
  border-bottom: 1px solid #ccc;
  margin-left: 20px;
  height: 40px;
  display: block;
}
.yan {
  border: 0;
  border-bottom: 1px solid #ccc;
  margin-left: 20px;
  height: 40px;
  display: block;
}
.shou-img {
  width: 30px;
  height: 40px;
  display: block;
}
.yan-img {
  width: 30px;
  height: 40px;
  display: block;
}
.shou-p {
  display: flex;
}
.yan-p {
  margin-top: 20px;
  display: flex;
}
.ma {
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: white;
  background: orangered;
  border: none;
  margin-top: 5px;
}
.btn {
  border-bottom: 1px solid #ccc;
}
.deng-btn {
  margin-top: 40px;
}
.btn-add {
  width: 295px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: orangered;
  color: white;
  border: 0;
  font-size: 18px;
  border-radius: 5px;
  letter-spacing: 5px;
}
.ti {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #ccc;
  margin-top: 10px;
}
.ti-r {
  margin-right: 40px;
}
.san {
  margin-top: 60px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
.san-txt {
  color: #ccc;
  display: flex;
  justify-content: space-between;
}
</style>
