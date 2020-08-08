<template>
<div class='sy_home'>
    <div class="left">
      <el-col :span="12">
    <div class="left_header" style="background:black">
      <h1 style="color:#2E788B;">HAPPY</h1>
      <h1 style="color:#fff">MMALL</h1>
    </div>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <el-menu-item index="good" >首页</el-menu-item>
        </template>
      </el-submenu>
            <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="spgl" >商品管理</el-menu-item>
          <el-menu-item index="plgl">品类管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
            <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="3-1">订单管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
            <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户</span>
        </template>
        <el-menu-item-group>
          <template slot="title"></template>
          <el-menu-item index="/sy/user">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      

    </el-menu>
  </el-col>
    </div>
</div>
</template>
<script>
export default {
props: {},
data() {
 return {};
},
//事件处理器
methods: {
  handleClose(){

  },
  handleOpen(){
    
  }
},
// 计算属性
computed: {},
//侦听器
watch: {},
//生命周期 - 创建完成（访问当前this实例）
created() {},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {},
 };
</script>
<style scoped lang="scss">
@import '@/scss/index.scss';
.sy_home{
  width: 100%;
   div{
     width: 100%;
   }
   .left{
     width: 100%;
     display: flex;
     flex-direction: column;
     height: 100vh;
     .left_header{
       width: 100%;
       height: 10vh;
       padding-left: 20px;
       box-sizing: border-box;
     }
     ul{
       width: 100%;
       height: 90vh;
       .el-menu-item{
         width: 100% !important;
         padding-left: 20px !important;
       }
     }
   }
}
</style>