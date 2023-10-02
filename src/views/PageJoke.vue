<template>
  <div class="joke">
    <p>
      id: <span>{{ joke.id }}</span>
    </p>
    <p>
      value: <span>{{ joke.value }}</span>
    </p>
    <p>
      date: <span>{{ joke.date }}</span>
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStoreJokes } from '@/stores/storeJokes'
const { getJokeById } = useStoreJokes()
const route = useRoute()
const { id } = route.params

const joke = computed(() => getJokeById(id))
</script>

<style lang="scss" scoped>
.joke {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  font-family: Fira Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0;
}
</style>
