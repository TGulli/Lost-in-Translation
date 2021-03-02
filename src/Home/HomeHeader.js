
/*
 * Header for the home page. This header is bigger than the other, and is not showing the profile name*/
function HomeHeader() {
    return (
        <header className="startHeader">
            <h4>Lost in Translation</h4>
            <img src="/resources/Splash.svg" alt="Splash" className="underStart"/>
            <img src='/resources/Logo.png' alt="Logo" className="overStart"/>

            <h1 className="padLeft">Lost in Translation</h1>
            <h3 className="padLeft">Get started</h3>
        </header>
    );
}

export default HomeHeader