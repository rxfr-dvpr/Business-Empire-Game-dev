<template>

  <main class="main">

    <section class="income__header">
      <div class="container">
        <div class="row">
          <h2 class="income__header-title all-title">{{ store.header.title ? store.header.title : 'no title' }}</h2>

          <div class="income__header-balance">

            <div class="balance-top">
              <span class="card-num">
                <span class="card-brand">
                  <span class="card-brand-round" :class="`round-${round}`" v-for="round in 2" :key="round"></span>
                </span>

                {{ balance.top.cardNum ? balance.top.cardNum : 'no number' }}
              </span>

              <span class="card-date">{{ balance.top.cardDate ? balance.top.cardDate : 'no date' }}</span>
            </div>

            <div class="balance-bottom">
              <p class="balance-name">
                {{ balance.bottom.name ? balance.bottom.name : 'null' }}:
              </p>
              <span class="balance-num">$ {{ store.balance ? store.balance : 'error balance' }}</span>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="click__zone" @click="store.incrBalance">
      <div class="container">
        <div class="row">
          <span class="click__zone-icon"
            ><i class="fal fa-hand-point-up"></i
          ></span>

          <p class="click__zone-text">
            Кликайте в этой области, чтобы зарабатывать деньги
          </p>
        </div>
      </div>
    </section>

  </main>

</template>

<script>
import { useIncomeStore } from "@/stores/incomeStore.js";

export default {
  name: "Income",
  data() {
    return {
      store: useIncomeStore(),
    };
  },
  computed: {
    balance() {
      return this.store.header.balance;
    },
  },
};
</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.income__header {
  width: 100%;
  padding: 25px 0 20px;
  background: linear-gradient(180deg,rgb(4, 148, 214) 0%,rgb(3, 14, 114) 100%);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  user-select: none;

  .row {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
  }

  &-title {
    font-weight: 800;
    text-transform: capitalize;
  }

  &-balance {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 25px;
    background: #2f2f2f;
    border-radius: 30px;
    row-gap: 30px;

    .balance-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .card-num {
        color: gray;
        font-size: calc(20px + 5 * (100vw / 1920));
        font-family: var(--card-num-font);
        letter-spacing: 2px;
        display: flex;
        column-gap: 5px;
        align-items: center;

        .card-brand {
          max-width: max-content;
          width: 100%;
          display: flex;
          align-items: center;
          position: relative;

          &-round {
            min-width: 20px;
            min-height: 20px;
            height: 100%;
            max-height: 20px;
            border-radius: 50%;
            display: block;

            &.round-1 {
              background: rgba($color: yellow, $alpha: .8);
            }

            &.round-2 {
              background: rgba($color: red, $alpha: .5);
              transform: translateX(-7px);
            }
          }
        }
      }

      .card-date {
        color: gray;
        font-size: calc(20px + 5 * (100vw / 1920));
        font-family: var(--card-num-font);
        letter-spacing: 1.5px;
      }
    }

    .balance-bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 5px;

      .balance-name {
        color: gray;
        font-size: 17px;
        text-transform: capitalize;
      }

      .balance-num {
        color: var(--white-color);
        font-weight: 500;
        font-size: calc(25px + 5 * (100vw / 1920));
        letter-spacing: 1px;
      }
    }
  }
}

.click__zone {
  width: 100%;
  height: 100%;
  user-select: none;
  cursor: pointer;
  padding: 50px 0 100px;
  background: var(--white-color);

  .row {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    row-gap: 10px;
  }

  .container {
    padding: 0 35px;
  }

  &-icon i {
    font-size: calc(80px + 40 * (100vw / 1920));
  }

  &-text {
    font-size: calc(16px + 4 * (100vw / 1920));
  }
}

@media (min-width: 1920px) {
  .income__header {
    .balance-num {
      font-size: 30px !important;
    }

    .card-num, .card-date {
      font-size: 25px !important;
    }
  }

  .click__zone {
    &-icon i {
      font-size: 120px !important;
    }

    &-text {
      font-size: 20px !important;
    }
  }
}

@media (max-width: 768px) {
  .income__header {
    .balance-num {
      font-size: calc(25px + (5 + 5 * 0.7) * ((100vw - 320px) / 1920));
    }

    .card-num, .card-date {
      font-size: calc(20px + (5 + 5 * 0.7) * ((100vw - 320px) / 1920));
    }
  }

  .click__zone {
    &-icon i {
      font-size: calc(80px + (40 + 40 * 0.7) * ((100vw - 320px) / 1920));
    }

    &-text {
      font-size: calc(16px + (4 + 4 * 0.7) * ((100vw - 320px) / 1920));
    }
  }
}
</style>
