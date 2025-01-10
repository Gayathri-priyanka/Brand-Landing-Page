const Hero=()=>{
    return <main className="hero container">
        <div className="hero-content">
            <h1>YOUR HANDS DESERVE THE BEST</h1>
            <p>YOUR STYLE DESERVES THE BEST, AND WE'RE HERE TO ELEVATE IT WITH OUR WATCHES. YOUR TIME DESERVES THE BEST, AND WE'RE HERE TO ENHANCE IT WITH OUR CRAFTSMANSHIP.</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button>Category</button>

            </div>
            <div className="shops">
                <p>Also Available on</p>
                <div className="shop-images">
                    <img src="/Images/amazon.png" alt="amazon-logo" />
                    <img src="/Images/flipkart.png" alt="flipkart-logo" />

                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/Images/laura-chouette-2NIAbGMjdR0-unsplash.jpg" alt="Hero-Image" />
        </div>
    </main>;
}
export default Hero;