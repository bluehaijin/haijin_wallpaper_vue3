import request  from "../utils/requests.js";
import { transPrams } from "../utils";

// 获取分类
export function getAllType(){
    return request.post("/type",null,{showLoading:true})
}