import axios from 'axios';
const base_url = process.env.VUE_APP_API_BASE_URL;

export const callApi = async (config) => {
    return await axios({
        url : base_url + config.url,
        method : config.method,
        ...(config.method && config.method == "post" ? {data: config.data} : {}),
        headers: { 
            Accept : "application/json",
            ...(config.headers && {...config.headers})
        }
    })
}