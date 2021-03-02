import {useState} from "react";
import {useHistory} from "react-router";
import {AppRoutes} from "../consts/AppRoutes";
import StartHeader from "./StartHeader";


function Startup() {
    const [name, setName] = useState('');
    const history = useHistory();

    const toTranslation = () => {
        localStorage.setItem('name', name)
        history.push(AppRoutes.Translation)
    }

    return (
        <div>
            <StartHeader />
            <main>
                <div className="inputBox">
                    <div className="nameInput">
                        <img src="/resources/keyboard.svg" alt=" " className="keyBoardIcon"/>
                        <input type="txt" id="name" name="name" placeholder="What's your name?" onChange={e => setName(e.target.value)}/>
                        <input type="image" className="loginButton" src="/resources/next-button.svg"  alt="Login" onClick={toTranslation} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Startup;