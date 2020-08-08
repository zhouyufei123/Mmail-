<template>
  <div class="spgl">
    <GoodsMain_top @seach="seach"></GoodsMain_top>
    <GoodsMain :list="list" @Sj="sjxj"/>
    <GoodsMain_bottom></GoodsMain_bottom>
    <Page @GoodsPaginnum="GoodsPaginnum"></Page>
  </div>
</template>
<script>

import GoodsMain_top from "./GoodsMain/GoodsMain_top";
import GoodsMain_bottom from "./GoodsMain/GoodsMain_bottom";
import GoodsMain from './GoodsMain/GoodsMain_section'
import { Product } from "@/request/http.js";
import {ProuductStatus} from '@/request/http.js'
import { ProductPagin } from "@/request/http.js";
import Page from "./GoodsMain_pagin";

export default {
  props: {},
  data() {
    return {
      list: [],
    };
  },
  components: {
    Page,
    GoodsMain_top,
    GoodsMain_bottom,
    GoodsMain
  },
  //事件处理器
  methods: {
    GoodsPaginnum(val){
      // alert(val)
      var obj={
        pageNum:val
      }
      ProductPagin(obj).then((data)=>{
        console.log(data)
        this.list=data.data.data.list
      })
    },
    seach(data){
      this.list=data
    },
    qjsj(){
            Product.then((res) => {
              console.log(res.data.data.list);
              this.list = res.data.data.list;
      })
    },
    sjxj(obj,index){
      console.log(obj,index)
      console.log(this.list[index].status)
      if (this.list[index].status==2) {
        this.list[index].status=1
      }else{
        this.list[index].status=2
      }

      obj.status=this.list[index].status

      // console.log(obj)

      ProuductStatus(obj).then((res) => {
        // console.log(res);        
      })
    }
  },
  // 计算属性
  computed: {},
  //侦听器
  watch: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.qjsj()
  },
};
</script>
<style scoped lang="scss">
/* @import url(); 引入css类 */
.spgl{
  padding: 40px;
  table{
    box-sizing: border-box;
  }
}
</style>