import getNewToken from './getNewToken'
import axios from 'axios';

export default class SearchService {
    static async getSearchResults(query, limit=10) {
        let tracks = []
        let token = await getNewToken()

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=${limit}`, config)
        // console.log(response.data.tracks)
        tracks = response.data.tracks.items.map(track => ({
            name: track.name,
            author: track.artists[0].name,
            url: track.preview_url,
            image: track.album.images[1].url,
            duration: track.duration_ms
        }))
        // console.log(tracks)
        return tracks
    }
}