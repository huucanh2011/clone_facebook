<template>
  <div
    class="flex flex-col bg-white rounded-lg shadow-md border-gray-700 px-4 py-3 my-5"
  >
    <div class="flex flex-row items-center">
      <img
        class="rounded-full w-10 h-10 object-cover"
        src="/img/avt-me.jpg"
        alt="avatar"
      />
      <div class="ml-4">
        <span class="font-semibold text-lg">{{ authorName }}</span>
        <p class="text-gray-600 font-light text-sm">{{ createdAt | myDate }}</p>
      </div>
    </div>
    <div class="my-3">
      <p class="text-justify">
        {{ content }}
      </p>
    </div>
    <div v-if="imagePost" class="border-gray-800 rounded-sm -mx-4 mb-3">
      <img
        class="w-full object-cover"
        :src="`/storage/${imagePost}`"
        alt="image_post"
      />
    </div>
    <div class="flex flex-row justify-between items-center my-3">
      <div class="flex flex-row items-center">
        <i class="material-icons-outlined">
          thumb_up_alt
        </i>
        <p class="ml-2 text-gray-800">{{ totalLike }} likes</p>
      </div>
      <div class="text-gray-800">0 comments</div>
    </div>
    <div class="flex flex-row justify-between items-center">
      <button
        class="flex-1 flex flex-row justify-center rounded-lg py-2 hover:bg-blue-600 hover:text-white focus:outline-none"
        :class="currentUserLike.some(item => item.post_id === postId) ? 'bg-blue-600 text-white' : ''"
        @click="onClickLike(postId)"
      >
        <i class="material-icons-outlined">
          thumb_up_alt
        </i>
        <div class="ml-2 font-medium">Like</div>
      </button>
      <button
        class="flex-1 flex flex-row justify-center rounded-lg py-2 hover:bg-blue-600 hover:text-white focus:outline-none"
      >
        <i class="material-icons-outlined">
          comment
        </i>
        <div class="ml-2 font-medium">Comment</div>
      </button>
    </div>
    <!-- <div
      class="flex flex-col justify-center items-start border-gray-400 border-0 border-t mt-3"
    >
      <div class="flex flex-row items-center w-full my-2">
          <input type="text" class="bg-gray-300 w-full rounded-lg px-4 py-2 focus:outline-none" placeholder="Write your comment">
          <button class="bg-gray-300 font-normal rounded-lg p-2 ml-2 focus:outline-none">
            Send
          </button>
        </div>

      <div class="flex flex-row justify-start items-start w-full my-2">
        <img
          class="rounded-full w-8 h-8 object-cover mt-1 ml-1"
          src="/img/avt-me.jpg"
          alt="avatar"
        />
        <div class="ml-3 w-full">
          <div class="bg-gray-200 rounded-lg p-2">
            <span class="text-blue-700 font-bold">Canh</span>
            Comment content
          </div>
          <p class="text-gray-600 font-light text-sm">1 second ago</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import store from "../store";
  export default {
    name: "post-item",

    props: {
      post: {
        type: Object,
        required: true
      }
    },

    data() {
      return {
        postId: this.post.id,
        authorName: this.post.user.name,
        content: this.post.content,
        createdAt: this.post.created_at,
        imagePost: this.post.image,
        userId: this.post.user_id,
        totalLike: this.post.likes.length
      };
    },

    watch: {
      totalLike() {
        return this.post.likes.length
      }
    },

    computed: {
      ...mapGetters("authentication", ["currentUser", "currentUserLike", "isAuthenticated"]),
    },

    methods: {
      ...mapActions("like", ["LIKE_POST"]),
      onClickLike(postId) {
        const like = {
          post_id: postId
        };
        this.LIKE_POST(like).then(res => {
          store.dispatch("authentication/CHECK_AUTH")
        });
      }
    }
  };
</script>

<style></style>
