import axios from 'axios';
const API_URL = "https://randomuser.me/";    

class APIService {
    async getRandomUser() {
        return axios.get(API_URL + 'api').then((res)=>res.data.results[0])
    }
}

const ApiServices = new APIService();
export default ApiServices