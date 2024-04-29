import React from "react";
import LandingPageHeader from "../../Components/LandingPageHeader/LandingPageHeader";
import swapimg from "../../assets/aboutill.png";
import where from "../../assets/where.png";
import prolog from "../../assets/bro.png";
import "./About.css";
import Footer from "../../Components/footer/Footer";
import AutoPlaySlide from "../../Components/Autoslide/AutoPlaySlide";
const About = () => {
  return (
    <>
      <LandingPageHeader />
      <br />
      <br />
      <br />
      <br />

      <main>
        <div className="Heroabout"></div>
        <section className="aboutwhite">
          <br />
          <br />
          <div className="secabtsec">
            <h2>Our story</h2>
            <p id="space_mobile">
              SwapXpress was born out of a shared passion for digital assets and
              a collective desire to revolutionize the cryptocurrency trading
              landscape. Our journey began with a simple yet profound
              realization: the existing tools for trading cryptocurrencies were
              falling short of meeting the evolving needs of users. They were
              plagued by issues of sluggishness, unreliability, and unnecessary
              complexity, hindering traders from fully capitalizing on the
              potential of this dynamic market.
              <br />
              <br />
              Driven by a vision to redefine cryptocurrency trading, we set out
              to create a platform that streamlined currency exchange, fostered
              seamless communication, and revitalized community engagement. At
              SwapXpress, cutting-edge AI-powered bots lie at the core,
              empowering users with intelligent trading strategies for swift,
              secure transactions, and maximum profitability.
            </p>
          </div>
          <div className="swappro">
            <div className="swaptalk">
              <img src={prolog} loading="lazy" />
            </div>
            <div className="swapgirl">
              <h2 id="space_mobile" className="">
                Prologue
              </h2>
              <p>
                In the ever-evolving landscape of digital assets, a vision was
                sparked by the shortcomings of traditional cryptocurrency
                trading tools. The founders of SwapXpress, driven by a shared
                passion for innovation, observed the hurdles hindering traders:
                sluggishness, unreliability, and unnecessary complexity. Fueled
                by a desire to redefine the norms of cryptocurrency trading,
                they embarked on a journey to craft a platform that transcended
                mere functionality. At the heart of our endeavor lies
                SwapXpress, where cutting-edge AI-powered bots merge with a
                commitment to excellence. Together, we empower users with
                intelligent trading strategies, ensuring swift, secure
                transactions, and maximizing profitability. This is not just a
                story of a platform; it's a testament to the relentless pursuit
                of progress, collaboration, and the boundless potential of the
                digital age. Welcome to the prologue of SwapXpress—a journey
                poised to reshape the future of cryptocurrency trading, one
                exchange at a time.
              </p>
            </div>
          </div>
          <div className="swappro">
            <div className="">
              <img
                id="where_des"
                className="where"
                src={where}
                loading="lazy"
              />
            </div>
            <div className="swapgirl">
              <h2 id="space_mobile" className="">
                Where are we Now?
              </h2>
              <p>
                As of now, SwapXpress continues to advance in its mission to
                redefine cryptocurrency trading. We've made significant strides
                in refining our platform, integrating cutting-edge technologies,
                and enhancing user experiences. Our team remains dedicated to
                streamlining currency exchange, fostering seamless
                communication, and revitalizing community engagement within the
                dynamic cryptocurrency market.
              </p>
            </div>
            <div className="swaptalk">
              <img
                id="where_fix"
                className="where"
                src={where}
                loading="lazy"
              />
            </div>
          </div>
          <br />
          <br />
          <br />

          <section className="Swapslider">
            <div>
              <h2>Core Values</h2>
              <p>Foundational principles and beliefs that guide us</p>
            </div>
            <br />
            <br />
            <br />
            <div>
              <AutoPlaySlide />
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
