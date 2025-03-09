import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";

const Login = () => {

    const provider = new GoogleAuthProvider();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result);
        })
        .catch(error=>{
            console.log('Error', error);
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>Login Button</button>
        </div>
    );
};

export default Login;