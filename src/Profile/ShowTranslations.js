import ResetProfile from "./ResetProfile"

/*
 * Displays the 10 last translations in a list. The 10 last translations it gets from localstorage, where
 * the last translations is stored. */
function ShowTranslations() {
    const translateArr = JSON.parse(localStorage.getItem('translateArr'))

    const getList = () => {
        if (translateArr === null || translateArr === undefined){
            return []
        }
        return translateArr.map((value, i) => <tr key={i}>
            <td>{translateArr[i]}</td>
        </tr>)
    }

    return (
        <div className="signBox">
            <table>
                <tbody>
                    <tr>
                        <th>Last translations:</th>
                    </tr>
                    {getList()}
                </tbody>
            </table>
            <ResetProfile/>
        </div>
    )
}

export default ShowTranslations