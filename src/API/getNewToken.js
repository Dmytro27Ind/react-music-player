import axios from 'axios'

var client_id = 'deb1f95eb11e4ff38e7dfe37e82d205f'
var client_secret = 'fb5dc4b3200f4b0092d885707e562110'

async function getNewToken() {
    const url = "https://accounts.spotify.com/api/token"
    const data = new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': client_id,
        'client_secret': client_secret
    })
    const response = await axios.post(url, data)
    return response.data.access_token;
}

export default getNewToken;
