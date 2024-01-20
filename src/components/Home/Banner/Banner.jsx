
import "./Banner.scss";
import BannerImg from '../../../assets/banner-img.png'

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
            </div>
            <p >
                Lorem ipsum dolor, sit amet consectetur adipisicing autem
                 suscipit adipisci at aspernatur! Optio ut 
            </p>
            <div className="ctas">
                <div className="read-more">Read More</div>
                <div className="shop-now">Shop Now</div>
            </div>
        </div>
        <img className="banner-img" src = {BannerImg} alt="img text" />
        </div>;
};

export default Banner;
