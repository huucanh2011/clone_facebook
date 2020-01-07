<template>
  <div>
    <app-header></app-header>
    <main class="flex mt-12">
      <div class="min-h-screen w-4/12 border-r-2 border-b-2 border-gray-200">
        <side-bar></side-bar>
      </div>
      <div class="w-8/12 bg-gray-200 min-h-screen flex flex-wrap">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import AppHeader from "./components/Header.vue";
  import SideBar from "./components/SideBar.vue";

  export default {
    name: "App",

    components: {
      AppHeader,
      SideBar
    }
  };
</script>

<style></style>
