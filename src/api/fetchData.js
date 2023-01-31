function getArray(item) {
    const gifs = item.map((gif) => ({
        url: gif.images.downsized_medium.url,
        title: gif.title,
        id: gif.id,
    }));

    return gifs;
}

export async function fetchData(keyword = 'pikachu') {
    const apiKey = `LMKcBVBub91y9rp048zM7xM9FkhdT8Zq`;
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=12&offset=0&rating=g&lang=en`;
    const response = await fetch(apiURL);
    const responseJson = await response.json();
    const { data = [] } = responseJson;

    return getArray(data);
}
