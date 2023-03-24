import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchCaracters } from '../../redux/charactersSlice'

function Home() {
    const data = useSelector((state) => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCaracters());
    }, [dispatch]);

    console.log(data);
    return <div>home</div>;
}

export default Home;