import {useState} from "react";
import TranslationToSigns from "./TranslationToSigns";

function Name() {
    const [translateString, setTranslateString] = useState('');
    const [returnTranslateString, setReturnTranslateString] = useState('');
    const [toTranslation, setToTranslation] = useState(false);

    const translate = () => {
        setReturnTranslateString(translateString)
        setToTranslation(true)
    }

    return (
        <div>
            Translate: <input type="text" id="translateString" name="translateString" onChange={e => setTranslateString(e.target.value)}/>
            <button type="button" onClick={translate} className="btn">Set</button>
            { toTranslation && (<TranslationToSigns returnTranslateString={returnTranslateString}/>) }
        </div>
    );
}

export default Name;