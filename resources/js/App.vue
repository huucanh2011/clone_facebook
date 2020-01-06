<template>
  <div>
    <app-header></app-header>
    <main class="flex mt-16">
      <div class="min-h-screen w-4/12 border-r-2 border-b-2 border-gray-200">
        <div class="px-6 my-6 flex flex-col">
          <router-link :to="'/'" class="text-base font-semibold hover:bg-gray-400 hover:text-white px-4 py-2 rounded w-full">Home</router-link>
          <router-link v-if="!isAuthenticated" :to="'/login'" class="text-base font-semibold hover:bg-gray-400 hover:text-white px-4 py-2 rounded w-full">Login</router-link>
          <router-link v-if="!isAuthenticated" :to="'/signup'" class="text-base font-semibold hover:bg-gray-400 hover:text-white px-4 py-2 rounded w-full">Sign Up</router-link>
        </div>
      </div>
      <div class="w-8/12 bg-gray-200 min-h-screen flex flex-wrap">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import AppHeader from "./components/Header.vue";

  export default {
    name: "App",

    components: {
      AppHeader
    },

    computed: {
      ...mapGetters('authentication', ["isAuthenticated"])
    }
  };
</script>

<style></style>
