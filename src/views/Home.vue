<template>
    <div>
      <Header @refresh="changeDetailFunc" />
      <div class="image-gallery">
        <ImageCard v-for="detail in wallpaperDetails" :key="detail.id" :image="detail" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref,computed,onMounted  } from 'vue';
  import Header from '../components/Header.vue';
  import ImageCard from '../components/ImageCard.vue';
  import {useWallpaperStore} from '../stores/useWallpaperStore.js'
	const store = useWallpaperStore();

  // 壁纸类型信息
  const wallpaperDetails =  computed(()=>{
    return store.wallpaperDetail.records
  })

  const changeDetailFunc = (id) =>{
    store.getDetailFunc(id)
  }

onMounted(()=>{
  changeDetailFunc()
})
  </script>
  
  <style scoped>
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }
  </style>
  