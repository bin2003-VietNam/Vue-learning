<script>
export default {
  data() {
    return {
      name: 'John Doe',
      like: 0,
      active: false,
    };
  },

  methods: {
    likeAndSub() {
      this.like++;
      this.toggle();
    },
    toggle(){
      this.active = ! this.active;
    }
  },
};
</script>

<template>
  <div class="w-screen flex flex-col items-center justify-center h-screen ">
    <h2>
      <button @click="toggle()" :class="active ? 'text-red-500' : 'text-blue-500'">
        Button
      </button>
    </h2>
  </div>
</template>

<style></style>
