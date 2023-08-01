<template>
  <header
    class="bg-gray-100 absolute w-full left-0 top-0 z-10 flex items-center"
  >
    <div class="container">
      <div class="flex item-center justify-between relative">
        <div class="px-4 py-4">
          <a
            href="#"
            target="_blank"
            class="w-9 h-9 mr-3 rounded-full border border-transparent flex justify-center items-center hover:border-primary hover:bg-primary hover:text-white hover:shadow-md"
          >
            <svg
              role="img"
              class="fill-current text-dark lg:text-dark dark:text-white"
              width="30"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Twitter</title>
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </a>
        </div>

        <div class="flex items-center px-4">
          <nav
            id="nav-menu"
            class="lg:dark:bg-transparent dark:bg-dark dark:shadow-slate-500 hidden absolute bg-white shadow-lg rounded-lg py-4 right-4 w-[250px] top-full lg:block lg:bg-transparent lg:static lg:w-full lg:shadow-none lg:rounded-none"
          >
            <ul class="block lg:flex">
              <li class="group">
                <Search />
              </li>
              <li class="flex items-center pl-8  px-4">
                <div class="toggle-container">
                  <input type="checkbox" class="hidden" id="dark-toggle" />
                  <label
                    for="dark-toggle"
                    class="cursor-pointer"
                  >
                    <svg
                      fill="#000000"
                      class="fill-white hidden dark:block py-2 px-2 rounded-full hover:bg-slate-500 hover:bg-opacity-50"
                      height="40px"
                      width="40px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 457.32 457.32"
                      xml:space="preserve"
                    >
                      <g id="XMLID_467_">
                        <path
                          id="XMLID_922_"
                          d="M228.66,112.692c-63.945,0-115.968,52.022-115.968,115.967c0,63.945,52.023,115.968,115.968,115.968
		s115.968-52.023,115.968-115.968C344.628,164.715,292.605,112.692,228.66,112.692z"
                        />
                        <path
                          id="XMLID_1397_"
                          d="M401.429,228.66l42.467-57.07c2.903-3.9,3.734-8.966,2.232-13.59c-1.503-4.624-5.153-8.233-9.794-9.683
		l-67.901-21.209l0.811-71.132c0.056-4.862-2.249-9.449-6.182-12.307c-3.934-2.858-9.009-3.633-13.615-2.077l-67.399,22.753
		L240.895,6.322C238.082,2.356,233.522,0,228.66,0c-4.862,0-9.422,2.356-12.235,6.322l-41.154,58.024l-67.4-22.753
		c-4.607-1.555-9.682-0.781-13.615,2.077c-3.933,2.858-6.238,7.445-6.182,12.307l0.812,71.132l-67.901,21.209
		c-4.641,1.45-8.291,5.059-9.793,9.683c-1.503,4.624-0.671,9.689,2.232,13.59l42.467,57.07l-42.467,57.07
		c-2.903,3.9-3.734,8.966-2.232,13.59c1.502,4.624,5.153,8.233,9.793,9.683l67.901,21.208l-0.812,71.132
		c-0.056,4.862,2.249,9.449,6.182,12.307c3.934,2.857,9.007,3.632,13.615,2.077l67.4-22.753l41.154,58.024
		c2.813,3.966,7.373,6.322,12.235,6.322c4.862,0,9.422-2.356,12.235-6.322l41.154-58.024l67.399,22.753
		c4.606,1.555,9.681,0.781,13.615-2.077c3.933-2.858,6.238-7.445,6.182-12.306l-0.811-71.133l67.901-21.208
		c4.641-1.45,8.291-5.059,9.794-9.683c1.502-4.624,0.671-9.689-2.232-13.59L401.429,228.66z M228.66,374.627
		c-80.487,0-145.968-65.481-145.968-145.968S148.173,82.692,228.66,82.692s145.968,65.48,145.968,145.967
		S309.147,374.627,228.66,374.627z"
                        />
                      </g>
                    </svg>
                    <svg
                      height="40px"
                      width="40px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 56 56"
                      xml:space="preserve"
                      class="fill-slate-700 rotate-180 block dark:hidden py-2 px-2 rounded-full hover:bg-slate-500 hover:bg-opacity-50"
                    >
                      <path
                        d="M29,28c0-11.917,7.486-22.112,18-26.147C43.892,0.66,40.523,0,37,0C21.561,0,9,12.561,9,28
	                    s12.561,28,28,28c3.523,0,6.892-0.66,10-1.853C36.486,50.112,29,39.917,29,28z"
                      />
                    </svg>
                  </label>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import Search from "./Search.vue";
</script>
<style>
</style>