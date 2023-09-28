import React, { useEffect, useRef } from "react";
import "./section5.css";
import { TickCircle } from "iconsax-react";
import video2 from "../../assets/video2.mp4";
import video1 from "../../assets/video1.mp4";

const Section5 = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;

    // Add an event listener for the loadedmetadata event
    video.addEventListener("loadedmetadata", () => {
      // Once metadata is loaded, you can set the autoplay attribute
      video.autoplay = true;
    });

    // Clean up the event listener when the component unmounts
    return () => {
      video.removeEventListener("loadedmetadata", () => {
        video.autoplay = true;
      });
    };
  }, []);
  return (
    <div className="fifth_section">
      <div className="fifth_section_videos">
        <div className="video1">
          <div className="vid1">
            <video ref={videoRef} autoPlay loop muted>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="video2">
          <div className="vid2">
            <video ref={videoRef} autoPlay loop muted>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="fifth_section_text">
        <h3>
          We prioritize your security, ensuring <br /> that your funds are kept
          safe and secure.
        </h3>

        <p className="cup">
          We have measures in place to protect your data, money and privacy. As{" "}
          <br />a user centric platform we are fully committed to earning your
          trust
        </p>

        <p className="cupp">
          We have measures in place to protect your data, money and privacy. As
          a user centric platform we are fully committed to earning your trust
        </p>

        <div className="the_ticks">
          <span className="tick">
            <span className="tick_icon">
              <TickCircle size="20" color="#FF7000" variant="Bold" />
            </span>
            <p className="tick_p">Two-Factor Authentication</p>
          </span>
          <span className="tick">
            <span className="tick_icon">
              <TickCircle size="20" color="#FF7000" variant="Bold" />
            </span>
            <p className="tick_p">Guaranteed Transaction Security</p>
          </span>
          <span className="tick">
            <span className="tick_icon">
              <TickCircle size="20" color="#FF7000" variant="Bold" />
            </span>
            <p className="tick_p">Secure Cloud Option</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section5;
