<template>
  <section>
    <div class="grid grid-cols-6 gap-3x px-4 py-4">
    <div v-for="movie in movieList" :key="movie.id" class="px-4">
      <router-link :to="`/Detail/${movie.id}`" class="">
        <img :src="movie.image" class="w-44  h-56 mt-4" />
        <div>{{ movie.name }}</div>
        <div class="flex items-center">
        <div class="flex items-center">
          <svg
            v-for="star in getStars(movie.rating)"
            :key="star"
            aria-hidden="true"
            class="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            v-for="emptyStar in getEmptyStars(movie.rating)"
            :key="emptyStar"
            aria-hidden="true"
            class="w-5 h-5 text-gray-300 dark:text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
        </div>
        <div class="ml-3">{{ movie.rating }}</div>
      </div>
        <div>{{ movie.release }}</div>
      </router-link>
      </div>
    </div>
    <div>
      <div class="flex items-center justify-center mb-5">
      <button class="px-4 py-2 border border-sky-500 rounded-lg mx-2 hover:border-red-500 hover:bg-red-500" @click="previousPage" :disabled="currentPage === 1">
        Previous
      </button>
      <button class="px-7 py-2 bg-sky-500 rounded-lg mx-2 hover:bg-sky-400" @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
    <div>
      <!-- <upcoming-movies/> -->
    </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted} from "vue";
import axios from "axios";

const movieList = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);

async function fetchData() {
  try {
    const response = await axios.get(
      "/discover/movie",
      {
        params: {
          api_key: "dc5e578883d58c6449781433a1407b68",
          page: currentPage.value,
        },
      }
    );
    movieList.value = response.data.results.map((movie) => ({
      ...movie,
      id: movie.id,
      name: movie.original_title,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      release: movie.release_date,
      rating: movie.vote_average,
    }));
    totalPages.value = response.data.total_pages;
  } catch (error) {
    console.log(error);
  }
}

async function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    await fetchData();
  }
}

async function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    await fetchData();
  }
}

function getStars(rating) {
  const integerRating = Math.floor(rating);
  const fullStars = Math.floor(integerRating / 2);
  const hasHalfStar = integerRating % 2 !== 0;
  return Array(fullStars)
    .fill(1)
    .concat(hasHalfStar ? [0.5] : []);
}

function getEmptyStars(rating) {
  const integerRating = Math.floor(rating);
  const fullStars = Math.floor(integerRating / 2);
  const hasHalfStar = integerRating % 2 !== 0;
  const emptyStarsCount = 5 - fullStars - (hasHalfStar ? 1 : 0);
  return Array(emptyStarsCount).fill(1);
}

onMounted(async () => {
  await fetchData();
});
</script>