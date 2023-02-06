<template>
  <nav class="nav">
    <div class="container">
        <div class="row">
            <ul class="nav__list">
                <li class="nav__list-item" v-for="(link, idx) in navStore.links" :key="idx">
                    <router-link :to="link.url" class="nav__list-link">
                        <span class="link-icon" v-html="link.icon"></span>
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<script>
import { useNavStore } from "@/stores/navStore.js";

export default {
    name: 'NavBar',
    data() {
        return {
            navStore: useNavStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 15px 0;
    background: var(--white-color);
    box-shadow: 0 0 15px rgba($color: #A5B1C2, $alpha: .4);

    .row {
        justify-content: space-between;
        align-items: center;
    }

    &__list {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

</style>