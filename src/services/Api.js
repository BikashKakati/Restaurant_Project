import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";
export async function fetchApiData(endPoint){
    try{
        const {data} = await axios.get(`${BASE_URL + endPoint}`);
        return data;
    }catch(err){
        console.log(err);
    }
}

