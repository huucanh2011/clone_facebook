<template>
  <header
    class="flex bg-white border-b-2 border-gray-200 fixed top-0 inset-x-0 z-100 h-12 items-center z-50"
  >
    <div class="w-full max-w-srceen-xl relative mx-auto px-6">
      <div class="flex items-center -px-6">
        <div class="flex-1 flex items-center">
          <router-link :to="'/'">
            <svg
              class="fill-current h-8 w-8 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1365.331"
              height="1365.331"
              viewBox="0 0 14222 14222"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <g fill-rule="nonzero">
                <path
                  d="M14222 7111C14222 3184 11038 0 7111 0S0 3184 0 7111c0 3549 2600 6491 6000 7025V9167H4194V7111h1806V5544c0-1782 1062-2767 2686-2767 778 0 1592 139 1592 139v1750h-897c-883 0-1159 548-1159 1111v1334h1972l-315 2056H8222v4969c3400-533 6000-3475 6000-7025z"
                  fill="#1977f3"
                />
                <path
                  d="M9879 9167l315-2056H8222V5777c0-562 275-1111 1159-1111h897V2916s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9167h1657z"
                  fill="#fefefe"
                />
              </g>
            </svg>
          </router-link>
          <div
            class="flex items-center bg-gray-200 text-gray-600 rounded-full border-0 py-1 px-3 ml-3"
          >
            <button class="pr-2 text-gray-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  class="heroicon-ui"
                  d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"
                />
              </svg>
            </button>
            <input
              type="text"
              class="bg-gray-200 text-gray-600 focus:outline-none focus:border-gray-500"
              placeholder="Search something"
            />
          </div>
        </div>
        <div
          v-if="isAuthenticated"
          class="flex sm:hidden md:flex flex-1 items-center justify-center"
        >
          <router-link
            class="text-dark font-semibold mr-6 focus:outline-none"
            :to="'/'"
          >
            <i class="material-icons-outlined">
              home
            </i>
          </router-link>
          <router-link
            class="text-dark font-semibold mx-6 overflow-hidden"
            :to="`/profile/${ currentUser.id }`"
          >
            <img
              class="h-8 w-8 fill-current rounded-full"
              src="/img/avt-me.jpg"
              alt="avt"
            />
          </router-link>
          <button
            type="button"
            class="text-dark font-semibold ml-6 focus:outline-none"
          >
            <i class="material-icons-outlined">
              chat_bubble_outline
            </i>
          </button>
        </div>
        <div
          v-if="isAuthenticated"
          class="flex-1 flex items-center justify-end"
        >
          <button
            class="text-dark font-semibold hover:text-gray-500 focus:outline-none"
            @click="logout"
          >
            <i class="material-icons-outlined">
              exit_to_app
            </i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "app-header",

    computed: {
      ...mapGetters("authentication", ["currentUser", "isAuthenticated"])
    },

    methods: {
      ...mapActions("authentication", ["LOGOUT"]),
      logout() {
        this.LOGOUT();
      }
    }
  };
</script>
