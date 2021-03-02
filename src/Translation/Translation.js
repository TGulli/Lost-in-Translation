import {useLocation, useHistory} from "react-router";
import InputField from "./InputField";
import {useState} from "react";
import TranslationToSigns from "./TranslationToSigns";
import {AppRoutes} from "../consts/AppRoutes";
import './Translation.css';
import Header from "../Header/Header";
import "../Header/Header.css";


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
            <Header toProfile={toProfile}/>
            <InputField sendDataToParent={callback}/>
            {console.log(stringArr)}
            <TranslationToSigns returnTranslateString={string}/>
        </div>
    );
}

export default Translation;