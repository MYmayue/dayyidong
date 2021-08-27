<template>
    <div class="tabbar">
        <router-link class="tab"  :to="item.url" v-for="(item,index) in tabbar_list" :key="index">
            <div class="tab_txt" @click="add_tab(index)">
              <img class="tab_img"  :src="direction==index?item.nav_img_checked:item.nav_img" alt="">
              <span class="tab_span">{{item.name}}</span>
            </div>
        </router-link>
    </div>
</template>
<script>
import  Service from "@/http/service.js"
export default {
    data(){
        return{
            tabbar_list:[],
            direction:0
        }
    },
    methods:{
        add_tab(index){
            this.direction = index
        }
    },
    async created(){
        let {data:{data:{index}}}=await Service.get('/nav/bottom')
        console.log(index)
        this.tabbar_list = index
        var urls =['/shou','/ke','/zi','/tu','/wode']
        this.tabbar_list.forEach((item,key)=>{
            item.url = urls[key]
        })
    }
}
</script>
<style>
.tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    background:pink;
    height: 44px;
    width: 100%; 
    display: flex;
    justify-content: space-around;
}
.tab{
    flex: 1;
    text-align: center;
}
.tab_img{
    width: 50%;
    height: 50%;
}
.tab_span{
    display: block;
}
.router-link-active{
    color: red;
}
.tab_txt{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
