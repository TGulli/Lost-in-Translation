import {useHistory} from "react-router"
import {AppRoutes} from "../consts/AppRoutes"

/* This component translate a string to signs in a html list.*/
function TranslationToSigns({returnTranslateString}) {
    const history = useHistory()

    /* Goes to the profile page*/
    const toProfile = () => {
        history.push(AppRoutes.Profile)
    }

    /*
     * Returns a html list with signs based on the string*/
    const translateSigns = () => {
        const baseSrc = '/resources/individial_signs/'

        //Splits the string to charArray, and then iterate over the characters for adding one and one to the html list
        return returnTranslateString.split('').map((char, i) => {
            if (!char.match("[a-zA-Z]")) { // If it not a character from a-z, then just prints the char
                return <li key={i}>{char}</li>
            } else{
                const src = baseSrc + char.toLowerCase() + '.png'
                return <li key={i}><img src={src} alt={char} className="signImage"/></li>
            }
        })
    }

    return (
        <div className="signBox">
            <ul>
                {translateSigns()}
            </ul>
            <button type="button" onClick={toProfile} className="greenButton"> Profile </button>
        </div>
    )
}

export default TranslationToSigns