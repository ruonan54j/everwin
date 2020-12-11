import whoPic from '../../images/who-we-are.png'

function WhoWeAre() {
    return (
        <div id='who-we-are'>
            <div className="row">
                <div className="col-md" id='who-we-are-L'>
                    <h2>WHO WE ARE</h2>
                    <p>
                        EVERWIN specializes in international air, ocean postal
                        and e-Commerce projects involving cargo and freight
                        forwarding. It is a company based in Shanghai, China,
                        but operates overseas for international projects.
                    </p>

                    <a className='theme-btn' href="/about">LEARN MORE</a>
                </div>
                <div className="col-md" id='who-we-are-R'>
                    <img src={whoPic} width='80%' />
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre
