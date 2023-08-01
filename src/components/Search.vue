<template>
    <div class=" flex relative search-container">
      <input
        ref="searchBox"
        type="text"
        class="rounded-full px-16 w-96 h-10 mr-3 focus:outline-none focus:outline-shawod shadow-sm"
        placeholder="Search.."
        @input="debounceSearch"
        v-model="searchTerm"
        @focus="handleFocus"
      />
      <div class="absolute top-0 px-4">
        <svg class="fill-current w-4 text-gray-300 ml-2 mt-3" viewBox="0 0 24 24">
          <path
            class="heroicon-ui"
            d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
          />
        </svg>
      </div>
  
      <div class="absolute mt-12 rounded-lg bg-white h-80 overflow-y-scroll z-20" v-show="showSearchResult">
        <ul class="mt-3" v-if="searchResult.length">
          <li :key="index" v-for="(movie, index) in searchResult">
            <router-link
              :to="`/Detail/${movie.id}`"
              @click="showSearchResult = false"
              class="flex items-center px-8 py-3 my-2 hover:bg-gray-300"
            >
              <img :src="posterPath(movie.poster_path)" alt="" class="w-16 h-16 rounded-full" />
              <span class="ml-3 text-sm">{{ movie.title || movie.name }}</span>
            </router-link>
          </li>
        </ul>
        <ul class="px-3" v-else>
          <li>No result found for "{{ searchTerm }}"</li>
        </ul>
      </div>
      <!-- <DropdownMenu /> -->
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import axios from 'axios';
  import DropdownMenu from './DropdownMenu.vue';
  
  const searchResult = ref([]);
  const searchTerm = ref('');
  const showSearchResult = ref(false);
  let debounce = null;
  
  const debounceSearch = () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      if (searchTerm.value.length > 3) {
        fetchSearch(searchTerm.value);
      } else {
        showSearchResult.value = false;
      }
    }, 600);
  };
  
  const fetchSearch = async (term) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=dc5e578883d58c6449781433a1407b68&query=${term}`);
      searchResult.value = response.data.results;
      showSearchResult.value = response.data.results ? true : false;
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleFocus = () => {
    if (searchTerm.value !== '') {
      showSearchResult.value = true;
    }
  };
  
  const keyboardEvents = () => {
    const handleWindowClick = (e) => {
      if (!e.target.closest('.search-container')) {
        showSearchResult.value = false;
      }
    };
  
    const handleKeyPress = (e) => {
      if (e.keyCode === 47) {
        e.preventDefault();
        searchBox.value.focus();
      }
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        showSearchResult.value = false;
      }
    };
  
    window.addEventListener('click', handleWindowClick);
    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('keydown', handleKeyDown);
  };
  
  const posterPath = (poster_path) => {
    if (poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`;
    } else {
      return 'https://via.placeholder.com/50x75';
    }
  };
  
  onMounted(() => {
    keyboardEvents();
  });
  
  watch(searchTerm, () => {
    debounceSearch();
  });
  </script>
  