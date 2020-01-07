<template>
  <div class="px-6 my-6 flex flex-col">
    <router-link
      :to="'/'"
      class="text-base font-semibold hover:bg-gray-400 hover:text-white px-4 py-2 rounded w-full"
      >Home</router-link
    >
    <router-link
      v-if="!loggedIn"
      :to="'/login'"
      class="text-base font-semibold hover:bg-gray-400 hover:text-white px-4 py-2 rounded w-full"
      >Login</router-link
    >
    <router-link
      v-if="!loggedIn"
      :to="'/signup'"
      class="text-base font-semibold hover:bg-gray-400 hover:text-white px-4 py-2 rounded w-full"
      >Sign Up</router-link
    >
  </div>
</template>

<script>
  export default {
    name: "side-bar",
    computed: {
      loggedIn() {
        return this.$store.getters["authentication/isAuthenticated"];
      }
    }
  };
</script>

<style></style>
