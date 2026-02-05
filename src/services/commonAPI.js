import axios from "axios";

const commonAPI = async (httpMethod,url,reqBody,reqHeader)=>{

    const reqConfig={
        method:httpMethod,
        url,
        headers:reqHeader?reqHeader:{"content-type":"application/json"}
    }

    // Only add data property for POST/PUT/PATCH requests
    if (reqBody && (httpMethod !== 'GET')) {
        reqConfig.data = reqBody;
    }

   try {
        const response = await axios(reqConfig);
        return response;
    } catch (error) {
        console.error('API Error:', error);
        return error.response ? error.response : { 
            status: 500, 
            data: { message: "Network Error or Server Unreachable" } 
        };
    }

}

export default commonAPI