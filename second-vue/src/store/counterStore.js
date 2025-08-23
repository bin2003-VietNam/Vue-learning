import { ref } from "vue";

export let coutner = ref({
    count: 0,
    increment(){
        this.count++
    }
})