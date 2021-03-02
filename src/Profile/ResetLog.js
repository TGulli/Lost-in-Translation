import {useHistory} from "react-router";
import {AppRoutes} from "../consts/AppRoutes";

function ResetLog() {
    const history = useHistory();


    const reset = () =>{
        localStorage.clear()
        history.push({
            pathname: AppRoutes.Startup})

    }

    return (
        <div>
            <button type="button" onClick={reset} className="redButton"> Logout </button>
        </div>
    );
}

export default ResetLog;