import {create} from "apisauce";

const apiClient  = create({
  baseURL: "http://10.188.188.250:9000/api",
});

export default apiClient;
