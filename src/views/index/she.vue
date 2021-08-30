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
        <div class='from'>
            <p class="from_p"><input v-model="form.iphone"  type="text" placeholder="请输入手机号"> <span @click="addma">{{txt}}</span></p>
            <p class="from_p"><input v-model="form.yanzheng"  type="text" placeholder="请输入验证码"></p>
            <p class="from_p"><input v-model="form.password"  type="text" placeholder="请输入密码"></p>
        </div>
        <button class="que" @click="addgai">确定</button>
    </div>
</template>
<script>
import  Service from "@/http/service.js"
export default {
  data() {
    return {
      txt:'获取验证码',
      form:{
          iphone:'',
          yanzheng:'',
          password:'',
      }
    };
  },
  methods: {
     async addma(){
          console.log('111')
          var reg = /^[1]([3-9])[0-9]{9}$/
        if(!reg.test(this.form.iphone)){
         this.$toast.fail('手机号格式不正确');
         return false
        }
       let res = await Service.post('/smsCode',{
          mobile: this.form.iphone,
          sms_type: "getPassword"
        })
          var num = 60
          var tim = setInterval(()=>{
              this.txt = `还有${num}秒`
              if(num<=0){
                  this.txt = "获取验证码"
                  clearInterval(tim)
              }
              num--
          },1000)
      },
     async addgai(){
        let res = await Service.post('/password',{
            mobile:this.form.iphone,
            password:this.form.password,
            sms_code:this.form.yanzheng
        })
        if(res.data.data == true){
            alert('登录成功')
            this.$router.push("/wode")
            this.$store.commit('getmima',this.form.password)
        }
        console.log(res,'aa')
      }
  }
};
</script>
<style>
input{
    height:50px;
    border: 0;
    width: 200px
}
.from{
    margin-left: 20px;
    width: 80%;
}
.from_p{
    border-bottom: 1px solid #ddd;
}
.que{
    width: 80%;
    margin-left: 10%;
    height: 50px;
    text-align: center;
    background: red;
    color: white;
    border: 0;
    margin-top: 40px;
}
</style>
