import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Hero() {
  const [background, setBackground] = useState(20);

  const center = useRef(null);
  const main = useRef(null);
  const top = useRef(null);
  const bottom = useRef(null);
  const top_h1 = useRef(null);
  const bottom_h1 = useRef(null);
  const center_h1 = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: main.current,
          //  markers:true,
          start: "50% 50%",
          end: "150% 50%",
          scrub: 2,
          pin: true,
        },
      });
      tl.to(
        center.current,
        {
          height: "100vh",
        },
        "a"
      )
        .to(
          top.current,
          {
            top: "-50%",
          },
          "a"
        )
        .to(
          bottom.current,
          {
            bottom: "-50%",
          },
          "a"
        )
        .to(
          top_h1.current,
          {
            top: "60%",
          },
          "a"
        )
        .to(
          bottom_h1.current,
          {
            bottom: "-30%",
          },
          "a"
        )
        .to(
          center_h1.current,
          {
            top: "-30%",
          },
          "a"
        )
        .to(content.current, {
          delay: -0.2,
          marginTop: "0%",
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div ref={main} id="hero_main">
        <div ref={top} id="hero_top">
          <h1 ref={top_h1} id="hero_top-h1">
            Notflix
          </h1>
        </div>
        {/* .hero_content h3 {
  width: 60%;
  font-size: 3vw;
  font-family: CardinalR;
  text-align: center;
  font-weight: 400;
} */}
        <div ref={center} id="hero_center">
          <div ref={content} className="hero_content">
            <h4 className=" font-heading text-[24px] lg:text-[42px] font-medium text-[#c5ed57]">
              („• ֊ •„)/ Welcome! ♡
            </h4>
            <h3 className="w-[80%] font-thin text-center text-[54px] lg:text-[84px] leading-tight font-body">
              <i>Explore </i> a cinematic journey through the{" "}
              <i>digital aisles</i> of movie treasures.
            </h3>
            <div className="hero_btn"></div>
            <h2>(17)</h2>
          </div>
        </div>
        <div ref={bottom} id="hero_bottom">
          <h1 ref={bottom_h1} id="hero_bottom-h1">
            Notflix
          </h1>
        </div>
      </div>
    </div>
  );
}
