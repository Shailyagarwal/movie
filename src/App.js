import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Movie from './movie';
import MovieDetails from './movieDetails';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <PersistGate persistor={store.persistor} > */}
        <Routes>
          <Route exact path="/" element={<Movie />}> </Route>
          <Route path="/movieDetails" element={<MovieDetails />}> </Route>
        </Routes>
        {/* <Movie /> */}
        {/* </PersistGate> */}
      </Provider>

    </div>
  );
}

export default App;
