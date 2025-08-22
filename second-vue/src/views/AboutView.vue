<script setup>
import { onMounted, ref } from 'vue';
import TabableTextarea from '@/components/TabableTextarea.vue'

let textarea = ref(null)

let comment = ref('test value')

setTimeout(()=>{
  comment.value='it worked'
},2000)


</script>
<template>
  <div class="about">
    <form>
      <TabableTextarea style="width:100%; height: 300px;" v-model="comment"/>
    </form>
  </div>
</template>
