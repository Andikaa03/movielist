<template>
    <div class="movie-images">
      <div class="container mx-auto px-4 py-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div v-for="image in movie.images.backdrops.slice(0, 9)" :key="image" class="mt-1">
            <a :href="`https://image.tmdb.org/t/p/original/${image.file_path}`" target="_blank">
              <img :src="`https://image.tmdb.org/t/p/w500/${image.file_path}`" :alt="`Images of ${movie.title} movie`" class="hover:opacity-75 transition ease-in-out duration-150">
            </a>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps(["movie"])
</script>