
import "./Home.scss";
import React from "react";
import Footer from "../Footer/Footer";
import NewsLetter from '../Footer/Newsletter/Newsletter'
import Header from "../Header/Header";
import Banner from "./Banner/Banner";

const Home =()=> {
    return (
      <div>
        <Header/>
        <Banner/>
        <NewsLetter />
        <Footer />
      </div>
    ); 
}

export default Home;
