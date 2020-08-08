<template>
  <div class="home">
    用户分页
    <el-pagination
      background
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage.pageNum"
      :page-size="10"
      layout="prev, pager, next,jumper"
      :total="1000"
    ></el-pagination>
  </div>
</template>
<script>
import {UserP} from '@/request/http.js'
export default {
  props: {},
  data() {
    return {
        currentPage:{
            pageNum:1
        },
        // paginlist:[]
    };
  },
  //事件处理器
  methods: {
      handleCurrentChange(val){
        //   alert(val)
          UserP(this.currentPage).then((res)=>{
            //   console.log(res.data.data.list)
            //   this.paginlist=res.data.data.list
              this.$emit('newpagin',res.data.data.list)
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
<style scoped>
/* @import url(); 引入css类 */
</style>