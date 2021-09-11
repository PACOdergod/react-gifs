

export const getGifs = async ( categoria )=>{
    var url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=YGlVMSgh8VPiM09xzTVeggPsGlmzyoIF`
    const res = await fetch( url )
    const { data } = await res.json()

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs
}