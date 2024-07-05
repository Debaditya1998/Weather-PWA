import axios from "axios";

const API_KEY = 'd9d5b8b4bc1bed8e76208c549c501584';

export const getWeather = async (query) => {
    const {data} = await axios.get("https://api.openweathermap.org/data/2.5/weather",{
        params: { 
        q: query,
        units: "metric",
        APPID: API_KEY,}
    });
    return data;
}