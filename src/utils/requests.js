// 导入axios
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 移除小圆圈加载进度
NProgress.configure({ showSpinner: false });

// 创建axios的实例，（统一请求地址，统一超时时间）
const request = axios.create({
    baseURL:"/api", //请求的基础url http://localhost:8888
    timeout:3000,//超时时间
})
// 拦截请求头添加token request请求 interceptors拦截器 use使用
// 还可以做加载提示
request.interceptors.request.use(function(config){

    // 请求开始，打开NProgress
    // 如果配置里面有showLoading(显示加载进度条)
    // 网络请求才显示进度条
    // if(config.showLoading){
    NProgress.start();
    // }

    // 添加token
    config.headers.Authorization="Bearer "+localStorage.getItem("token");
    // 返回配置
    // console.log("config",config);
    // axios请求服务器方法的配置
    return config;
})
// 拦截响应头，可以对错误进行处理  response响应
request.interceptors.response.use(
    function(res){
        // 请求结束把Nprogress关闭
        NProgress.done();
        // 返回成功的数据
        return res.data;
    },
    function(err){
        // 请求结束把Nprogress关闭
        NProgress.done();
        // 如果是401（没有权限）弹出提示
        console.log(err,"错误");
        if(err.response.status==401){
            Note.show("没有权限")
            // 跳转到登录
        }else if(err.response.status===0){
            Note.show("请检查网络")
        }else if(err.response.status==404){
            Note.show("请求地址错误")
        }else{
            Note.show("网络错误")
        }
        return err;
    })

// 导出请求方法
export default request;