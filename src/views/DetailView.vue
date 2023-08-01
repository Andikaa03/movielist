<template>
  <div v-if="renderTemplate">
    <div
      class="movie-info dark:border-gray-800"
      :style="`background-image: url(${movie.poster});`"
    >
      <div class="container mx-auto px-10 py-16 flex flex-col lg:flex-row">
        <div class="flex justify-center md:flex-none">
          <img
            :src="movie.poster"
            :alt="`Poster of the ${movie.title} movie`"
            class="h-[500px] rounded-xl shadow-2xl"
          />
        </div>
        <div class="lg:ml-16">
          <h2
            class="text-4xl mt-4 text-center lg:text-left font-bold dark:text-amber-300"
          >
            {{ movie.title }}
          </h2>
          <div
            class="flex flex-wrap items-center dark:text-gray-400 text-gray-500 text-sm mt-1"
          ></div>
          <p class="dark:text-gray-300 text-gray-800 text-lg mt-2">
            {{ movie.overview }}
          </p>
          <div class="mt-5 flex items-center">
            <div class="text-xl text-slate-800 font-bold">
              {{ movie.releaseDate }}
            </div>
            <div class="mx-1">(Released)</div>
          </div>
          <div
            v-for="(genres, index) in movie.genres"
            :key="index"
            class="inline-block"
          >
            <button
              class="border border-slate-400 rounded-full px-4 py-2 text-sm mr-3 my-5 hover:bg-sky-200 flex items-center justify-center shadow-sm"
            >
              {{ genres }}
            </button>
          </div>
          <div class="">
            <button
              class="border border-gray-200 rounded-full bg-gray-200 px-4 py-2 text-sm mr-3 my-2 hover:bg-gray-300 shadow-md flex items-center justify-center"
            >
              <div class="flex items-center justify-center">
                <svg
                  class="fill-current dark:text-amber-300 text-sky-400 w-6"
                  viewBox="0 0 24 24"
                >
                  <g data-name="Layer 2">
                    <path
                      d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
                      data-name="star"
                    />
                  </g>
                </svg>
                <span class="ml-2">{{ movie.voteAverage }}</span>
              </div>
            </button>
          </div>

          <div v-if="movieTrailerKey" class="mt-6">
            <button
              @click="showModal = true"
              class="inline-flex items-center dark:bg-amber-300 bg-skytext-sky-500 text-gray-900 rounded font-semibold px-4 py-3 dark:hover:bg-amber-500 hover:bg-sky-500 bg-sky-600 transition ease-in-out duration-150"
            >
              <svg
                class="w-6 dark:text-black text-white fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                />
              </svg>
              <span class="ml-2 dark:text-black text-white">Play Trailer</span>
            </button>
          </div>
          <button
            class="lg:mt-4 mt-10 lg:px-4 px-2 py-2 lg:py-4 hover:bg-slate-500 hover:bg-opacity-40 hover:shadow-sm rounded-md"
            @click="showPeapleModal = true"
          >
            <div class="flex items-center">
              <div
                v-for="(cast, index) in movie.credits.cast.slice(0, 5)"
                :key="index"
              >
                <div
                  class="lg:w-[90px] lg:mx-2 mr-2 shadow-md lg:h-[90px] w-[50px] h-[50px] rounded-full"
                >
                  <img
                    :src="`https://image.tmdb.org/t/p/original/${cast.profile_path}`"
                    :data-src="`https://image.tmdb.org/t/p/original/${cast.profile_path}`"
                    class="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <span
                v-if="movie.credits.cast.length > 5"
                class="font-semibold text-sm lg:font-bold lg:text-xl text-gray-800"
                >+{{ movie.credits.cast.length - 5 }} lainnya</span
              >
            </div>
          </button>
          <teleport to="body">
            <div
              v-if="showPeapleModal"
              class="fixed inset-0 flex items-center justify-center z-50"
              @click="showPeapleModal = false"
            >
              <div class="z-200 fixed inset-0 bg-black opacity-50"></div>
              <div
                class="z-70 bg-white w-72 lg:w-1/3 rounded shadow-lg p-6 relative"
              >
                <button
                  @click="showPeapleModal = false"
                  class="absolute top-4 right-4 text-gray-500 px-4 py-4 rounded-full hover:bg-opacity-50 hover:bg-gray-400"
                >
                  <img src="../assets/tomX.svg" alt="" />
                </button>
                <div
                  class="flex justify-center items-center px-2 py-2 lg:px-4 lg:py-7"
                >
                  <div class="">
                    <div class="flex justify-center items-center">
                      <h4
                        class="lg:text-xl text-lg font-semibold text-slate-700"
                      >
                        Cast
                      </h4>
                    </div>
                    <div
                      class="overflow-y-scroll no-scrollbar h-52 lg:h-80 lg:mt-5 mt-2 sm:mt-3"
                    >
                      <div
                        v-for="(cast, index) in movie.credits.cast"
                        :key="index"
                        class=" px-14 py-3 sm:py-7 hover:bg-slate-300 hover:bg-opacity-50 sm:px-24 lg:py-8 rounded-lg flex items-center relative lg:px-40"
                      >
                        <div class="absolute left-3 lg:left-4">
                          <div
                            class="lg:w-10 lg:mx-2 mr-2 shadow-md lg:h-10 w-[50px] h-[50px] rounded-full"
                          >
                            <img
                              :src="`https://image.tmdb.org/t/p/original/${cast.profile_path}`"
                              :data-src="`https://image.tmdb.org/t/p/original/${cast.profile_path}`"
                              class="w-full h-full rounded-full object-cover"
                            />
                          </div>
                        </div>
                        <div
                          class=" sm:absolute left-20 sm:left-14 lg:left-24"
                        >
                          <h2
                            class="text-xs font-medium  sm:text-sm lg:text-lg"
                          >
                          {{ cast.name }}
                          </h2>
                          <p class="text-xs sm:text-sm text-slate-600 lg:text-base">{{ cast.character }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </teleport>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-5">
      <button
        @click="setActiveTab('movieCast')"
        :class="{ 'bg-sky-400 text-white': activeTab === 'movieCast' }"
        class="py-3 px-9 rounded-md text-lg"
      >
        Cast
      </button>
      <button
        @click="setActiveTab('movieImages')"
        :class="{ 'bg-sky-400 text-white': activeTab === 'movieImages' }"
        class="py-3 px-7 rounded-md text-lg"
      >
        Images
      </button>
    </div>
    <component :is="tabs[activeTab]" :movie="movie" class=""></component>
    <div
      v-if="showModal"
      style="background-color: rgba(0, 0, 0, 0.5)"
      class="fixed top-0 left-0 w-full h-full flex items-center shadow-lg overflow-y-auto z-50"
    >
      <div class="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
        <div class="dark:bg-gray-900 bg-slate-200 rounded">
          <div class="flex justify-end pr-4 pt-2">
            <button
              @click="showModal = false"
              class="text-3xl leading-none dark:hover:text-gray-300 hover:text-gray-500"
            >
              &times;
            </button>
          </div>
          <div class="modal-body px-8 pt-4 pb-8">
            <div
              class="responsive-container overflow-hidden relative"
              style="padding-top: 56.25%"
            >
              <iframe
                class="responsive-iframe absolute top-0 left-0 w-full h-full"
                :src="`https://www.youtube.com/embed/${movieTrailerKey}`"
                style="border: 0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="h-screen flex justify-center items-center">
    <Spinner />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Spinner from "../components/Spinner.vue";
import MovieCast from "../components/MovieCast.vue";
import MovieImages from "../components/MovieImages.vue";
import { useRoute } from "vue-router";
import axios from "axios";

const showPeapleModal = ref(false);

const activeTab = ref("movieCast");
const tabs = {
  movieImages: MovieImages,
  movieCast: MovieCast,
};

function setActiveTab(component) {
  activeTab.value = component;
}

const route = useRoute();
const movieId = route.params.id;
const renderTemplate = ref(false);
const showModal = ref(false);
const movieTrailerKey = ref("");
const movie = ref({
  title: "",
  poster: "",
  voteAverage: "",
  overview: "",
  credits: {
    cast: [],
  },
  videos: "",
  images: "",
  releaseDate: "",
  genres: [],
});
async function fetchData() {
  try {
    const response = await axios.get(`/movie/${movieId}`, {
      params: {
        append_to_response: "credits,videos,images",
        api_key: "dc5e578883d58c6449781433a1407b68",
      },
    });
    const data = response.data;
    if (data.success !== false) {
      movie.value = {
        title: data.title,
        poster: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        voteAverage: data.vote_average,
        overview: data.overview,
        credits: data.credits,
        image: data.images,
        videos: data.videos,
        images: data.images,
        releaseDate: data.release_date,
        genres: data.genres.map(({ name }) => name),
      };
      console.log(movie.value);
      if (data.videos.results.length > 0) {
        movieTrailerKey.value = data.videos.results[0].key;
      }
      renderTemplate.value = true;
    }
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  fetchData();
});
</script>
<style>
.movie-info {
  position: relative;
}

.movie-info::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 1)
  );
  z-index: 2;
}

.container {
  position: relative;
  z-index: 3;
}
.z-50 {
  z-index: 50;
}

.z-60 {
  z-index: 60;
}
</style>