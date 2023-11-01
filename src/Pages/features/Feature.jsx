import React from "react";
import style from "./feature.module.css";
import LandingPageHeader from "../../Components/LandingPageHeader/LandingPageHeader";
const Feature = () => {
  return (
    <>
      <LandingPageHeader />
      <br />
      <br />
      <br />
      <br />

      <main>
        <section className={style.Featurebg}>
          <div className={style.Featurehead}>
            <div className={style.Headone}>
              <br />
              <br />
              <br />
              <br />

              <h2>
                Explore Your SwapXpress <br /> Experience
              </h2>
              <br />

              <p>
                Welcome to the future of seamless currency exchange and
                meaningful connections. SwapXpress offers a range of powerful
                features designed to transform the way you handle your local
                currency and engage with your digital assets.
              </p>
              <button>JOin us</button>
            </div>
            <div className={style.Headtwo}></div>
            <div></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Feature;
