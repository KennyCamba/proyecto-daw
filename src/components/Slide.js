import React from 'react'

import '../assets/css/noticias.css'


const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src="http://www.adobewordpress.com/wp-content/uploads/2014/02/wallpaper-thumb-941.jpg"alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src="http://www.adobewordpress.com/wp-content/uploads/2014/02/wallpaper-thumb-101.jpg" alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src="http://www.adobewordpress.com/wp-content/uploads/2013/07/wallpaper-thumb-74.jpg" alt="img3" />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;