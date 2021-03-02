import {useHistory} from "react-router"
import {AppRoutes} from "../consts/AppRoutes"
import HomeHeader from "./HomeHeader"

/*
* Home page which includes a header, called HomeHeader and a input field for log in with a name.
* The name that is typed in, will be stored at localStorage after the user has pressed the arrow button.*/
function Home() {
    let name = ''
    const history = useHistory()

    const toTranslation = () => {
        localStorage.setItem('name', name)
        history.push(AppRoutes.Translation)
    }

    return (
        <div>
            <HomeHeader />
            <main>
                <div className="inputBox">
                    <div className="nameInput">
                        <img src="/resources/keyboard.svg" alt=" " className="keyBoardIcon"/>
                        <input type="txt" id="name" name="name" placeholder="What's your name?" onChange={e => name = e.target.value}/>
                        <input type="image" className="loginButton" src="/resources/next-button.svg"  alt="Login" onClick={toTranslation} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home