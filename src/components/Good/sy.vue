<template>
<div class='spgl'>
    <h1>首页</h1>
    <ul>

        <li>
            <h2>{{list.userCount}}</h2>
            <p><i class="el-icon-user"></i><span>用户总数</span></p>
        </li>
        <li>
            <h2>{{list.productCount}}</h2>
            <p><i class="el-icon-user"></i><span>商品总数</span></p>
        </li>
                <li>
            <h2>{{list.orderCount}}</h2>
            <p><i class="el-icon-user"></i><span>订单总数</span></p>
        </li>

    </ul>
</div>
</template>
<script>
import {HomeRight} from '@/request/http'
export default {
props: {},
data() {
 return {
     list:{}
 };
},
//事件处理器
methods: {},
// 计算属性
computed: {},
//侦听器
watch: {},
//生命周期 - 创建完成（访问当前this实例）
created() {
    HomeRight.then((data)=>{
        console.log(data.data.data)
        this.list=data.data.data
    })
},
//生命周期 - 挂载完成（访问DOM元素）
mounted() {},
 };
</script>
<style scoped lang="scss">
 /* @import url(); 引入css类 */
 .spgl{
    h1{
        padding-left: 20px;
        line-height: 100px;
    }
    ul{
        padding-top: 50px;
        display: flex;
        justify-content: space-around;
        li{
            width: 400px;
            line-height: 100px;
            text-align: center;
            height: 200px;
            color: #fff;
            h2{
                line-height: 100px;
            }
            p{
                line-height: 50px;
            }
            // border: solid 1px red;
            &:nth-of-type(1){
                background: #F0B45E;
            }
            &:nth-of-type(2){
                background: #69BD69;
            }
            &:nth-of-type(3){
                background: #5DB8D2;
            }
        }
        li:hover{
            transform: scale(1.2);
        }
    }
 }
</style>
