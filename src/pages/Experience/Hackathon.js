import React from 'react'

function Hackathon() {
    return (
        <div>
            <div className="blog-slider">
                <div className="blog-slider__wrp swiper-wrapper">
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt=""> */}
                        </div>
                        <div className="blog-slider__content">
                            <span className="blog-slider__code">26 December 2019</span>
                            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                            <a href="#" className="blog-slider__button">READ MORE</a>
                        </div>
                    </div>
                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/jason-leung-798979-unsplash.jpg" alt=""> */}
                        </div>
                        <div className="blog-slider__content">
                            <span className="blog-slider__code">26 December 2019</span>
                            <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
                            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                            <a href="#" className="blog-slider__button">READ MORE</a>
                        </div>
                    </div>

                    <div className="blog-slider__item swiper-slide">
                        <div className="blog-slider__img">
                            {/* <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg" alt=""> */}
                        </div>
                        <div className="blog-slider__content">
                            <span className="blog-slider__code">26 December 2019</span>
                            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                            <a href="#" className="blog-slider__button">READ MORE</a>
                        </div>
                    </div>

                </div>
                <div className="blog-slider__pagination"></div>
            </div>
        </div>
    )
}

export default Hackathon
