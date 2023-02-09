import { defineStore } from "pinia";

export const useIncomeStore = defineStore('Income Store', {
    state: () => ({
        balance: 7580,
        header: {
            title: 'заработак',
            balance: {
                top: {
                    cardNum: '**** 5743',
                    cardDate: '07/26'
                },
                bottom: {
                    name: 'баланс'
                }
            }
        }
    }),
    actions: {
        incrBalance() {
            this.balance += 10
        },
        incrBalanceRealTime() {
            setInterval(() => {
                this.balance += 12
            }, 3500);
        },
        getData() {
        }
    }
})