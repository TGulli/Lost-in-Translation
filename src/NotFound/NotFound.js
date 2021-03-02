
function NotFound() {
    return (
        <div>
            <div className="CustomHeader">
                <div className="logoPicture">
                    <img src="/resources/Splash.svg" alt="Splash" className="headUnderLogo"/>
                    <img src='/resources/Logo.png' alt="Logo" className="headOverLogo"/>
                </div>
                <h3>
                    <span style={{float:"left"}}>Lost in translation</span>
                </h3>
            </div>
        <h2 style={{textAlign: "center"}}>Not valid path.</h2>
        </div>
);
}

export default NotFound;

