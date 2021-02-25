import {useLocation} from "react-router";
import Name from "./Name";
import InputField from "./InputField";


function Translation() {
    const location = useLocation()
    const userName = location.name
    return (
        <div>
            <Name userName={userName}/>
            <InputField/>
        </div>
    );
}

export default Translation;