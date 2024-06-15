import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const GenreList = ({genreIds,genres}) => {
    const genre = useSelector(store => store.genres.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' })
    }, [])

    if (!genres ||  genres.length === 0 ){
        return <div>Loading gen</div>
    }

    return (
        <>
        <ul>
            {genre.filter((gen)=> genreIds.includes(gen.id))
            .map((gen)=>(
                <li key={gen.id}> {gen.name}</li>
            ))}
        </ul>
        
        
        </>
    )

}

export default GenreList