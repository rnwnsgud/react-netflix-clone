import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "ead4499472d82073921565d124cb3394",
        language: "ko-KR",
    },
});

export default instance;