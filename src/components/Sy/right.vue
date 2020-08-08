<template>
<div class='right'>
    <header>

        <i class="el-icon-user-solid"></i>
        <span class="hy" @mouseover="mouseOver" @mouseleave="mouseLeave">欢迎，admin</span>
        <div class="right_tcdl" v-show="flag">
            <i class="el-icon-s-unfold" @click="removeItem()">退出登录</i>
        </div>

    </header>
</div>
</template>
<script>
export default {
props: {},
data() {
 return {
     flag:false,
 };
},
//事件处理器
methods: {
    mouseOver(){
        this.flag=true
    },
    mouseLeave(){
        // this.flag=false
        this.$nextTick(()=>{
            // this.flag=false
            setTimeout(()=>{
                this.flag=false
            },1000)
        })
    },
    removeItem(){
        localStorage.removeItem('admin')
        this.$router.push('/')
        this.$message('退出登录成功')
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
 /* @import url(); 引入css类 */
 .right{
     width: 100%;
     header{
         line-height: 10vh;
        //  background: #f0f0f0;
         padding-left: 80%;
         position: relative;
         .right_tcdl{
             width: 7%;
             line-height: 4vh;
             text-align: center;
             position: absolute;
             left: 80%;
             border: solid 1px black;
            //  display: none;
         }
     }
     

 }

</style>