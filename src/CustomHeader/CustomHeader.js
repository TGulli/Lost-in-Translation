import {useHistory} from "react-router"
import {AppRoutes} from "../consts/AppRoutes"

/*
 * CustomHeader is the header for profile and translation page. This header includes a logo, site name, name of the user,
 * and a user icon to click for returning to the user profile page.
 * */
function CustomHeader() {
    const history = useHistory()
    const name = localStorage.getItem('name')

    // Goes to profile page
    const toProfile = () => {
        history.push(AppRoutes.Profile)
    }

    return (
        <div className="CustomHeader">
            <div className="logoPicture">
                <img src="/resources/Splash.svg" alt="Splash" className="headUnderLogo"/>
                <img src='/resources/Logo.png' alt="Logo" className="headOverLogo"/>
            </div>
            <h3>
                <span style={{float:"left"}}>Lost in translation</span>
                <span style={{float:"right"}}>{name}
                    <img className='userImage' src="/resources/user.svg" alt=' ' onClick={toProfile}/>
                </span>
            </h3>
        </div>
    )
}

export default CustomHeader