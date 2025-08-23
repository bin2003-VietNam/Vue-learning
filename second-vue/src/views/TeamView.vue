<script setup>
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamHeader from "@/components/Teams/TeamHeader.vue"
import TeamFooter from "@/components/Teams/TeamFooter.vue"
import team from "@/team.json"

</script>

<template>
    <div class="">
        <TeamHeader :team="team"/>


        <div class="place-self-center flex flex-col gap-y-3">
            <TeamMembers :team="team"/>
            <p class="text-right text-gray-600 italic" v-show="team.members.length == team.spots">There are no remaining
                team spots. Upgrade to add more.</p>
        </div>
        <TeamFooter :team="team"/>
    </div>
</template>