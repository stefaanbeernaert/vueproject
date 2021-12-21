import axios from "axios";
const clientApiService = axios.create({
    baseURL:'https://my-json-server.typicode.com/stefaanbeernaert/fakejson',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-type': 'application/json',
    }
})
export default {
    getEvents(perPage,page){
        return clientApiService.get('/events?_limit=' + perPage + '&_page=' + page)
    },
    getEvent(id){
        return clientApiService.get('/events/' + id)
    }
}