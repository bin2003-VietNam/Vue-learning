<template>
    <div class="flex gap-2">
        <button v-for="tag in tags" v-bind:key="tag"  class="border rounded px-1 py-px text-xs"
            :class="{
                'border-blue-500 text-blue-500': tag == currentTag
            }"
            @click="$emit('change', tag)"
            >
            {{ tag }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        initialTags: Array,
        currentTag: String
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}
</script>