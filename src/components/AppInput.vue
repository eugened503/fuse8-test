<template>
  <div class="search-input">
    <input type="text" placeholder="Search jokes..." v-model.trim="searchInput" ref="focusInput" />
    <p>Found jokes: {{ getJokes.length }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useStoreJokes } from '@/stores/storeJokes'

const { jokesSearch, setSearchInput } = useStoreJokes()
const { getJokes, getOldInput, getNewInput } = storeToRefs(useStoreJokes())

const searchInput = ref('')
const focusInput = ref('')
const awaitingSearch = ref(false)

const update = () => {
  if (!awaitingSearch.value) {
    setTimeout(() => {
      jokesSearch()
      awaitingSearch.value = false
    }, 500)
  }
  awaitingSearch.value = true
}

onMounted(() => {
  focusInput.value.focus()
  searchInput.value = getNewInput.value
})

watch(searchInput, (newSearchInput) => {
  setSearchInput(newSearchInput)
  if (newSearchInput.length > 2 && newSearchInput !== getOldInput.value) {
    update()
  }
})
</script>

<style lang="scss" scoped>
.search-input {
  width: 626px;

  @media screen and (max-width: $tablet) {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 19px 30px;
    font-family: Fira Sans;
    font-size: 22px;
    font-weight: 700;
    line-height: 26.4px;
    letter-spacing: 0px;
    text-align: left;
    color: $clr-purple;
    border: none;
    outline: none;
    box-shadow: 0px 7px 12px 0px $clr-grey;

    &::placeholder {
      color: inherit;
    }
  }

  p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: $clr-dark-grey;
    margin: 20px 0 0 36px;
  }
}
</style>
