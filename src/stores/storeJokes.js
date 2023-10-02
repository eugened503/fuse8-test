import { defineStore } from 'pinia'

export const useStoreJokes = defineStore('storeJokes', {
  state: () => {
    return {
      jokes: [
        {
          icon_url: '',
          id: '1hxdulftcswqglp1-qe3nfw',
          value:
            'Wilt Chamberlain claims to have slept with more than 20,000 women in his lifetime. Chuck Norris calls this a slow Tuesday.',
          date: '01.05.2020'
        },
        {
          icon_url: '',
          id: '2hxdulftcswqglp1-qe3nfw',
          value:
            'The single most successful anti-smoking measure was a commercial in the 1980. In the commercial, there is a man smoking a cigarette. A voice then exclaims "Smoking will kill you." Nothing happens, until Chuck Norris blasts through the wall and kills the man with a single round house kick.',
          date: '01.05.2020'
        },
        {
          icon_url: '',
          id: '3hxdulftcswqglp1-qe3nfw',
          value: 'Big Foot claims he has a couple pictures of Chuck Norris',
          date: '01.05.2020'
        },
        {
          icon_url: '',
          id: '4hxdulftcswqglp1-qe3nfw',
          value:
            'The single most successful anti-smoking measure was a commercial in the 1980. In the commercial, there is a man smoking a cigarette. A voice then exclaims "Smoking will kill you." Nothing happens, until Chuck Norris blasts through the wall and kills the man with a single round house kick.',
          date: '01.05.2020'
        },
        {
          icon_url: '',
          id: '5hxdulftcswqglp1-qe3nfw',
          value:
            'Big Foot claims he has a couple pictures of Chuck Norris... All his friends think hes full of crap.',
          date: '01.05.2020'
        },
        {
          icon_url: '',
          id: '6hxdulftcswqglp1-qe3nfw',
          value:
            'Big Foot claims he has a couple pictures of Chuck Norris... All his friends think hes full of crap.',
          date: '01.05.2020'
        },
        {
          icon_url: '',
          id: '7hxdulftcswqglp1-qe3nfw',
          value:
            'Big Foot claims he has a couple pictures of Chuck Norris... All his friends think hes full of crap.',
          date: '01.05.2020'
        },
        {
          icon_url: '',
          id: '8hxdulftcswqglp1-qe3nfw',
          value:
            'Big Foot claims he has a couple pictures of Chuck Norris... All his friends think hes full of crap.',
          date: '01.05.2020'
        }
      ]
    }
  },
  actions: {},
  getters: {
    getJokes(state) {
      return state.jokes
    },
    getJokeById(state) {
      return (jokeId) => state.jokes.find((joke) => joke.id === jokeId)
    }
  }
})
