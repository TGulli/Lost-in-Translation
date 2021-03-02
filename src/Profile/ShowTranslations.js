function ShowTranslations() {
    const stringArr = JSON.parse(localStorage.getItem('stringArr'))

    const getList = () => {
        let arr = []
        if (stringArr === undefined){
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
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Last translations:</th>
                    </tr>
                    {getList()}
                </tbody>
            </table>
        </div>
    );
}

export default ShowTranslations;