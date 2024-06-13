import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect } from "react"

const MovieItem = ()=>{
    const movie = useSelector(store => store.movies)
    const genre = useSelector(store => store.genres)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
       
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({ type: 'FETCH_GENRES' });
    }, [dispatch]);

  return(
    <>
    <h3>Genres</h3>
            <ul>
                {genre.map((gen, index) => (
                    <li key={index}>{gen.name}</li>
                ))}
            </ul>
            <h3>Movies</h3>
            <ul>
                {movie.map((mov, index) => (
                    <li key={index} onClick={() => handleMovieClick(mov.id)}>
                        {mov.title}
                    </li>
                ))}
            </ul>
    
    
    </>
  )
    


}

export default MovieItem