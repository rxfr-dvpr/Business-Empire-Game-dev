import { defineStore } from "pinia";

export const useNavStore = defineStore('Nav Store', {
    state: () => ({
        links: [
            {
                name: 'инвестиции',
                url: '/invest',
                icon: '<i class="far fa-chart-line"></i>'
            },
            {
                name: 'бизнес',
                url: '/business',
                icon: '<i class="fas fa-building"></i>'
            },
            {
                name: 'заработак',
                url: '/income',
                icon: '<i class="fas fa-usd-circle"></i>'
            },
            {
                name: 'предметы',
                url: '/items',
                icon: '<i class="fas fa-sitemap"></i>'
            },
            {
                name: 'профиль',
                url: '/profile',
                icon: '<i class="fal fa-user-circle"></i>'
            }
        ]      
    })
})