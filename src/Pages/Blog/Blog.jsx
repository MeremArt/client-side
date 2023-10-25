import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

import styles from "./styles.module.css";

function Blog() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#D5C9FF",
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#FF9577" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#805CFF" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#5CFF80" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(["Anticipate", "the", "Awesome"]), 2000)
    );
    ref.current.push(setTimeout(() => set(["Be", "Prepared "]), 5000));
    ref.current.push(setTimeout(() => set(["Coming", "Soon..."]), 8000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  return (
    <center>
      <section className="comming-div">
        <div className={styles.container}>
          <div className={styles.mainx}>
            {transitions(({ innerHeight, ...rest }, item) => (
              <animated.div
                className={styles.transitionsItem}
                style={rest}
                onClick={reset}
              >
                <animated.div
                  style={{ overflow: "hidden", height: innerHeight }}
                >
                  {item}
                </animated.div>
              </animated.div>
            ))}
          </div>
        </div>
      </section>
    </center>
  );
}

export default Blog;
