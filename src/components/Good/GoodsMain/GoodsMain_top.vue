<template>
  <div class="GoodsMain_top">
    <div class="header">
      <h1>商品管理</h1>
      <el-button type="primary">添加商品</el-button>
      <nav style="display:flex margin:20px 0;">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            ref="seach"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-input v-model="input" placeholder="请输入内容" style="width:300px;margin:0 30px;"></el-input>
        <el-button @click="seach()">查询</el-button>
      </nav>
    </div>
  </div>
</template>
<script>
import {ProuductSeach} from '@/request/http'
import {ProuductIdSeach} from '@/request/http'
export default {
  props: {},
  data() {
    return {
      options: [
        {
          value: "按商品id查询",
          label: "按商品id查询",
        },
        {
          value: "按商品名称查询",
          label: "按商品名称查询",
        },
      ],
      value: "按商品id查询",
      input: "",
    };
  },
  //事件处理器
  methods: {
    seach(){
      // alert(this.value)
      if (this.value=="按商品名称查询") {
        // alert(this.value)
        var obj={
          productName:this.input
        }
        ProuductSeach(obj).then((res)=>{
          // console.log(res.data.data.list)
          this.$emit('seach',res.data.data.list)
        })
      }else if(this.value=="按商品id查询"){
        alert('按商品id查询')

        var obj={
          productId :this.input
        }
        ProuductIdSeach(obj).then((res)=>{
          console.log(res)
          // this.$emit('seach',res.data.data.list)
        })
        
      }
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
h1 {
  font-weight: 400;
}
.header {
  // padding: 30px;
  box-sizing: border-box;
  >button{
    float: right;
  }
  nav{
    margin: 10px 0;
  }

}
</style>.