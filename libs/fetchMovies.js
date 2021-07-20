import {tmdbLink} from './constants'

export const movieDetails = async (movieId) => {
    const path = `movie/${movieId}`
    return fetch(tmdbLink(path)).then(payload).catch(errorMessage)
}

export const trendingMovies = async () => {
    const path = 'trending/all/week'
    return fetch(tmdbLink(path)).then(payload).catch(errorMessage)
}

export const popularMovies = async () => {
    const path = 'movie/popular'
    return fetch(tmdbLink(path)).then(payload).catch(errorMessage)
}

const errorMessage = (_ = '', msg = 'Failed to fetch data') => {
    console.log('fetchError:' + _.message ? _.message : _)
    return {error: true, message: msg}
}
const payload = async (data) => {
    const receivedData = await data.json()
    const results = receivedData.results ? receivedData.results : errorMessage('', 'Something went wrong the fetch')
    return results
}
