import { defineStore } from 'pinia'
const baseUrl = 'https://api.chucknorris.io/jokes/search'
import axios from 'axios'

export const useStoreJokes = defineStore('storeJokes', {
  state: () => {
    return {
      jokes: [],
      total: null,
      error: null,
      numElements: 8,
      oldSearchInput: '',
      newSearchInput: ''
    }
  },
  actions: {
    async jokesSearch() {
      try {
        const res = await axios.get(baseUrl, { params: { query: this.newSearchInput } })
        this.jokes = res.data?.result
        this.total = res.data?.total
        this.numElements = 8
        this.oldSearchInput = this.newSearchInput
      } catch (error) {
        this.error = error.message
        console.log(error.message)
      }
    },

    incNumber() {
      this.numElements += 8
    },

    setSearchInput(searchInput) {
      this.newSearchInput = searchInput
    }
  },
  getters: {
    getJokes(state) {
      return state.jokes
    },
    getSliceJokes(state) {
      return state.jokes.slice(0, this.numElements)
    },
    getJokeById(state) {
      return (jokeId) => state.jokes.find((joke) => joke.id === jokeId)
    },
    getTotal(state) {
      return state.total
    },
    getOldInput(state) {
      return state.oldSearchInput
    },
    getNewInput(state) {
      return state.newSearchInput
    }
  },
  persist: true
})
