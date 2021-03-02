import {useHistory} from "react-router";
import InputField from "./InputField";
import {useState} from "react";
import TranslationToSigns from "./TranslationToSigns";
import {AppRoutes} from "../consts/AppRoutes";
import CustomHeader from "../CustomHeader/CustomHeader";

function Translation() {
    const [string, setString] = useState('');
    let stringArr = []
    const history = useHistory();

    const toProfile = () => {
        history.push(AppRoutes.Profile)
    }

    const callback = (string) => {
        stringArr = JSON.parse(localStorage.getItem('stringArr'))
        if (stringArr === null){
            stringArr = []
        }
        setString(string);
        if (stringArr.length < 10){
            stringArr.push(string)
        } else{
            for (let i = 0; i < stringArr.length-1; i++) {
                stringArr[i] = stringArr[i+1]
            }
            stringArr[stringArr.length-1] = string
        }
        localStorage.setItem('stringArr', JSON.stringify(stringArr))
    };

    return (
        <div>
            <CustomHeader toProfile={toProfile}/>
            <InputField sendDataToParent={callback}/>
            <TranslationToSigns returnTranslateString={string} />
        </div>
    );
}

export default Translation;