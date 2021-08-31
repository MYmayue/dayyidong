<template>
    <div class="zi_zi">
        <van-tabs v-model="active" @change="daa">
  <van-tab :title="item.name" v-for="(item,index) in tab" :key="index"  >
     <div class="zisheng">
            <!-- 信息 -->
            <div class="zi_xin" v-for="(item,index) in ke" :key="index">
                <img class="ke_img" :src="item.thumb_img" alt="">
                <div class="zi_r">
                    <p style="font-size:14px">{{item.title}}</p>
                    <p class="ke_p">{{item.click_rate}}人已报名</p>
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
            tab:[],
            active:'',
            ke:[],
            cid:0
        }
    },
    methods:{
       async gettab(){
           let res = await Service.get("/information/classify")
        //    console.log(res)
           this.tab = res.data.data
        },
        async getaas(){
            let res = await Service.post("/information/index",{
                page: 1, limit: 10, classify_id: this.cid
            })
            // console.log(res)
            this.ke = res.data.data.list
        },
        daa(e){
            if(e==0){
              this.cid = 0
              this.getaas()
            }
            if(e==1){
              this.cid = 9
              this.getaas()
            }
            if(e==2){
              this.cid = 10
              this.getaas()
            }
            if(e==3){
              this.cid = 33
              this.getaas()
            }
            if(e==4){
              this.cid = 33
              this.getaas()
            }
            
        }
    },
    created(){
        this.gettab()
        this.getaas()
    }
}
</script>
<style>
.zi_zi{
    width: 100%;
    height: 100%;
    background: #f7f8fa;
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
