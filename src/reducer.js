import axios from "axios"

const constants = {
    GET_MOVIE_LIST: "GET_MOVIE_LIST",
    GET_MOVIE_DETAILS: "GET_MOVIE_DETAILS"
}
const intialState = {
    movieList: [],
    movieDetails: {}
}

export const getMovieData = () => {
    return dispatch => {
        axios.get('https://bestonlinecenter.com/technical-assessment/movies.json')
            .then((response) => {
                if (response.status == 200) {
                    dispatch({ type: constants.GET_MOVIE_LIST, payload: response.data })
                }
            })
    }
}

export const getMovieDetails = (data) => {
    return dispatch => {
        dispatch({ type: constants.GET_MOVIE_DETAILS, payload: data })
    }
}
const apiReducer = (state, action) => {
    if (!state) {
        state = intialState
    }
    switch (action.type) {
        case constants.GET_MOVIE_LIST: {
            return {
                ...state,
                movieList: action.payload
            }
        }
        case constants.GET_MOVIE_DETAILS: {
            return {
                ...state,
                movieDetails: action.payload
            }
        }
        default: return state
    }
}
export default apiReducer;
