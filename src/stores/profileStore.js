import { defineStore } from "pinia";

export const useProfileStore = defineStore('Profile Store', {
    state: () => ({
        header: {
            title: 'профиль',
        },
        statistics: {
            title: 'состояние',
            balance: 182495859
        }
    })
})