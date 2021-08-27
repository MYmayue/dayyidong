<template>
    <div class="shou">
        <!-- 搜索 -->
        <div class="search">
            <img class="search-l" src="@/assets/imgs/5.png" alt="">
            <input class="search-i" placeholder="搜索" type="text">
            <img class="search-r" src="@/assets/imgs/6.png" alt="">
        </div>
        <!-- 轮播 -->
        <div class="lun">
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
      <img class="lun_img" src="@/assets/imgs/7.png" alt="">
  </van-swipe-item>
  <van-swipe-item>
      <img class="lun_img" src="@/assets/imgs/8.png" alt="">
  </van-swipe-item>
</van-swipe>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style>
.shou{
    width: 100%;
    height: 100%;
}
.search{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    box-sizing: border-box;
}
.search-l{
    width: 30px;
    height: 30px;
}
.search-i{
    width: 250px;
    height: 30px;
    border-radius: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    position: relative;
}
.search-i::after{
    content: "搜搜";
    display: inline-block;
    color: red;
    position: absolute;
    top: 0;
    left: 0;
}
.search-r{
    width: 20px;
    height: 20px;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 150px;
  }
  .lun_img{
      width: 100%;
      height: 100%;
  }
</style>
