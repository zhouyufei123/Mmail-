<template>
<div class='user'>

    <User_list :userlist="userlist"></User_list>
    <User_pagin @newpagin="newpagin"></User_pagin>

</div>
</template>
<script>
import User_list from './User_components/user_list'
import User_pagin from './User_components/user_pagin'
import {UserList} from '@/request/http'
export default {
props: {},
data() {
 return {
     userlist:[],
 };
},
components:{
    User_list,
    User_pagin
},
//事件处理器
methods: {
    newpagin(data){
        console.log(data)
        this.userlist=data
    }
},
// 计算属性
computed: {},
//侦听器
watch: {},
//生命周期 - 创建完成（访问当前this实例）
created() {
    UserList.then((res)=>{
        console.log(res.data.data.list)
        this.userlist=res.data.data.list
        
    })
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {},
 };
</script>
<style scoped>
 /* @import url(); 引入css类 */
 .user{
     padding: 50px;
 }
</style>