<script setup>
import { useFlash } from '@/composables/useFlash';

let { flash } = useFlash();

</script>
<template>
  <div class="about">
    <button @click="flash('about page clicked')">click</button>>
  </div>
</template>
