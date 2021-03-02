function TranslationToSigns({returnTranslateString}) {
    const translateSigns = () => {
        let arr = []
        const baseSrc = '/resources/individial_signs/'
        for (let i = 0; i < returnTranslateString.length; i++) {
            const char = returnTranslateString[i]

            if (!char.match("[a-zA-Z]")) {
                arr.push(<li key={i}>{char}</li>)
            } else{
                const src = baseSrc + char.toLowerCase() + '.png'

                arr.push(<li key={i}><div className="signElement"><img src={src} alt={char} className="signImage"/></div></li>)
            }
        }
        return arr
    }

    return (

        <div className="signBox">
            <ul>
                {translateSigns()}
            </ul>
        </div>
    );
}

export default TranslationToSigns;