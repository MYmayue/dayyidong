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
          <!-- 验证码登录 -->
          <div v-show="!flag">
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
                    <span class="ma" @click="yan">{{txt}}</span>
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
          </div>
            <!-- 密码登录 -->
           <div v-show="flag">
             <div class="shou-p">
                <input
                    v-model="form.username"
                    class="shou"
                    type="text"
                    placeholder="请输入手机号"
                >
            </div> 
           <div class="yan-p">
                <input
                    v-model="form.password"
                    class="yan"
                    type="text"
                    placeholder="密码"
                >
            </div>
           </div>
           <!-- 验证码登录 -->
            <div class="deng-btn" v-show="!flag">
                <button
                    class="btn-add"
                    @click="add"
                >登录</button>
            </div>
            <!-- 密码登录 -->
            <div class="deng-btn" v-show="flag">
                <button
                    class="btn-add"
                    @click="addmima"
                >登录</button>
            </div>
            <!-- 验证码 -->
            <div class="ti" v-show="!flag">
                <p>*未注册的手机号将自动注册</p>
                <p class="ti-r" @click="mimadeng">密码登录</p>
            </div>
            <!-- 密码 -->
            <div class="ti" v-show="flag">
                <p>找回密码</p>
                <p class="ti-r" @click="yandeng">注册/验证码登录</p>
            </div>

        </div>
        <!-- 第三方 -->
        <div class="san">
            <div class="san-txt">
                <p>————————————</p>
                <p>第三方登录</p>
                <p>————————————</p>
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
        yanzheng: "",
        password:''
      },
      txt:"获取验证码",
      flag:false,
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
        var time = 60
        var timess = setInterval(()=>{
          this.txt = `还有${time}秒`
          if(time<=0){
            clearInterval(timess)
            this.txt ='获取验证码'
          }
          time--
         },1000);
        console.log(res)
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
      var obj = {
        token:res.data.data.remember_token ,
        username:res.data.data.nickname
      }
      this.$store.commit('addtoken',obj)
     if(res.data.code == 200){
       this.$router.push('/wode')
     }
    },
    mimadeng(){
      this.flag = true
    },
    yandeng(){
      this.flag = false
    },
    async addmima(){
       var reg = /^[1]([3-9])[0-9]{9}$/
        if(!reg.test(this.form.username)){
         this.$toast.fail('手机号格式不正确');
         return false
        }
        if(this.form.password==''){
            return false;
        }
         let res = await Service.post("/login",{
       mobile: this.form.username,type:1,client:'1',
       password:this.form.password
     })
     var obj = {
        token:res.data.data.remember_token,
        username:res.data.data.nickname
      }
      this.$store.commit('addtoken',obj)
     if(res.data.code == 200){
       this.$router.push('/wode')
     }
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
  display: inline-block;
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
