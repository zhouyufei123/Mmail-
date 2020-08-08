<template>
  <div class="user_list">
    <h1 style="line-height:50px; font-weight:500">用户管理</h1>
    <!-- {{userlist}} -->

    <el-table :data="userlist" border style="width: 100%">

      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="updateTime" label="电话"></el-table-column>
      <el-table-column prop="createTime" label="注册时间"></el-table-column>

    </el-table>

  </div>
</template>
<script>
export default {
  props: {
    userlist: Array
  },
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
table{
    box-sizing: border-box;
}
</style>