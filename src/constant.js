// Import REACT_APP_API_KEY dari environment variables
// REACT_APP_API_KEY adalah kunci API yang disimpan dalam file environment untuk alasan keamanan
import { REACT_APP_API_KEY } from "@env";

// URL dasar untuk OpenWeather API
// BASE_URL adalah URL dasar yang digunakan untuk mengakses data cuaca dari OpenWeather API
export const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Mendefinisikan API_KEY dengan nilai REACT_APP_API_KEY yang diimpor dari environment variables
// API_KEY adalah kunci akses yang dibutuhkan untuk mengautentikasi permintaan ke OpenWeather API
export const API_KEY = REACT_APP_API_KEY;
