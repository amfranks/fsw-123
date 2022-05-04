import { useState } from 'react';

const GiphySearch = () => {

    const [search, setSearch] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    const [alt, setAlt] = useState('');

    const getData = async () => {

        const API = '2KWrN4kIRAx1ErlN5pfPQJ71g9fsggGr';

        await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${search}`)
            .then((response) => response.json())
            .then((data) => {
                setImgSrc(data.data[0].images.original.url);
                setAlt(data.data[0].title);
                console.log(data);
            })
            .catch((error) => console.log(error))
    };

    const handleClick = (e) => {
        e.preventDefault();
        getData();
    };

    return (
        <>
            <label htmlFor='search'>Enter a word or phrase: </label>
            <form onSubmit={handleClick}>
                <input
                    type='text'
                    id='search'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button>Search</button>

            </form>

            <div>
                <img src={imgSrc} alt={alt} />
            </div>
        </>
    )
}

export default GiphySearch;