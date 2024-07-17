<template>
    <header class="header">
      <input type="text" v-model="searchQuery" placeholder="清纯美女" />
        <div class="footer-button-box" @click="changeName">
          <span class="footer-button-span">
            搜索
          </span>
        </div>
      <nav>
        <div class="item-box" v-for="item in wallpaperTypeinfos" :key="item.id">
            <a href="#" @click="changeType(item.id)">{{item.typeName}}</a>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref,computed,onMounted,defineEmits  } from 'vue';
  import {useWallpaperStore} from '../stores/useWallpaperStore.js'
	const store = useWallpaperStore();

    const emit = defineEmits(['refresh','search'])

  // 壁纸类型信息
  const wallpaperTypeinfos =  computed(()=>{
    return store.typeInfo.data
  })

  const changeType = (id) =>{
    searchQuery.value = null
    emit('refresh',id)
  }

  const changeName = () => {
    emit('search',searchQuery.value)
  }

onMounted(()=>{
  store.getAllTypeFunc()
})
  const searchQuery = ref('');
  </script>
  
  <style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  input[type="text"] {
    width: 100%;
    max-width: 600px;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  nav a {
    margin: 5px 10px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 16px;
  }
  
  nav a:hover {
    color: #e91e63;
  }
  
  @media (min-width: 600px) {
    .header {
      flex-direction: row;
      justify-content: space-between;
    }
  
    input[type="text"] {
      margin-bottom: 0;
    }
  }
    
    .footer-button-box{
      width: 130px;
      height: 32px;
      background: #74BDB0;
      border-radius: 50px;
      
      display: flex;
      justify-content: center;
      align-items: center;

      margin-left: 30px;
      
      .footer-button-span{
        // width: 576rpx;
        height: 48px;
        font-size: 1em;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 48px;
      }
      cursor: pointer;
    }
    
    .footer-button-box:active{
      background-color: rgb(229, 229, 229);
    }
  </style>
  