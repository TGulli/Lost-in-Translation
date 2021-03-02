import ResetLog from "./ResetLog";

function ShowTranslations() {
    const stringArr = JSON.parse(localStorage.getItem('stringArr'))

    const getList = () => {
        let arr = []
        if (stringArr === null || stringArr === undefined){
            return arr
        }
        for (let i = 0; i < stringArr.length; i++) {
            arr.push(<tr key={i}>
                <th>{stringArr[i]}</th>
            </tr>)
        }
        return arr
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
            <ResetLog/>
        </div>
    );
}

export default ShowTranslations;