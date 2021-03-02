import ShowTranslations from "./ShowTranslations"
import CustomHeader from "../CustomHeader/CustomHeader"

/*
* Showing a given profile, a header and the 10 last translations for the user.*/
function Profile() {
    return (
        <div>
            <CustomHeader />
            <ShowTranslations/>
        </div>
    )
}

export default Profile