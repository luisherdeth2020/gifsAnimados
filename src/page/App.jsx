import { useState, useEffect } from 'react';
import ListGifs from '../components/ListGifs';
import Search from '../components//Search';
import { fetchData } from '../api/fetchData';
import './App.css';

function App() {
    const [gifsList, setGifsList] = useState([]);

    useEffect(() => {
        fetchData().then((data) => {
            setGifsList(data);
        });
    }, []);

    return (
        <>
            <h1>GIFS ANIMADOS</h1>
            <Search setGifsList={setGifsList} />
            <ListGifs gifsList={gifsList} />
        </>
    );
}

export default App;
