<template>
    <div class="index">
        <router-view></router-view>
        <tabbar></tabbar>
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

</style>
