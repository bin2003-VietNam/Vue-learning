<script>
import AssignmentList from './AssignmentList.vue';

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
    filters(){
        return {
            completed: this.assignments.filter(assignment => assignment.completed),
            inProgress: this.assignments.filter(assignment => ! assignment.completed)
        }
    }
  },

  components: {
    AssignmentList
  }
};
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full h-full">
        <AssignmentList :assignments="filters.inProgress" title="inProgress Assignment" />
        <AssignmentList :assignments="filters.completed" title="Completed Assignment" />
    </div>
</template>