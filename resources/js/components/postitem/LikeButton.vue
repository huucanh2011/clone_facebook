<template>
  <button
    class="flex-1 flex flex-row justify-center rounded-lg py-2 hover:bg-blue-600 hover:text-white focus:outline-none"
    :class="color"
    @click="onClickLike"
  >
    <i class="material-icons-outlined">
      thumb_up_alt
    </i>
    <div class="ml-2 font-medium">Like</div>
  </button>
</template>

<script>
  import LikeApi from "../../api/like";
  export default {
    props: ["content"],

    data() {
      return {
        liked: this.content.liked,
        postId: this.content.id,
        count: this.content.likes_count
      };
    },

    computed: {
      color() {
        return this.liked ? "bg-blue-600 text-white" : "";
      }
    },

    methods: {
      onClickLike() {
        this.liked ? this.decr() : this.incr();
        this.liked = !this.liked;
      },
      incr() {
        let like = { post_id: this.postId };
        LikeApi.like(like).then(res => {
          console.log(res);
          eventBus.$emit(`click-like-button-${this.postId}`, ++this.count);
        });
      },
      decr() {
        let like = { post_id: this.postId };
        LikeApi.unlike(like).then(res => {
          console.log(res);
          eventBus.$emit(`click-like-button-${this.postId}`, --this.count);
        });
      }
    }
  };
</script>

<style></style>
