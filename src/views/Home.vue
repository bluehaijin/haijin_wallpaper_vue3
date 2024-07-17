<template>
    <div>
      <Header @refresh="changeDetailFunc" @search="changeDetailSeatchFunc"  />
      <div class="image-gallery">
        <ImageCard v-for="detail in wallpaperDetails" :key="detail.id" :image="detail" />
      </div>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
        <span>第 {{ currentPage }} 页</span>
        <button @click="nextPage" :disabled="currentPage === store.wallpaperDetail.pageSize">下一页</button>
        <span>共 {{ store.wallpaperDetail.pageSize }} 页</span>
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

  const typeId = ref(null)

  const nameRef = ref(null)

  const changeDetailFunc = (id) =>{
    typeId.value = id
    currentPage.value = 1
    nameRef.value = null
    store.getDetailFunc(currentPage.value,id,nameRef.value)
  }

  const changeDetailSeatchFunc = (name) =>{
    typeId.value = null
    currentPage.value = 1
    nameRef.value = name
    store.getDetailFunc(currentPage.value,typeId.value,name)
  }

  const changeDetailDefaultFunc = () =>{
    typeId.value = null
    currentPage.value = 1
    nameRef.value = null
    store.getDetailFunc(currentPage.value,typeId.value ,nameRef.value)
  }

onMounted(()=>{
  console.log('onMounted')
  changeDetailDefaultFunc()
})

const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(store.wallpaperDetail.total / store.wallpaperDetail.pageSize));

const paginatedImages = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return images.value.slice(start, end);
});

const nextPage = () => {
  if (currentPage.value < store.wallpaperDetail.pageSize) {
    currentPage.value += 1;
    store.getDetailFunc(currentPage.value,typeId.value,nameRef.value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
    store.getDetailFunc(currentPage.value,typeId.value,nameRef.value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

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

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border-top: 1px solid #eee;
  }
  
  .pagination button {
    padding: 8px 16px;
    margin: 0 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    font-size: 14px;
    color: #333;
  }
  
  .pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  .pagination span {
    font-size: 14px;
    color:
    #333
  }
  </style>
  