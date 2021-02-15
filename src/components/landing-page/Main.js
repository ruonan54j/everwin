function Main() {
    return (
        <div id="landing">
            <div className="landing-content-R">
                <p id="welcome-txt">Welcome to</p>
                <h1 id="title">EVERWIN Global Express Co.</h1>
                <div id="identity-div">
                    <p id="identity-txt">
                        The next generation leading logistics service provider.
                    </p>
                </div>
                <button
                    className="landing-btn"
                    onClick={() => {
                        document
                            .getElementById('contacts')
                            .scrollIntoView({ behavior: 'smooth' })
                    }}
                >
                    <p>
                        Get in Touch <span className="arrow">&#x2192;</span>
                    </p>
                </button>
            </div>
        </div>
    )
}

export default Main
