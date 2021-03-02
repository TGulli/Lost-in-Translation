import {useState} from "react";
import TranslationToSigns from "./TranslationToSigns";

function InputField({sendDataToParent}) {
    const [translateString, setTranslateString] = useState('');

    const translate = () => {
        sendDataToParent(translateString)
    }

    return (
        <div className="inputTranslate">
            <div className="nameInput">
                <img src="/resources/keyboard.svg" alt=" " className="keyBoardIcon"/>
                <input type="txt" id="translateString" name="translateString" placeholder="Enter text to translate here." onChange={e => setTranslateString(e.target.value)}/>
                <input type="image" className="loginButton" src="/resources/next-button.svg"  alt="Login" onClick={translate} />
            </div>
        </div>

    );
}

export default InputField;