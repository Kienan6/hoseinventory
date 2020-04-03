import axios from 'axios';
import API from '../utils/details';
export const Auth = {
    admin: false,
    authenticated: false,
    authenticate(callback){
        axios.defaults.withCredentials = true;
        axios.post(API +'user/auth')
            .then(res => {
                const {loggedIn, admin} = res.data;
                this.admin = admin;
                this.authenticated = loggedIn;
                callback();
            });
    },
    login(user,callback) {
        axios.defaults.withCredentials = true;
        axios
            .post(API+'user/login', {user})
            .then(res => {
                callback(res.data);
            });
    },
    logout() {
        this.admin = false;
        this.authenticated = false;
    }
}