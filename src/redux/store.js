import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_GENRES', fetchGenres)
  yield takeEvery('FETCH_ALL', movieGen)
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    console.log("response", moviesResponse.data);
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

function* movieGen (){
const mg = yield axios.get('/api/moviegen')
console.log("check moviegen ", mg.data );
yield put({
  type: "SET_ALL",
  payload: mg.data
})
}

function* fetchGenres() {
  try {
    const genreResponse = yield axios.get('/api/genres');
    console.log('checking genre', genreResponse.data);
    yield put({
      type: 'SET_GENRES',
      payload: genreResponse.data
    });
  } catch (error) {
    console.log("error in genre fetch ", error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const allItems = (state = [], action)=>{
    switch (action.type){
      case "SET_ALL":
        return action.payload;
        default:
          return state 
    }

}


// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    allItems,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
