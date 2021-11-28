import axios from 'axios';

async function fetchData(){
    // Access data directly in json format. 
    const userDataAxios= await axios.get("https://randomuser.me/api/")
    const userData= userDataAxios.data.results[0];  
    return userData; 
}

export default fetchData; 
