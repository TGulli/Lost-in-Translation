import {useLocation, useHistory} from "react-router";
import InputField from "./InputField";
import {useState} from "react";
import TranslationToSigns from "./TranslationToSigns";
import {AppRoutes} from "../consts/AppRoutes";
import CustomHeader from "../CustomHeader/CustomHeader";

function Translation() {
    const [string, setString] = useState('');
    const [stringArr, setStringArr] = useState([]);
    const history = useHistory();

    const toProfile = () => {
        history.push({
            pathname: AppRoutes.Profile
        })
    }

    const callback = (string) => {
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
            <TranslationToSigns returnTranslateString={string} toProfile={toProfile} />
        </div>
    );
}

export default Translation;