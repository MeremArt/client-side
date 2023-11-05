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
              SwapXpress emerged in response to a pressing challenge: the need
              to bridge the gap between local currencies and cryptocurrency
              while facilitating effortless communication. The founders of
              SwapXpress, united by a deep enthusiasm for digital assets,
              identified the demand for a more efficient and user-centric
              solution. The prevailing tools in this space were frequently
              characterized by their sluggishness, unreliability, and
              complexity.
              <br />
              <br />
              We had a vision to introduce a superior service that not only
              streamlined the currency exchange process but also nurtured
              communication, facilitated memorable experiences, and reignited
              the inherent sense of community within the cryptocurrency world.
              This mission was inspired by a commitment to making the process
              not just functional but enjoyable and enriching for all users.
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
                Swapxpress was founded to address a significant challenge: how
                to facilitate seamless communication while converting local
                currency to cryptocurrency. The founders of Swapxpress, driven
                by a shared passion for digital assets, recognized the need for
                a more efficient and user-friendly solution. Existing tools for
                this purpose were often slow, unreliable, and complicated. The
                vision of Swapxpress was to create a superior service that not
                only streamlined the currency exchange process but also fostered
                communication, facilitated memorable experiences, and rekindled
                the sense of community inherent in the world of cryptocurrency
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
                As of now, Swapxpress stands as a promising platform that
                focuses on bridging the gap between cryptocurrencies and local
                currencies. it serves as a pivotal tool for users seeking a
                seamless means to convert their local currency into
                cryptocurrency and vice versa. Swapxpress is committed to
                simplifying and streamlining this process, allowing individuals
                and businesses to more easily engage with the world of digital
                assets.
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
