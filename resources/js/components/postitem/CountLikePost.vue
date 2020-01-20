<template>
  <p class="ml-2 text-gray-800">{{ count }} likes</p>
</template>

<script>
  export default {
    name: "count-like-post",

    props: ["countlike"],

    data() {
      return {
        count: this.countlike.likes_count,
        postId: this.countlike.id,
      };
    },

    created() {
      eventBus.$on(`click-like-button-${this.postId}`, this.computedLike);
    },

    beforeDestroy() {
      eventBus.$off(`click-like-button-${this.postId}`, this.computedLike);
    },

    methods: {
      computedLike(data) {
        this.count = data;
      }
    }
  };
</script>

<style></style>
