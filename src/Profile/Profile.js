import {useLocation} from "react-router";
import ShowTranslations from "./ShowTranslations";
import ResetLog from "./ResetLog";
import CustomHeader from "../CustomHeader/CustomHeader";

function Profile() {

    return (
        <div>
            <CustomHeader />
            <ShowTranslations/>
        </div>
    );
}

export default Profile;