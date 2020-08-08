
import { Request } from "@/util/request.js"

//获取接口的公共的配置文件


//登录接口
export const login = (obj,data) => Request.getData({
    url : `/api/user/login.do?username=${obj.username}&password=${obj.password}`,
    method : "post",
    // data
})


//首页接口
export const HomeRight = Request.getData({
    url : `/api/statistic/base_count.do`,
    method : "get",
    // data
})


//商品管理
export const Product=Request.getData({
    url:'/api/product/list.do',
    method:'get'
})


//商品分页器
export const ProductPagin=(obj)=>Request.getData({
    url:`/api/product/list.do?pageNum=${obj.pageNum}`,
    method:'post'
})


//商品管理 按商品名称搜索
export const ProuductSeach=(obj)=>Request.getData({
    url:`/api/product/search.do?productName=${obj.productName}`,
    method:'post'
})


//商品管理 按商品id进行搜索
export const ProuductIdSeach=(obj)=>Request.getData({
    url:`/api/product/search.do?productId=${obj.productId}`,
    method:'post'
})


//商品上下架
export const ProuductStatus=(obj)=>Request.getData({
    url:`/api/product/set_sale_status.do?status=${obj.status}&productId=${obj.productId}`,
    method:'post'
})


// 用户列表
export const UserList=Request.getData({
    url:'/api/user/list.do',
    method:'post'
})



//用户分页器
export const UserP=(obj)=>Request.getData({
    url:`/api/user/list.do?pageNum=${obj.pageNum}`,
    method:'post'
})


