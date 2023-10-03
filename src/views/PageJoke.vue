<template>
  <div class="joke">
    <div v-if="joke" class="joke__inner">
      <p class="joke__id">
        id: <span>{{ joke?.id }}</span>
      </p>
      <p>
        value: <span>{{ joke?.value }}</span>
      </p>
      <p>
        date: <span>{{ getDate(joke?.created_at) }}</span>
      </p>
    </div>
    <p v-else>Элемент не найден</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStoreJokes } from '@/stores/storeJokes'
import getDate from '@/helpers/getDate'
const { getJokeById } = useStoreJokes()
const route = useRoute()
const { id } = route.params

const joke = computed(() => getJokeById(id))
</script>

<style lang="scss" scoped>
.joke {
  padding: 20px;
  font-family: Fira Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0;
  color: $clr-dark-grey;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 30px 30px 25px;
    box-shadow: 0px 7px 25px 0px $clr-grey;
  }

  &__id {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
