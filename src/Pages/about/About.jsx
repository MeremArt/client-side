import React from "react";
import LandingPageHeader from "../../Components/LandingPageHeader/LandingPageHeader";
import swapimg from "../../assets/aboutill.png";
import prolog from "../../assets/bro.png";
import "./About.css";
const About = () => {
  return (
    <>
      <LandingPageHeader />
      <br />
      <br />
      <br />
      <br />

      <main>
        <div className="Heroabout">
          <br />
          <br />
          <br />
          <br />
          <section className="aboutbg">
            <div className="firstabout">
              <h2 className="abouttext">
                Bridging the gap between <br /> local and digital currencies.
              </h2>
              <p>
                Experience the future of currency exchange with our <br />
                cutting-edge blockchain technology. Say goodbye to the hassle{" "}
                <br />
                and delays of traditional conversions – we make turning your{" "}
                <br />
                local currency into cryptocurrency fast and easy.
              </p>
            </div>
            <div className="secondabout">
              <img width={650} height={650} loading="lazy" src={swapimg} />
            </div>
          </section>
        </div>
        <section className="aboutwhite">
          <br />
          <br />
          <div className="secabtsec">
            <h2>Our story</h2>
            <p>
              SwapXpress is all about empowering individuals to forge
              connections and discover a sense of belonging in their lives. Our
              mission is to simplify and enhance your ability to engage in
              meaningful conversations with those who matter most to you. We
              aspire to help you cultivate authentic relationships, whether it's
              with your local community or a global network of like-minded
              individuals. Originality, reliability, a touch of playfulness, and
              relatability are the core values that unite both our users and our
              dedicated team at SwapXpress.
            </p>
          </div>
          <div className="swappro">
            <div className="swaptalk">
              <img src={prolog} loading="lazy" />
            </div>
            <div className="swapgirl">
              <h2>p</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
