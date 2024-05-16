<template>
    <div class="image-card">
      <img :src="image.wallpaperListUrl" :alt="image.wallpaperName" referrer="no-referrer" />
      <div class="caption">{{ image.wallpaperName }}</div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    image: Object
  });
  </script>
  
  <style scoped>
  .image-card {
    margin: 10px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    width: 100%;
    max-width: 300px;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .image-card img {
    width: 100%;
    height: auto;
  }
  
  .caption {
    padding: 10px;
    font-size: 14px;
    color: #555;
  }
  </style>
  