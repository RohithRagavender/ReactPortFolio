import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import resume from '../Documents/cv.pdf'
export const Hero = () => {
return (
<section className={styles.container}>
  <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Rohith</h1>
    <p className={styles.description}>
      Enthusiastic and motivated fresher web designer with a strong design sense and
      eagerness to learn, seeking a first opportunity to contribute to the creation of user-friendly and
      visually appealing websites.Possess a solid understanding of HTML ,CSS , JavaScript , Bootstrap, TailwindCSs and
      React. And passionate about staying updated on design trends and technologies. !
    </p>
    <a href={resume} download='resume' className={styles.contactBtn}>
      Download CV
    </a>
  </div>
  <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
  <div className={styles.topBlur} />
  <div className={styles.bottomBlur} />
</section>
);
};