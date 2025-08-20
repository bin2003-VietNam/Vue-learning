<script>
import Assignments from './compoents/Assignments.vue';
export default{
  data(){
    return {
      name: ''
    }
  },
  components:{
    Assignments
  }
}
</script>

<template>
  <div class="w-screen flex items-center justify-center h-screen bg-gray-900 text-white">
    <!-- <input type="text" v-model="name"/> -->
    <Assignments />

  </div>
</template>
