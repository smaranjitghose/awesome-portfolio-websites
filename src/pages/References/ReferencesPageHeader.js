import React from 'react'
import headerImage from '../../assets/images/references-page/references.svg'

const ReferencesPageHeader = () => {
    return (
        <div className="container pt-5 wrapper">
            <section className="section">
                <div className="container-fluid px-3 pt-5">
                    <div className="headerWrapper mx-auto">
                        <div className="px-md-5 p-3 col-md-6 d-flex flex-column align-items-center justify-content-center animate__animated animate__zoomIn animate__delay-1s">
                            <h2 className="dropdown1 main-heading mb-0 research_head">My <span className="research_work">References</span></h2>
                            <p className="dropdown2 pre-heading font-weight-bolder text-center animate__animated animate__fadeInUp animate__delay-2s">
                                My References
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={headerImage} alt="references header" className="headerImage img-fluid d-block img-fluid d-block animate__animated animate__zoomIn animate__delay-1s" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReferencesPageHeader
