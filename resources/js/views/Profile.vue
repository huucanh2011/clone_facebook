<template>
  <div class="bg-gray-300 w-full">
    <div class="relative h-64 w-full mb-10">
      <img
        class="h-full w-full object-cover z-0"
        src="/storage/image_cover.jpeg"
        alt="image_cover"
      />
      <div
        class="absolute flex flex-row items-center z-20"
        :style="{ left: '3.5rem', bottom: '-2rem' }"
      >
        <img
          class="h-32 w-32 rounded-full border-4 border-gray-100 object-cover"
          src="/img/avt-me.jpg"
          alt="avatar"
        />
        <span class="ml-4 text-white font-semibold text-3xl">{{
          user.name
        }}</span>
      </div>
      <!-- <div
        class="absolute flex flex-row items-center z-20"
        :style="{ right: '3.5rem', bottom: '0.75rem' }"
      >
        <button class="bg-gray-400 rounded px-2 py-1">Add Friend</button>
      </div> -->
    </div>

    <div class="w-8/12 mx-auto my-5">
      <post-item
        v-for="post in postsUser"
        :key="post.id"
        :post="post"
      ></post-item>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import PostItem from "../components/postitem/PostItem";
  export default {
    components: {
      PostItem
    },
    created() {
      this.GET_USER_PROFILE(this.$route.params.id);
    },
    computed: {
      ...mapGetters("user", ["user", "postsUser"])
    },
    methods: {
      ...mapActions("user", ["GET_USER_PROFILE"])
    }
  };
</script>

<style></style>
