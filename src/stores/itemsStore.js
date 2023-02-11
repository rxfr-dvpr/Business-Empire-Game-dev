import { defineStore } from "pinia";

export const useItemsStore = defineStore('Items Store', {
    state: () => ({
        header: {
            title: 'предметы',
            userItems: [
                {
                    name: 'гараж',
                    link: '/items/garage'
                },
                {
                    name: 'ангар',
                    link: '/items/hangar'
                },
                {
                    name: 'гавань',
                    link: '/items/harbour'
                }
            ]
        }
    })
})