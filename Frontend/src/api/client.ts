import axios from 'axios';
import { Platform } from 'react-native';

// API Base URL Configuration
// Priority: 1. Environment variable, 2. Device IP for physical devices, 3. Emulator/Simulator defaults
const getBaseURL = () => {
  // First priority: Check environment variable
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }
  
  // Your computer's IP address (for physical device testing)
  // const DEVICE_IP = '192.168.1.8';
  const DEVICE_IP = '192.168.1.15'; // Updated to Wi-Fi network IP
  const API_PORT = 3000;
  
  // For physical devices, use your computer's IP
  // For emulators/simulators, use special addresses
  if (Platform.OS === 'android') {
    // Android emulator uses 10.0.2.2 to access host machine
    // For physical Android device, use your IP
    return `http://${DEVICE_IP}:${API_PORT}/api`;
  } else {
    // iOS simulator can use localhost, but for physical device use IP
    // Using IP for both to ensure consistency
    return `http://${DEVICE_IP}:${API_PORT}/api`;
  }
};

const API_BASE_URL = getBaseURL();

console.log('🌐 API Base URL:', API_BASE_URL);
console.log('📱 Platform:', Platform.OS);
console.log('🔧 Environment:', __DEV__ ? 'Development' : 'Production');

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // Increased timeout for mobile networks
  headers: {
    'Content-Type': 'application/json',
  },
});

export const attachToken = (token?: string | null) => {
  if (token) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common.Authorization;
  }
};

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = 'Something went wrong';
    
    if (error.code === 'ECONNABORTED') {
      message = 'Request timeout. Please check your connection.';
    } else if (error.code === 'ERR_NETWORK' || error.message?.includes('Network Error')) {
      message = 'Network error. Please check:\n1. Backend server is running\n2. Correct IP address in .env\n3. Phone and computer are on same network';
    } else if (error.response?.data?.error) {
      message = error.response.data.error;
    } else if (error.response?.data?.message) {
      message = error.response.data.message;
    } else if (error.message) {
      message = error.message;
    }

    console.error('API Error:', {
      message,
      code: error.code,
      status: error.response?.status,
      url: error.config?.url,
    });

    return Promise.reject({
      status: error.response?.status,
      message,
      details: error.response?.data,
    });
  }
);

// Test connection on app start (only in development)
if (__DEV__) {
  // Delay test to ensure apiClient is fully initialized
  setTimeout(() => {
    apiClient.get('/')
      .then(() => {
        console.log('✅ Backend connection successful!');
      })
      .catch((error) => {
        console.warn('⚠️ Backend connection test failed:', error.message);
        console.warn('💡 Make sure:');
        console.warn('   1. Backend server is running (cd Backend && npm start)');
        console.warn('   2. IP address is correct:', API_BASE_URL);
        console.warn('   3. Phone and computer are on same Wi-Fi network');
        console.warn('   4. Firewall allows connections on port 3000');
      });
  }, 1000);
}

