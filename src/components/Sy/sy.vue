<template>
<div class='sy'>

    <div class="left">
    <Left></Left>
    </div>
    <div class="sy_right">
        <Right></Right>
        <main>
            <router-view></router-view>
        </main>

    </div>

</div>
</template>
<script>
import Left from './left'
import Right from './right'
export default {
components:{
    Left,
    Right
},
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
 .sy{
     display: flex;
     width: 100vw;
 }
 .left{
     width: 15%;

 }
 .sy_right{
     flex: 1;
     height: 100vh;
     display: flex;
     flex-direction: column;
     main{
         flex: 1;
         overflow: auto;
         background : #f0f0f0
     }
 }
</style>