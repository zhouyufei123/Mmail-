<template>
<div class='GoodsMain_pagin'>
    <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="10"
        layout="prev, pager, next,jumper"
        :total="1000">
     </el-pagination>
     

</div>
</template>
<script>
export default {
props: {},
data() {
 return {
     currentPage:1
 };
},
//事件处理器
methods: {
    handleCurrentChange(val){
        this.$emit('GoodsPaginnum',val)
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
<style scoped>
 /* @import url(); 引入css类 */
</style>