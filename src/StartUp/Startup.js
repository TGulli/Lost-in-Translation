import {useState} from "react";
import {useHistory} from "react-router";


function Startup() {
    const [name, setName] = useState('');
    const history = useHistory();

    const toTranslation = () => {
        sessionStorage.setItem('name', name)
        history.push({
            pathname: '/translation',
            name: name
        })
    }

    return (
        <div>
            Name: <input type="text" id="name" name="name" onChange={e => setName(e.target.value)}/>
            <button type="button" onClick={toTranslation} className="btn"> Login </button>

        </div>
    );
}

export default Startup;