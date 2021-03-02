
function Header({userName, toProfile}) {
    const name = localStorage.getItem('name')


    return (
        <header>
            <div className="logoPicture">
                <img src="/resources/Splash.svg" alt="Splash" className="under"/>
                <img src='/resources/Logo.png' alt="Logo" className="over"/>
            </div>
            <h3>
                <span className="left">Lost in translation</span><span className="right">{name} <img className='userImage' src="/resources/user.svg" alt=' ' onClick={toProfile}/></span>
            </h3>
        </header>
    );
}

export default Header;