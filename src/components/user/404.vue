<template>
<div class='home'>

    <div><span style="color:red">4</span><span style="color:black">0</span><span style="color:pink" >4</span></div>

    <h1>请求错误，页面不存在</h1>

    <div>    <el-button type="primary">返回首页</el-button> <el-button type="primary">返回上一页</el-button></div>
</div>
</template>
<script>
export default {
props: {},
data() {
 return {};
},
//事件处理器
methods: {},
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
 /* @import url(); 引入css类 */
 .home{
     >div:nth-of-type(1){
         margin: 100px auto;
         width: 200px;
         
         span{
             font-size: 100px;

         }

     }
     >div:nth-of-type(2){
         width: 200px;
         display: flex;
         margin: 50px auto;
     }
        h1{
            display: block;
            text-align: center;
        }

 }
</style>
