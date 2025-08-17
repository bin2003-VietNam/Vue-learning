<script>
export default {
  data() {
    return {
      name: 'John Doe',
      like: 0,
    };
  },

  methods: {
    likeAndSub() {
      this.like++;
    }
  },
};
</script>

<template>
  <div class="w-screen flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 class="text-3xl font-bold text-blue-500">
      Hi My name is {{ name }}
    </h1>

    <h2>
      this is {{ like }} likes
      <button v-on:click="likeAndSub()">Button</button>
    </h2>
  </div>
</template>

<style scoped></style>
