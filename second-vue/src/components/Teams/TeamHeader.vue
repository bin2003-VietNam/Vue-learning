<template>
    <header class="flex justify-between">
        <div>
            <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
                :disabled="!team.spotsRemaining">Add Member ({{ team.spotsRemaining }} Spots
                Left)</button>
        </div>
        <div>
            <div class="inline-flex items-center text-3xl relative">
                <img :src="pic" alt="" class="h-10 w-10 rounded-3xl mr-2">
                <h3>{{ team.name }}</h3>
                <div
                    class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">
                    {{ team.spots }}</div>
            </div>
        </div>
    </header>
</template>

<script setup>
import pic from "@/assets/pic.jpg";
import { useTeamStore } from '@/store/TeamStore';

let team = useTeamStore()

</script>