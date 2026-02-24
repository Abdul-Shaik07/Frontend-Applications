import React from 'react'
import swiggy from "../images/swiggy.webp"
import zomato from "../images/zomato.webp"
import kfc from "../images/kfc_png.webp"
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="left-section">
                    <h1>Taste the Best Kfc Chicken</h1>
                    <p>Kentucky Fried Chicken (KFC), founded by Harland Sanders in 1930,
                        is a globally recognized fast-food chain renowned for its signature fried chicken,
                        which is seasoned with a secret blend of 11 herbs and spices developed by Sanders himself.
                        The company's journey began with a roadside restaurant in Corbin, Kentucky, during the Great Depression,
                        and it officially launched its franchising model in 1952, marking the beginning of its rapid expansion across the United States.
                        KFC'S iconic brand identity, anchored by the image of Colonel Sanders and the slogan "Finger Lickin" Good,"
                        has remained a cornerstone of its marketing strategy, contributing significantly to its widespread recognition and enduring appeal.
                    </p>
                    <div className="buttons">
                        <button className="order-now">Order Now</button>
                        <button className="kfc-chicken">Kfc Chicken</button>
                    </div>
                    <div className="social-icons">
                        <span>Also, available on</span>
                        <div className="icons">
                            <img src={swiggy} alt="Swiggy" />
                            <img src={zomato} alt="Zomato" />
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <div className="hero-image">
                        <img src={kfc} alt="KFC Chicken" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero