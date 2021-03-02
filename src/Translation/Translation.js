import {useState} from "react"
import {useHistory} from "react-router"
import {AppRoutes} from "../consts/AppRoutes"
import InputField from "./InputField"
import TranslationToSigns from "./TranslationToSigns"
import CustomHeader from "../CustomHeader/CustomHeader"

/*
 * Translating a string to signs, from a given input. The input is from Inputfield. It has also a header, customHeader
 * and if the user has typed in a string for translating, and pressed the button. It will show the translation.*/
function Translation() {
    const [string, setString] = useState('')
    let translateArr = []
    const history = useHistory()

    const toProfile = () => {
        history.push(AppRoutes.Profile)
    }

    /* Getting data from user input, and if translateArr already has 10 elements, it removed the oldest one,
     * and add the new one at the end. At the end of the function, it stores the edited array to localstorage with id translateArr*/
    const dataFromInput = (translateString) => {
        translateArr = JSON.parse(localStorage.getItem('translateArr'))
        if (translateArr === null){
            translateArr = []
        }
        setString(translateString)
        if (translateArr.length < 10){
            translateArr.push(translateString)
        } else{
            for (let i = 0; i < translateArr.length-1; i++) {
                translateArr[i] = translateArr[i+1]
            }
            translateArr[translateArr.length-1] = translateString
        }
        localStorage.setItem('translateArr', JSON.stringify(translateArr))
    }

    return (
        <div>
            <CustomHeader toProfile={toProfile}/>
            <InputField sendDataToParent={dataFromInput}/>
            <TranslationToSigns returnTranslateString={string} />
        </div>
    )
}

export default Translation