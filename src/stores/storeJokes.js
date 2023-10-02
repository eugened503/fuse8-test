import { defineStore } from 'pinia'

export const useStoreJokes = defineStore('storeJokes', {
  state: () => {
    return {
      jokes: []
    }
  },
  actions: {},
  getters: {}
})
