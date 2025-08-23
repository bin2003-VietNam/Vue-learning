<script setup>
import { onMounted, ref } from 'vue';
import TabableTextarea from '@/components/TabableTextarea.vue'
import { coutner } from '@/store/counterStore';
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
    <p>
      About Page . the current count is {{ coutner.count }}
    </p>
  </div>
</template>
