<template>
    <div class="index">
        <router-view></router-view>
        <tabbar class="a"></tabbar>
    </div>
</template>
<script>
import tabbar from '@/components/tabbar'
export default {
    components:{
        tabbar
    },
    data(){
        return{
            
        }
    }
}
</script>
<style>
.index{
    padding-bottom: 43px;
}
</style>
