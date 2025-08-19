<script>
export default {
  data() {
    return {
      name: 'John Doe',
      like: 0,
      active: false,
      assignments: [
        { name: 'Finish project', completed: false },
        { name: 'Read chapter 4', completed: false },
        { name: 'Turn in homework', completed: false }
      ]
    };
  },

  methods: {
    likeAndSub() {
      this.like++;
      this.toggle();
    },
    toggle() {
      this.active = !this.active;
    }
  },

  computed: {
    completedAssignment(){
      return this.assignments.filter(assignment => assignment.completed);
    },
    inProgressAssignment(){
      return this.assignments.filter(assignment => ! assignment.completed);
    }
  }
};
</script>

<template>
  <div 
    class="w-auto h-auto flex flex-row"
    >

    <div class="w-2/5 flex flex-col items-center justify-center h-auto"
      v-show="inProgressAssignment.length">
      <h2 class="mb-6 font-bold">assignments</h2>
      <ul>
        <li 
          v-for="assignment in assignments.filter(a => ! a.completed)" 
          :key="assignment.name">
          <label>
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.completed" />
          </label>
        </li>
      </ul>
    </div>

    <div 
      class="w-2/5 flex flex-col items-center justify-center h-auto"
      v-show="completedAssignment.length"
      >
      <h2 class="mb-6 font-bold">assignments</h2>
      <ul>
        <li v-for="assignment in completedAssignment" :key="assignment.name">
          <label>
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.completed" />

          </label>
        </li>
      </ul>
    </div>

  </div>
</template>

<style></style>
