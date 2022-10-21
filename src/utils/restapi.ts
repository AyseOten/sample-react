import axios from 'axios';

const {REACT_APP_BASE_URL} = process.env

const getToken = () => {
    return localStorage.getItem('ag_token')
}

async function getAllLayers() {
    const config = {
        headers: { Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInR5cGUiOiJzdXBlcmFkbWluIiwiYWRtaW5vZiI6MSwiaWF0IjoxNjY2MzU5OTk0LCJleHAiOjE2NjYzNjcxOTR9.DzI-agj-3g-At5_NG379bOD8OFfOABPogoDCT5gI2D0'
    }
    };
    return await axios.get("https://trafik.simurgbilisim.com/api/v1/" + "layer" , config)
}


export const LayerRestApi = {
    getAllLayers,

}