<template>
    <div class="xiang_x">
        <!-- 头部图片 -->
        <div class="xiang_x_head">
            <img class="xiagn_x_img" :src="shu.cover_img" alt="">
        </div>
        <!-- 详细介绍 -->
        <div class="xiang_x_txt">
            <h3>{{shu.title}}</h3>
            <p>剩余名额：{{shu.stock}}</p>
            <p>报名截止时间：{{shi.start_play}}</p>
            <p>开课时间：{{shi.total_start_play}}-{{shi.total_end_play}}</p>
            <p>开课地点：{{shu.city_name}}{{shu.district_name}}{{shu.address}}</p>
            <p><s>{{yuanjia}}</s><span class="yibai">{{xianjia}}</span></p>
        </div>
        <!-- 优惠服务 -->
        <div class="xx"></div>
        <div class="fuwu">
            <van-cell title="优惠：领取优惠券最多可减80" is-link value="领取" @click="toflag" />
            <van-cell title="服务：课程售后" is-link value="详情" @click="toshow" />
        </div>
        <!-- 优惠弹框 -->
        <van-popup v-model="flag" position="bottom" closeable :style="{ height: '60%' }" >
            <h2 class="xiang_x_you">优惠券</h2>
        </van-popup>
        <!-- 服务弹框 -->
        <van-popup v-model="show" position="bottom" closeable :style="{ height: '60%' }" >
            <h2 class="xiang_x_h2">课程服务</h2>
            <div class="fuwu_xx">
                <!-- <h4>{{fuwu.name}}</h4> -->
                <!-- <p>{{fuwu.description}}</p> -->
            </div>
        </van-popup>
        <div class="ss"></div>
        <!-- 教学团队 -->
        <div class="teacher">
            <h3>教学团队</h3>
            <div class="teacher_txt">
                <div class="teacher_tuwen" >
                    <div class="teachers_s" v-for="(item,index) in teachers" :key="index"
                    @click="$router.push(`/xiang/${item.teacher_id}`)">
                    <img class="teacher_img" :src="item.teacher_avatar" alt="">
                    <p>{{item.teacher_name}}</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="ss"></div>
        <!-- 课程介绍，大纲，评价 -->
        <div class="xiang_x_kecheng">
            <van-tabs v-model="active" scrollspy sticky>
        <van-tab   v-for="(item,index) in huadong" :title="item" :key="index">
            <div class="xiang_x_kecheng_a" v-show="index==0">
                 <h4>{{item}}</h4>
                 <div v-html="shu.course_details"></div>
            </div>
           <div class="xiang_x_kecheng_a" v-show="index==1">
                 <h4>{{item}}</h4>
                 <van-collapse v-model="activeNames">
            <van-collapse-item :title="shi.periods_title" name="1">
               <p class="xiatxt"> <span class="dian">·</span>{{shi.periods_title}}</p>
                <span v-for="(it,i) in shi_teachers" :key="i">
                    {{it.teacher_name}}
                </span><span>{{shi.start_play}}——{{shi.end_play}}</span>
            </van-collapse-item>
            </van-collapse>
            </div>
            <div class="xiang_x_kecheng_a" v-show="index==2">
                 <h4>{{item}}</h4>
                 <van-empty description="暂无评论" />
            </div>
        </van-tab>
        </van-tabs>
        </div>
        <!-- 立即报名 -->
        <div class="xiang_x_btn">
            <button>立即报名</button>
        </div>
    </div> 
</template>
<script>
import  Service from "@/http/service.js"
export default {
    data(){
        return{
            shu:[],
            shi:[],
            yuanjia:'',
            xianjia:'',
            show:false,
            fuwu:[],
            flag:false,
            teachers:[],
            huadong:["课程介绍","课程大纲","课程评价"],
            activeNames:['1'],
            active:'',
            shi_teachers:[]
        }
    },
    methods:{
       async getshu(){
           var id = this.$route.params.id
        //    console.log(id)
           let res = await Service.get("/courseInfo/basis_id="+id)
           console.log(res)
           this.shu = res.data.data.info
        //    console.log(this.shu)
        this.teachers = res.data.data.teachers
        this.fuwu = this.shu.service[0]
        this.yuanjia = this.shu.underlined_price/100 +".00"
        this.xianjia = this.shu.price/100 +".00"
        },
        async getshi(){
            let res = await Service.post('/courseChapter',{id: this.$route.params.id})
            // console.log(res,"时间")
            this.shi = res.data.data[0].child[0]
            this.shi_teachers=this.shi.teachers
            console.log(this.shi,"xxx")
             console.log(this.shi.teachers)
        },
        toshow(){
            this.show = true
        },
        toflag(){
            this.flag = true
        }
    },
    created(){
        this.getshu()
        this.getshi()
       
    }
}
</script>
<style>
.xiang_x{
    width: 100%;
    height: 100%;
    padding-bottom: 40px;
    box-sizing: border-box;
}
.xiang_x_head{
    width: 100%;
    height: 200px;
    background: #f7f8fa;
}
.xiagn_x_img{
   width: 50%;
   height: 100%;
}
.xiang_x_txt{
    width: 100%;
    height: 200px;
    /* border-bottom: 1px solid #ddd; */
    padding-top: 20px;
    padding-left: 20px;
    box-sizing: border-box;
    font-size: 14px;
}
.xiang_x_txt p{
    margin-top: 10px;
}
.yibai{
    font-size: 16px;
    color: red;
}
.xx{
    background: #f7f8fa;
    height: 20px;
    width: 100%;
}
.ss{
    background: #f7f8fa;
    height: 15px;
    width: 100%;
}
.fuwu{
    height: 80px;
    width: 100%;
}
.van-cell{
    font-size: 12px;
}
.xiang_x_h2{
   text-align: center;
   margin-top:15px;
}
.fuwu_xx{
    padding-left: 20px;
    padding-top: 15px;
    box-sizing: border-box;
}
.xiang_x_you{
    margin-top: 15px;
    margin-left: 5px;
}
.teacher{
    width: 100%;
    height: 180px;
}
.teacher h3{
    margin-left: 10px;
    margin-top: 10px;
    font-size: 14px;
}
.teacher_txt{
    width: 80%;
    height: 170px;
    margin-left: 10%;
}
.teacher_tuwen{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.teacher_img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.teachers_s{
    width: 20%;
    margin-top: 20px;
    text-align: center
}
.dian{
    color: red;
}
.xiatxt{
    font-size: 12px;
}
.xiang_x_kecheng_a{
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 14px;
    margin-top: 10px;
}
.xiang_x_btn{
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
}
.xiang_x_btn button{
    width: 80%;
    height: 30px;
    margin-left: 10%;
    background: orangered;
    color: white;
    line-height: 30px;
    border: 0;
    border-radius: 10px;
}
</style>
