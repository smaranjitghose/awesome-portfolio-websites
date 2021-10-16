import React from 'react'

const Reference = ({ name, designation, message, image, alt }) => {
    return (
        <div className='col gaap' data-aos='fade-up' data-aos-easing='linear' data-aos-delay='100' data-aos-duration='400'> 
            <div className="referenceMainWrapper" data-aos="zoom-in-left">
                {!alt && 
                    <div className="referenceImageWrapper">
                        <img src={require(`../../assets/images/references-page/${image}`).default} alt={name} className="rImg" />
                    </div>
                }
                <div className="referenceContentWrapper">
                    <div className="referenceName">
                        <div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png" alt="quotes"/>
                        </div>
                        <div className="title">
                            <p className="name">{name}</p>
                            <p>{designation}</p>
                        </div>
                    </div>
                    <div className="message">{message}</div>
                </div>
                {alt && 
                    <div className="referenceImageWrapper">
                        <img src={require(`../../assets/images/references-page/${image}`).default} alt={name} className="rImg" />
                    </div>
                }
            </div> 
        </div>
    )
}

export default Reference
