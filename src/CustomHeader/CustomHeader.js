import {AppRoutes} from "../consts/AppRoutes";
import {useHistory} from "react-router";


function CustomHeader() {
    const history = useHistory()
    const name = localStorage.getItem('name')

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
    );
}

export default CustomHeader;