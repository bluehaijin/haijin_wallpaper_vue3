import {defineStore} from 'pinia';
import {getAllType,getDetailByTypeId} from '../api/wallpaper.js'
import {ref} from 'vue';

// 定义了一个仓库
export const useWallpaperStore = defineStore("wallpaper",()=>{
	// 壁纸类型信息
	const typeInfo = ref({
        data:[]
    });
	// 获取壁纸类型信息
    const getAllTypeFunc = ()=>{
        getAllType().then(res=>{
            typeInfo.value = res;
            console.log(res)
        })
    }

    // 壁纸详情信息
	const wallpaperDetail = ref({
        records:[]
    });

    // 壁纸详情信息查询
    const getDetailFunc = (typeId)=>{
        getDetailByTypeId(typeId).then(res=>{
            wallpaperDetail.value = res;
            console.log(res)
        })
    }

	return {
        typeInfo,
        getAllTypeFunc,

        wallpaperDetail,
        getDetailFunc,
    };
	
})