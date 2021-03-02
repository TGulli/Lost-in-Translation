import {useLocation} from "react-router";
import ShowTranslations from "./ShowTranslations";
import ResetLog from "./ResetLog";
import './Profile.css';

function Profile() {

    return (
        <div>
            <ShowTranslations/>
            <ResetLog/>
        </div>
    );
}

export default Profile;