import axios from 'axios';
const url = 'http://192.168.0.3:3001';
export default {
	loginOwner: async (formData) => {
		return axios.post(url + '/api/login-owner', formData);
	},
	getAuthOwner: async () => {
		return axios.get(url + '/api/get-auth-owner');
	}
};
