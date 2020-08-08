<template>
  <div class="GoodsMain_section">
    <el-table :data="list" border style="width: 100%">
      <el-table-column fixed prop="id" label="id" width="180"></el-table-column>
      <el-table-column prop="name" label="信息" width="180"></el-table-column>
      <el-table-column prop="price" label="价格" width="180"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="status">
          <span>{{status.row.status==2?'已下架':'在售'}}</span>
          <el-button
            type="warning"
            size="mini"
            @click="SetStatus(status.row.status,status.row.id,status.$index)"
          >{{status.row.status==2?'上架':'下架'}}</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- <el-table :data="list" border style="width: 100%">

      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="username" label="用户名" width="180"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="updateTime" label="电话"></el-table-column>
      <el-table-column prop="createTime" label="注册时间"></el-table-column>

    </el-table>-->
  </div>
</template>
<script>
import { ProuductStatus } from "@/request/http";
export default {
  props: {
    list: Array,
  },
  data() {
    return {};
  },
  //事件处理器
  methods: {
    handleClick() {},
    SetStatus(status, status1,index) {
      
      // ProuductStatus(obj).then((res) => {
      //   console.log(res);
      // });
      this.$confirm('确定要上架该商品吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var obj = { status: status, productId: status1};
          this.$emit('Sj',obj,index)
          this.$message({
            type: 'success',
            message: '上架成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消上架'
          });          
        });



    },
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
.GoodsMain_section {
  .el-table {
    //  margin: 0 auto;
    box-sizing: border-box;
  }
}

</style>