
import React, { useEffect, useRef } from "react";
import "./Experience.css";
import bg from "../../Assets/business_logo.png";
import ex from "../../Assets/ex.jpeg";

const Experience= () => {
  const cardsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hide");
          } else {
            entry.target.classList.add("hide");
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  return (
    <section className="timeline container">
      {" "}
      <div className="">
        {" "}
        <h3 className="text-center" style={{ color: "#003366" }}>
          {" "}
          <b>PROFESSIONAL JOURNEY</b>{" "}
        </h3>{" "}
        <br /> {/* Card 1 */}{" "}
        <article
          ref={(el) => (cardsRef.current[0] = el)}
          className="experience-card hide mx-auto "
        >
          {" "}
          <div className="timeline__content">
            {" "}
            <h3>Front-End Developer</h3>{" "}
            <time dateTime="2024">
              <b>Aug 2023 – Present</b>
            </time>{" "}
            <div className="company">Ebrain Technology</div> <hr />{" "}
            <p>
              {" "}
              Designed and developed responsive, user-focused interfaces using
              React.js, Redux.js, Material-UI, and PrimeReact. Created reusable
              components and fine-tuned layouts for performance and scalability.
              Partnered with design and backend teams to deliver seamless
              integration with Node.js APIs deployed on AWS.{" "}
            </p>{" "}
          </div>{" "}
          <img src={bg} className="education--img" alt="education" />{" "}
        </article>{" "}
        {/* Card 2 */}{" "}
        <article
          ref={(el) => (cardsRef.current[1] = el)}
          className="experience-card hide mx-auto"
        >
          {" "}
          <div className="timeline__content">
            {" "}
            <h3>What I Can Do for You</h3> <hr />{" "}
            <p>
              {" "}
              I create fast, responsive, and user-friendly web apps with clean,
              reusable code. Skilled in modern front-end tools, I deliver
              quality results, adapt quickly, and work seamlessly with teams to
              turn ideas into reality.{" "}
            </p>{" "}
          </div>{" "}
          <img src={ex} className="education---img" alt="education" />{" "}
        </article>{" "}
      </div>{" "}
    </section>
  );
};

export default Experience;
