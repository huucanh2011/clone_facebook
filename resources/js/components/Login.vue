<template>
  <div class="w-6/12 mx-auto mt-20">
    <form
      @submit.prevent="login"
      class="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8"
    >
      <div v-if="errorsServer">
        <div
          class="bg-red-200 text-red-700 px-4 py-3 mb-3 rounded relative"
          role="alert"
        >
          <strong class="font-semibold">{{ errorsServer[0][0] }}</strong>
          <span
            class="absolute top-0 bottom-0 right-0 px-4 py-3"
            @click="closeAlert"
          >
            <svg
              class="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div v-if="errorsServer401">
        <div
          class="bg-red-200 text-red-700 px-4 py-3 mb-3 rounded relative"
          role="alert"
        >
          <strong class="font-semibold">{{ errorsServer401[0] }}</strong>
          <span
            class="absolute top-0 bottom-0 right-0 px-4 py-3"
            @click="closeAlert"
          >
            <svg
              class="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          E-mail
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter e-mail"
          v-model="email"
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
          v-model="password"
        />
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
  import { mapActions } from "vuex";
  export default {
    name: "login-view",

    data() {
      return {
        email: "",
        password: "",
        errorsServer: "",
        errorsServer401: ""
      };
    },

    methods: {
      ...mapActions("authentication", ["LOGIN"]),
      login() {
        this.errorsServer = "";
        this.errorsServer401 = "";
        const credentials = {
          email: this.email,
          password: this.password
        };
        this.LOGIN(credentials)
          .then(response => {
            this.$router.push({ name: "home" });
          })
          .catch(error => {
            if (error.response.status === 400) {
              this.errorsServer = Object.values(error.response.data);
            }
            if (error.response.status === 401) {
              this.errorsServer401 = Object.values(error.response.data);
            }
          });
      },

      closeAlert() {
        this.errorsServer = "";
        this.errorsServer401 = "";
      }
    }
  };
</script>

<style></style>
