<template>
  <div class="image-card">
    <img 
      :src="image.wallpaperListUrl" 
      :alt="image.wallpaperName" 
      referrer="no-referrer"
      @click="openModal"
    />
    <div class="caption">{{ image.wallpaperName }}</div>

    <!-- 模态对话框 -->
    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <img :src="image.wallpaperDetailUrl" :alt="image.wallpaperName" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  image: Object
});

// 控制模态对话框的显示状态
const isModalOpen = ref(false);

// 打开模态对话框的方法
const openModal = () => {
  isModalOpen.value = true;
};

// 关闭模态对话框的方法
const closeModal = () => {
  isModalOpen.value = false;
};
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
  cursor: pointer; /* 添加光标样式，指示可以点击 */
}

.caption {
  padding: 10px;
  font-size: 14px;
  color: #555;
}

/* 模态对话框样式 */
.modal {
  display: block; /* 默认显示 */
  position: fixed; /* 固定定位 */
  z-index: 1; /* 设置层级高于背景 */
  left: 0;
  top: 0;
  width: 100%; /* 宽度为100% */
  height: 100%; /* 高度为100% */
  overflow: auto; /* 当内容超出视窗时允许滚动 */
  background-color: rgb(0,0,0); /* 背景色 */
  background-color: rgba(0,0,0,0.4); /* 黑色半透明背景 */
  padding-top: 60px; /* 内边距，使内容不贴顶 */
}

.modal-content {
  margin: auto;
  display: block;
  width: calc(90% - 40px); /* 减去左右边距 */
  max-width: 500px; /* 最大宽度限制 */
  max-height: 80vh; /* 最大高度限制，视口高度的80% */
  overflow-y: auto; /* 如果内容超出高度，允许垂直滚动 */
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box; /* 确保内边距不影响总宽度 */
}

.modal-content img {
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 10px;
}

.close {
  position: absolute;
  top: 10px;
  right: 25px;
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* 媒体查询，针对不同屏幕尺寸进行优化 */
@media (max-width: 600px) {
  .modal-content {
    width: calc(100% - 40px); /* 在小屏幕上，宽度接近100%，但保留左右边距 */
  }
}
</style>