<template>
    <main class="main">

        <section class="status__section">
            <div class="container">
                <div class="row">

                    <div class="status__top">
                        <h2 class="status__top-title all-title">{{ header.title }}</h2>
                    </div>

                    <div class="status__statistics">
                        <p class="statistics-title">{{ statis.title }}</p>
                        <span class="status-num">$ {{ statis.balance }}</span>
                    </div>

                </div>
            </div>
        </section>

    </main>
</template>

<script>
import { useProfileStore } from "@/stores/profileStore.js";

export default {
    name: 'Profile',
    data() {
        return {
            store: useProfileStore()
        }
    },
    computed: {
        header() {
            return this.store.header
        },
        statis() {
            return this.store.statistics
        }
    }
}

</script>

<style lang="scss" scoped>

.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .status__section {
        width: 100%;
        padding: 35px 0 20px;

        .row {
            flex-direction: column;
            align-items: flex-start;
            row-gap: 20px;
        }

        .status__top {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-title {
                text-transform: capitalize;
            }
        }

        .status__statistics {
            width: 100%;
            background: #ECF1F5;
            padding: 25px 25px 15px;
            border-radius: 20px;

            .statistics-title {
                color: var(--dark-gray-color);
                text-transform: capitalize;
                font-size: 25px;
                font-weight: 700;
            }

            .status-num {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: 1px;
            }
        }
    }
}

</style>