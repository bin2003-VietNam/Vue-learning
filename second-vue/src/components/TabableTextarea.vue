<script setup>

defineProps({
    modelValue: String
})

let emit = defineEmits(['update:modelValue'])

function onTagPress(e) {
    let t = e.target

    let val = t.value,
        start = t.selectionStart,
        end = t.selectionEnd;

    t.value = val.substring(0, start) + "\t" + val.substring(end);

    t.selectionStart = t.selectionEnd = start + 1;

}

</script>
<template>
   <textarea
      @keydown.tab.prevent="onTagPress"
      v-text="modelValue" 
      @keyup="emit('update:modelvalue', e.target.value)"
      />
</template>
