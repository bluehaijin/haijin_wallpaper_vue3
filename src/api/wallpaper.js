import request  from "../utils/requests.js";
import { transPrams } from "../utils";

// 获取分类
export function getAllType(){
    return request.post("/type",null,{showLoading:true})
}

// 获取详情
export function getDetailByTypeId(currentPage,typeId,name){
    console.log(currentPage,typeId,name)
    let data = {
        currentPage,
        typeId,
        name
    }
    return request.get("/",{params:data},{showLoading:true})
}