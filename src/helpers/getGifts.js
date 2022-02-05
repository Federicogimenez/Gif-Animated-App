
export const getGifs = async( category )=>{

    const resp = await fetch(`http://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI( category ) }&api_key=IxNqwSxTz1howc9OhE1bxnbB8eczyMga`);

    const {data} = await resp.json();

    const gifs = data.map(img=>{
        return {   
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }}
    );
    return gifs;

};