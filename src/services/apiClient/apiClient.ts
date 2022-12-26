import axios from 'axios';

const apiClient = axios.create({
		baseURL: 'http://localhost:4000'
	});


const errorHandler = (error:any) => {
  console.log('API ERROR::::::', JSON.stringify(error));
  return Promise.reject(error);
};

const responseHandler = (response:any) => {
    console.log('API RESPONSE::::::', response);  
	return response;
};

apiClient.interceptors.response.use((response:any) => {
    return responseHandler(response);
  },
  (error:any) => {
    errorHandler(error);
  }
);

apiClient.interceptors.request.use((request:any) => {
  console.log('API REQUEST::::::', request);
  return request;
});

export default apiClient;