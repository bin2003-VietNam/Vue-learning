<script>
export default {
    props: {
        assignment: Object,
    }
};
</script>
<template>
    <li >
        <label class="p-2 flex justify-between items-center">
            {{ assignment.name }}
            <input type="checkbox" v-model="assignment.completed" class="ml-4"/>
        </label>
    </li>
</template>