<template>
    <div class="relative">
      <button @click="isOpen = !isOpen" class="focus:outline-none">
        <img src="@/assets/logo.svg" alt="" class="h-10 rounded-full mr-1" />
      </button>
  
      <button @click="isOpen = false" v-if="isOpen" class="fixed top-0 right-0 bottom-0 w-full h-full cursor-default opacity-50 bg-black"></button>
  
      <div v-if="isOpen" class="absolute py-2 mr-3 bg-white rounded-lg w-48 right-0 shadow-xl">
        <a href="" class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white">Account Setting</a>
        <a href="" class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white">Support</a>
        <a href="" class="text-gray-500 block px-4 py-2 hover:bg-indigo-500 hover:text-white">Logout</a>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const isOpen = ref(false);
  
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      isOpen.value = false;
    }
  };
  
  onMounted(() => {
    document.addEventListener('keydown', handleEscape);
  });
  
  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleEscape);
  });
  </script>
  