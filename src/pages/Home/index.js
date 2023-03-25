import { useEffect } from "react";

import './styles.css';
import Masonry from "react-masonry-css";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

import { useSelector, useDispatch } from "react-redux";
import { fetchCaracters } from '../../redux/charactersSlice'

function Home() {
    const characters = useSelector((state) => state.characters);
    const isLoading = useSelector((state) => state.characters.isLoading);
    const error = useSelector((state) => state.characters.error);

    const dispatch = useDispatch();

     console.log(characters);

    useEffect(() => {
        dispatch(fetchCaracters());
    }, [dispatch]);

    if(isLoading) {
        return <Loading />;
    }

    if(error){
        return <Error message={error} />;
    }

    return(
    <div>
        <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                {characters.items.results.map((character) => (
                    <div key={character.id}>
                        <img alt={character.name} src={character.image} className="character"/>
                        <div className="char_name">{character.name}</div>
                    </div>
                ))}
        </Masonry>
        
    </div>
    );
}

export default Home;