<script>
import Assignments from './compoents/Assignments.vue';
import Panel from './compoents/Panel.vue';
export default {
  data() {
    return {
      name: ''
    }
  },
  components: {
    Assignments,
    Panel
  }
}
</script>

<template>
  <div class="grid gap-6 p-10 bg-gray-500 h-full">
    <!-- <input type="text" v-model="name"/> -->
    <Assignments />
    <Panel>
      this is my default content
    </Panel>

    <Panel>
      <template v-slot:heading>
        This is my heading content
      </template>
      this is my default content
    </Panel>

    <Panel>
      <template v-slot:heading>
        This is my heading content
      </template>
      this is my default content

      <template v-slot:footer>
        <div class="text-red-600">
          this is Footer
        </div>
      </template>
    </Panel>

    <Panel theme="light">
      <template v-slot:heading>
        This is my heading content
      </template>
      this is my default content

      <template v-slot:footer>
        <div class="text-red-600">
          this is Footer
        </div>
      </template>
    </Panel>

  </div>
</template>
