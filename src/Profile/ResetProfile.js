import {useHistory} from "react-router"
import {AppRoutes} from "../consts/AppRoutes"

/*
 * Resets the stored data for the user, which is the name and translate log. Then it goes to the home page. */
function ResetProfile() {
    const history = useHistory()

    const reset = () =>{
        localStorage.clear()
        history.push(AppRoutes.Startup)
    }

    return (
        <div>
            <button type="button" onClick={reset} className="redButton"> Logout </button>
        </div>
    )
}

export default ResetProfile