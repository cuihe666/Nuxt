<!-- ./pages/hotel_detail/hotel_detail.vue -->
<template>
  <div class="main-content">
    <div class="container">
      <div class="top-box"></div>
      <ul class="nav-detail">
        <li><a>关于房源</a></li>
        <li><a>地图</a></li>
        <li><a>预订须知</a></li>
        <li><a>用户评价</a></li>
      </ul>
      <h2 class="title is-2"></h2>
      <div class="cont" v-html=""></div>
      <br>
      <h4 class="title is-5 is-marginless">by <strong></strong> at <strong></strong></h4>
      <a href="../../list">list</a> 
    </div>
  </div>
</template>
<script>
console.log(document.getElementsByClassName("nav-detail").scrollTop)
  function scrollTop(ele){
    if(document.documentElement){
      console.log(document.getElementsByClassName("nav-detail").scrollTop)
    }else{
      console.log(document.body.scrollTop)
    }
  }
</script>
<style>
  .nav{
    display:none;
  }
  .top-box{
    height: 400px;
    background: green;
  }
  .nav-detail{
    height: 2rem;
    display: flex;
    flex-wrap:wrap;
  }
  .nav-detail li{
    margin-right: 50px;
  }
  .cont{
    height: 100rem;
    background: #efefef;
  }
</style>