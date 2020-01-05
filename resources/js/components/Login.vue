<template>
  <div class="w-6/12 mx-auto mt-20">
    <form class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8">
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          E-mail
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter e-mail"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter password"
        />
        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
      </div>
      <div class="mb-6">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </div>
      <div class="flex items-center justify-between">
        <router-link
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          :to="'/signup'"
        >
          Sign Up
        </router-link>
        <a
          class="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "login-view"
  };
</script>

<style></style>
