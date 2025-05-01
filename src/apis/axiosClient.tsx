import axios from "axios";

// Tạo instance của axios
const axiosInstance = axios.create({
    baseURL: "https://api.nhathuoclongchau.com.vn/", // Thay bằng base URL của API
    timeout: 10000, // Thời gian chờ tối đa
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor cho request
axiosInstance.interceptors.request.use(
    (config) => {
        // Thêm logic trước khi gửi request, ví dụ: thêm token vào header
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('Request sent:', config);
        return config;
    },
    (error) => {
        // Xử lý lỗi request
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Interceptor cho response
axiosInstance.interceptors.response.use(
    (response) => {
        // Xử lý response thành công
        console.log('Response received:', response);
        return response.data; // Trả về dữ liệu từ response
    },
    (error) => {
        // Xử lý lỗi response
        console.error('Response error:', error);
        if (error.response) {
            // Xử lý các lỗi cụ thể dựa trên status code
            switch (error.response.status) {
                case 401:
                    // Ví dụ: Xử lý lỗi Unauthorized
                    console.log('Unauthorized, redirecting to login...');
                    // Có thể gọi hàm logout hoặc redirect
                    break;
                case 404:
                    console.log('Resource not found');
                    break;
                default:
                    console.log('Server error');
            }
        } else if (error.request) {
            // Lỗi do không nhận được phản hồi
            console.log('No response received:', error.request);
        } else {
            // Lỗi khác
            console.log('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;