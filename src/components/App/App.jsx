import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import MovieItem from '../MovieItem/MovieItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route exact path = "/movies/:movieId">
          <MovieItem />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
