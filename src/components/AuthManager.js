



export default class AuthManager {

    isLoggedIn = () => {
        return localStorage.getItem('Authontication') != null;
    }

    logout = () => {
        console.log("Logout");
        localStorage.clear();
    }
}
