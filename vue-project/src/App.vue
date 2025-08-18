<script setup>
import buttonCount from './compoents/buttonCount.vue';
import buttonCountProps from './compoents/buttonCountProps.vue';
import Slot from './compoents/Slot.vue';
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <!-- <buttonCount />
    <buttonCount />
    <buttonCount />
    <buttonCountProps name="John Doe" />
    <buttonCountProps name="Jane Smith" />
    <buttonCountProps name="Alice Johnson" /> -->
    <Slot>
      <p>THIS IS SLOT CONTENT</p>
    </Slot>
  </div>
</template>