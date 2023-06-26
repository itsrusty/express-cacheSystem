import axios from "axios"

export const getCharacters = async (req, res) =>{
    try {
        const dataCharacter = "https://rickandmortyapi.com/api/character"
        const response = await axios.get(dataCharacter)
        
        // validate response
        if(response.status == 200 && 
           response.status != 404){
                res.send(response.data)
                console.log("response: ok!".yellow)
           } 

    } catch (error) {
        throw new Error(error)        
    }
} 

export const getEpisodes = async (req, res) =>{
    try {
        const dataEpisode = "https://rickandmortyapi.com/api/episode"
        const response = await axios.get(dataEpisode)

        if(response.status == 200 && 
           response.status != 404){
                res.send(response.data)
                console.log("response: ok!".yellow)
        }

    } catch (error) {
        throw new Error(error) 
    }
}

export const getLocations = async (req, res) =>{
    try {
        const getLocationsCharacters = "https://rickandmortyapi.com/api/location"

        const response = await axios.get(getLocationsCharacters)
        
        if(response.status == 200 && 
           response.status != 404){
                res.send(response.data)
                console.log("response data ok!".yellow)
        }
    } catch (error) {
        throw new Error(error)   
    }
}