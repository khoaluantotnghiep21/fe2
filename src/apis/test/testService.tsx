import axiosInstance from "@/apis/axiosClient";

export class TestService {
    baseUrl: string = "lccus/prod-cms/api/v2/search-settings/promotion";
    getTest = async () => {
        // let result ;
        const resp = await axiosInstance.get(`${this.baseUrl}`);
        if (resp.status === 200) {
            // result = resp.data;
        }
    }
}