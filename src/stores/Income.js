import { defineStore } from "pinia";

export const useIncomeStore = defineStore('Income Store', {
    state: () => ({
        balance: 7580
    }),
    actions: {
        incrBalance() {
            this.balance += 10
        },
        getData() {
            async function fetchData() {
                const require = await fetch('https://jsonplaceholder.typicode.com/comments', {method: 'GET'})
                const response = await require.json()
                console.log(response)
            } 
            fetchData()
        }
    }
})