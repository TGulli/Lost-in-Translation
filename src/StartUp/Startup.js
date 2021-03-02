import {useState} from "react";
import {useHistory} from "react-router";
import {AppRoutes} from "../consts/AppRoutes";
import './Startup.css';


function Startup() {
    const [name, setName] = useState('');
    const history = useHistory();

    const toTranslation = () => {
        localStorage.setItem('name', name)
        history.push({
            pathname: AppRoutes.Translation
        })
    }

    return (
        <div>
            <header>
                <h4>Lost in Translation</h4>
                <div className="logoPicture">
                    <img src="/resources/Splash.svg" alt="Splash" className="under"/>
                    <img src='/resources/Logo.png' alt="Logo" className="over"/>
                </div>

                <h1 className="padLeft">Lost in Translation</h1>
                <h3 className="padLeft">Get started</h3>
            </header>
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