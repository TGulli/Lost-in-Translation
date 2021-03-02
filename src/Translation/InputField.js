
/*
 * Input field for data to be translated. Returns the input with a callback function, called sendDataToParent*/
function InputField({sendDataToParent}) {
    let translateString = ''

    const translate = () => {
        sendDataToParent(translateString)
    }

    return (
        <div className="inputTranslate">
            <div className="nameInput">
                <img src="/resources/keyboard.svg" alt=" " className="keyBoardIcon"/>
                <input type="txt" id="translateString" name="translateString" placeholder="Enter text to translate here." onChange={e => translateString = e.target.value}/>
                <input type="image" className="loginButton" src="/resources/next-button.svg"  alt="Login" onClick={translate} />
            </div>
        </div>

    )
}

export default InputField