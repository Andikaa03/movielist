<template>
    <div id="example" class="max-w-4xl mx-auto mb-20">
      <h2 class="text-center my-4 text-white font-semibold text-3xl mt-20">
        Upcoming Movies
      </h2>
      <Carousel3d class="carousel-container" :controls-visible="true" :clickable="false">
        <Slide
          class="carousel-slide"
          :index="i"
          :key="movie.id"
          v-for="(movie, i) in upcomingMovies"
        >
          <figure class="carousel-figure">
            <img
              class="carousel-image hover:opacity-75 transition ease-in-out duration-150"
              :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
              :alt="movie.title"
            />
            <router-link :to="`/Detail/${movie.id}`">
              <figcaption class="carousel-caption">
                {{ movie.title }}
              </figcaption>
            </router-link>
          </figure>
        </Slide>
      </Carousel3d>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  import axios from "axios";
  
  export default {
    components: {
      Carousel3d,
      Slide,
    },
    setup() {
      const upcomingMovies = ref([]);
  
      async function fetchUpcomingMovies() {
        try {
          const response = await axios.get(
            "https://api.themoviedb.org/3/movie/upcoming",
            {
              params: {
                api_key: "dc5e578883d58c6449781433a1407b68",
              },
            }
          );
          upcomingMovies.value = response.data.results;
        } catch (error) {
          console.log(error);
        }
      }
  
      onMounted(() => {
        fetchUpcomingMovies();
      });
  
      return {
        upcomingMovies,
        fetchUpcomingMovies
      };
    },
  };
  </script>
  
  <style scoped>
  #example {
    margin-top: -3.5rem;
  }
  
  .carousel-container {
    width: 100%;
  }
  
  .carousel-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carousel-figure {
    position: relative;
  }
  
  .carousel-image {
    width: 400px;
    height: 600px;
  }
  
  .carousel-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
  }
  
  .carousel-caption::selection {
    background-color: transparent;
  }
  </style>
  