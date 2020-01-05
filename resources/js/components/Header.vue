<template>
  <header
    class="flex bg-white border-b-2 border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center"
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
            class="flex items-center bg-gray-200 text-gray-600 rounded-full py-2 px-4 ml-3"
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
        <div class="flex sm:hidden md:flex flex-1 items-center justify-center">
          <router-link
            class="text-dark font-semibold mr-6 focus:outline-none hover:border-b-2 hover:border-teal-400"
            :to="'/'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M12 2a1 1 0 00-.71.297l-10.087 8.8A.5.5 0 001 11.5a.5.5 0 00.5.5H4v8a1 1 0 001 1h4a1 1 0 001-1v-6h4v6a1 1 0 001 1h4a1 1 0 001-1v-8h2.5a.5.5 0 00.5-.5.5.5 0 00-.203-.402l-10.08-8.795a1 1 0 00-.006-.006A1 1 0 0012 2z"
              />
            </svg>
          </router-link>
          <router-link
            class="text-dark font-semibold mx-6 overflow-hidden"
            :to="'/profile/:id'"
          >
            <img
              class="h-8 w-8 fill-current rounded-full"
              src="/img/avt-me.jpg"
              alt="avt"
            />
          </router-link>
          <button
            type="button"
            class="text-dark font-semibold ml-6 focus:outline-none focus:border-teal-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="24"
              height="24"
            >
              <path
                d="M25 2C12.3 2 2 11.602 2 23.5c0 6.3 2.898 12.2 8 16.3v8.802l8.602-4.5c2.097.597 4.199.796 6.398.796 12.7 0 23-9.597 23-21.5C48 11.602 37.7 2 25 2zm2.3 28.602l-5.8-6.204L10.7 30.5l12-12.7 5.902 5.9 10.5-5.9z"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-end">
          <div class="my-2">
            <button
              class="text-dark font-semibold hover:text-gray-500 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  d="M10.49 2a.998.998 0 00-.98.809l-.334 1.714c-.821.31-1.58.744-2.246 1.291l-1.645-.566a1 1 0 00-1.191.445L2.586 8.307c-.24.415-.152.941.209 1.255l1.318 1.147C4.045 11.13 4 11.559 4 12c0 .44.045.87.113 1.291l-1.318 1.146c-.361.315-.448.841-.21 1.256l1.509 2.614a1 1 0 001.191.447l1.645-.567a7.984 7.984 0 002.246 1.29l.334 1.714c.092.47.501.809.98.809h3.02a.998.998 0 00.98-.809l.334-1.714c.821-.31 1.58-.744 2.246-1.291l1.645.566a1 1 0 001.191-.445l1.508-2.616a1 1 0 00-.209-1.254l-1.318-1.146c.068-.421.113-.85.113-1.291 0-.44-.045-.87-.113-1.291l1.318-1.146c.361-.315.448-.841.21-1.256l-1.509-2.614a1 1 0 00-1.191-.447l-1.645.566a7.984 7.984 0 00-2.246-1.289L14.49 2.81A.998.998 0 0013.51 2h-3.02zM12 8a4 4 0 110 8 4 4 0 010-8z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "app-header"
  };
</script>
