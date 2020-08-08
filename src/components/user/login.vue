<template>
<div class='login'>

    <div class="one">
        
                <h1>欢迎登录 - MMALL管理系统</h1>
                <el-input v-model="loginfrom.username" placeholder="请输入用户名"></el-input>
                <el-input type="password" v-model="loginfrom.password" placeholder="请输入管理员密码"></el-input>
                <el-button type="primary" @click="sup()">登录</el-button>

    </div>

    
</div>
</template>
<script>
import {login} from '@/request/http'
export default {
props: {},
data() {
 return {
     loginfrom:{
         username:'admin',
         password:'admin'
     }
 };
},
//事件处理器
methods: {
    sup(){
        // alert(1)
        console.log(this.loginfrom)
        login(this.loginfrom).then((data)=>{

            if (data.data.status==0) {

                localStorage.setItem('admin',this.loginfrom.username)

                this.$router.push('/sy')

                this.$message(data.data.msg)

            }else{

                this.$message(data.data.msg)

            }
        })
        
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
 .login{
     width: 100vw;
     height: 100vh;
     border: solid 1px transparent;
     background: #f0f0f0;
     box-sizing: border-box;
     .one{
         width: 500px;
        //  height: 300px;
         margin: 0 auto;
         margin-top: 200px;
         padding: 20px 60px;
         background: #fff;
        //  border:solid 1px red;
         h1{
             font-weight: 300;
             font-size: 20px;
         }
         .el-input{
             margin-top: 20px;
         }
         .el-button{
             width: 100%;
             margin-top: 20px;
             background: #286090;
         }
     }
 }
</style>