<script setup>
import { ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: "bin"
  },
  processing:{
    type: Boolean,
    default: false
  }
})

const count = ref(0)

function clicked() {    // simulate loading
  setTimeout(() => {
    count.value++
// stop loading
  })
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <button
      @click="clicked"
      :class="{
        'bg-blue-50': true,
        'bg-white': props.name === 'phúc',   // conditionally check
        'bg-purple-50': props.name === 'secondary',
        'is-loading': processing
      }"
    >
      {{ props.name }}
    </button>
    <h1>{{ count }}</h1>
  </div>
</template>

<style>
.is-loading {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: #FF3D00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}
</style>
