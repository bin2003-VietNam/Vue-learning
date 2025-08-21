<script>
export default {
    props:{
        assignments: Array
    },
    data() {
        return {
            newAssignment: ''
        };
    },
    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = ""
        }
    }

};
</script>
<template>
    <form @submit.prevent="add">
        <div class="border border-gray-500 flex">
            <input v-model="newAssignment" type="text" placeholder="New Assignment" class="text-black p-2" />
            <button type="submit" class="bg-white text-black p-2 bl-2">Submit</button>
        </div>
    </form>
</template>