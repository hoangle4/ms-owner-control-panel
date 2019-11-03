import axios from 'axios';
// const url = 'http://192.168.0.3:3001';
// const url = 'http://10.1.10.80:3001';

const url = 'https://ms-check-in.herokuapp.com';
export default {
  loginOwner: async formData => axios.post(url + '/api/login-owner', formData),
  getAuthOwner: async () => axios.get(url + '/api/get-auth-owner'),
  getOneDayCheckIn: async () => axios.get(url + '/api/ctrl/get-1-day')
};
