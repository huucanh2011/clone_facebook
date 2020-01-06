<template>
  <div class="w-8/12 mx-auto my-5">
    <!-- <add-new-post></add-new-post> -->

    <div
      class="flex flex-row justify-between items-center bg-white rounded-lg shadow-md px-4 py-3"
    >
      <div class="w-1/12">
        <img
          class="rounded-full w-10 h-10 object-cover"
          src="/img/avt-me.jpg"
          alt="avatar"
        />
      </div>
      <div class="w-10/12">
        <input
          type="text"
          class="bg-gray-300 w-full rounded-full px-6 py-2 focus:outline-none"
          placeholder="What's on your mind?"
          v-model="contentNewPost"
          @keyup.enter="addPost"
          @keyup.esc="cancelAddPost"
        />
      </div>
      <div class="w-1/12">
        <button
          class="bg-gray-300 rounded-full w-10 h-10 ml-auto flex justify-center items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              class="heroicon-ui"
              d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm16 8.59V6H4v6.59l4.3-4.3a1 1 0 011.4 0l5.3 5.3 2.3-2.3a1 1 0 011.4 0l1.3 1.3zm0 2.82l-2-2-2.3 2.3a1 1 0 01-1.4 0L9 10.4l-5 5V18h16v-2.59zM15 10a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
    </div>

    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
    ></post-item>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import store from "../store";

  // import AddNewPost from "../components/AddNewPost";
  import PostItem from "../components/PostItem";

  export default {
    components: {
      // AddNewPost,
      PostItem
    },

    created() {
      store.dispatch("post/FETCH_POSTS");
    },

    computed: {
      ...mapGetters("post", ["posts", "isLoading"])
    },

    data() {
      return {
        contentNewPost: ""
      };
    },

    methods: {
      ...mapActions("post", ["ADD_POST"]),
      addPost() {
        if(this.contentNewPost.trim().length === 0) {
          return;
        }
        const post = {
          content: this.contentNewPost
        };
        this.ADD_POST(post);
        this.contentNewPost = "";
      },
      cancelAddPost() {
        this.contentNewPost = "";
      }
    }
  };
</script>

<style></style>
