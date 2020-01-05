<template>
  <div class="w-6/12 m-auto">
    <form class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="name"
        >
          Name
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter name"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="email"
        >
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter email"
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
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Confirm Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cpassword"
          type="password"
          placeholder="Confirm Password"
        />
        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
      </div>
      <div class="mb-6">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
      <div class="flex items-center justify-between">
        <router-link
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          :to="'/login'"
        >
          Login
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
    name: "signup-view"
  };
</script>

<style></style>
