import * as types from '../mutation-types'
import axios from 'axios'

export const movies = {
  state: {
    movies: []
  },
  mutations: {
    [types.FETCH_MOVIES] (state, { moviesList }) {
      state.movies = moviesList
    }
  },
  actions: {
    fetchMovies ({commit}, {search}) {
      axios.get(`http://omdbapi.com/?apikey=57d13b99&s=${search}`)
        .then(data => {
          const moviesList = data.data.Search
          console.log('moviesList: ', moviesList)
          commit('FETCH_MOVIES', { moviesList })
        })
        .catch(err => console.log(err))
    }
  },
  getters: {
    getMovies: state => {
      return state.movies
    }
  }
}
