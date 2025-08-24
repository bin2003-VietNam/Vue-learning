import { defineStore } from "pinia"

export let useTeamStore = defineStore('team', {
    state: () => ({
        name: '',
        spots: 0,
        members: []
    }),

    actions: {
        async fill() {
            // import('@/team.json').then(json => {
            //     //     let data = json.default
            //     //    this.$patch({
            //     //         name: data.name,
            //     //         spots: data.spots,
            //     //         members: data.members
            //     //    })
            // })

            let json = await import('@/team.json')
            this.$state = json.default
        }
    },

    getters: {
        spotsRemaining() {
            return this.spots - this.members.length
        }
    }
})