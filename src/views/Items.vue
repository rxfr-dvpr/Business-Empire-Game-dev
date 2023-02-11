<template>
    <main class="main">

        <section class="items__section">
            <div class="container">
                <div class="row">

                    <h2 class="items__title all-title">{{ store.header.title }}</h2>

                    <ul class="items__list">
                        <li class="items__list-item" v-for="(link, idx) in store.header.userItems" :key="idx">
                            <router-link :to="link.link" class="items__list-link">
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>

                </div>
            </div>
        </section>

    </main>

    <router-view/>
</template>

<script>
import { useItemsStore } from "@/stores/itemsStore.js";

export default {
    name: 'Items',
    data() {
        return {
            store: useItemsStore()
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

    .items__section {
        width: 100%;
        padding: 25px 0;

        .row {
            flex-direction: column;
            align-items: flex-start;
            row-gap: 10px;
        }

        .items__title {
            text-transform: capitalize;
            margin-bottom: 10px;
        }

        .items__list {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            column-gap: 10px;

            &-item {
                width: 100%;
            }

            &-link {
                width: 100%;
                padding: 40px 10px;
                background: red;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 15px;
                text-transform: capitalize;
                color: var(--white-color);
                font-size: 30px;
                font-weight: 600;
            }
        }
    }
}


</style>