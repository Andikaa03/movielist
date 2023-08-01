<template>
    <div class="movie-cast border-b dark:border-gray-800">
      <div class="container mx-auto px-4 py-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          <div v-for="cast in movie.credits.cast.slice(0, 12)" :key="cast.id" class="mt-3">
            <div>
                <img :src="`https://image.tmdb.org/t/p/w500/${cast.profile_path}`" :alt="`Picture of ${cast.name}`" class="hover:opacity-75 transition ease-in-out duration-150 w-44 h-64">
            </div>
            <div class="mt-2">
              <div class="text-lg mt-2 hover:text-gray:300">{{ cast.name }}</div>
              <div class="text-sm text-gray-400">{{ cast.character }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
  import { defineProps } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const props = defineProps(['movie'])
</script>