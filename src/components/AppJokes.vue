<template>
  <div class="jokes-wrapper">
    <div class="jokes">
      <router-link
        :to="{ name: 'PageJoke', params: { id: joke.id } }"
        v-for="joke in getSliceJokes"
        :key="joke.id"
        class="jokes__item"
      >
        <p>{{ joke.value }}</p>
        <div class="jokes__footer">
          <p>{{ joke.id }}</p>
          <p>{{ getDate(joke.created_at) }}</p>
        </div>
      </router-link>
    </div>
    <button v-if="getSliceJokes.length < getTotal" @click="incNumber">Показать еще</button>
  </div>
</template>

<script setup>
import { useStoreJokes } from '@/stores/storeJokes'
import { storeToRefs } from 'pinia'
import getDate from '@/helpers/getDate'

const { getTotal, getSliceJokes } = storeToRefs(useStoreJokes())
const { incNumber } = useStoreJokes()
</script>

<style lang="scss" scoped>
.jokes-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    display: block;
    background: none;
    border: none;
    max-width: 140px;
    background-color: $clr-purple;
    color: $clr-white;
    font-weight: 700;
    padding: 16px;
    border-radius: 8px;
    text-transform: uppercase;
    margin: 30px auto 0;
    cursor: pointer;
  }
}
.jokes {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 1596px;

  @media screen and (max-width: $laptop) {
    width: 100%;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;
    text-decoration: none;
    color: $clr-dark-grey;
    padding: 30px 30px 25px;
    box-shadow: 0px 7px 25px 0px $clr-grey;
    width: calc(518 / 1596 * 100%);
    min-height: 150px;

    @media screen and (max-width: $laptop) {
      width: calc(50% - 10px);
    }

    @media screen and (max-width: $tablet) {
      width: 100%;
    }

    &:nth-child(1),
    &:nth-child(2) {
      gap: 60px;
      padding: 40px 40px 25px;
      width: calc(788 / 1596 * 100%);
      min-height: 262px;

      @media screen and (max-width: $laptop) {
        gap: 18px;
        width: calc(50% - 10px);
        min-height: 150px;
        padding: 30px 30px 25px;
      }

      @media screen and (max-width: $tablet) {
        width: 100%;
      }

      p {
        -webkit-line-clamp: 4;

        @media screen and (max-width: $laptop) {
          -webkit-line-clamp: 2;
        }
      }
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-family: Fira Sans;
      font-size: 20px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0;
      text-align: left;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    p {
      display: block;
      font-family: Montserrat;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0;
      color: $clr-light-grey;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
