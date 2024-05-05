<template>
  <div class="all-box">
    <div class="header-box">
        <div class="item-box" v-for="item in wallpaperTypeinfos" :key="item.id">
            <span class="item-span">{{ item.typeName }}</span>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Header">
import { computed, onMounted } from 'vue';
import {useWallpaperStore} from '../stores/useWallpaperStore.js'
	const store = useWallpaperStore();

  // 壁纸类型信息
  const wallpaperTypeinfos:any =  computed(()=>{
    return store.typeInfo.data
  })

onMounted(()=>{
  store.getAllTypeFunc()
})

</script>

<style lang="scss" scoped>
.all-box{
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
  .header-box{
    margin-top: 30px;

    height: 100%;
    width: 90vw;
    background-color: skyblue;
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;

    .item-box{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      align-items: center;


      .item-span{
        color: red;
      }
    }

  }
}

 
</style>