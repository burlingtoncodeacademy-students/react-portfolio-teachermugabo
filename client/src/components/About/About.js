import React from "react";
import "./About.css";

const About = () => (
  <div className="About" data-testid="About">
    <h1>About Me</h1>
    <section id="interests">
      <h2>Interests</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      architecto a eveniet. Eaque eos deleniti doloremque similique molestias
      est natus ad harum repellendus et odio, quidem rerum dolore tempora
      voluptatibus voluptates modi vero autem expedita illo ea saepe.
      Perspiciatis modi aliquam vel quam, repellat non consequatur et eaque
      explicabo tempore!
      <img
        width="50%"
        src="https://www.penguin.co.uk/content/dam/prh/books/111/1118351/9781847925992.jpg.transform/PRHDesktopWide_small/image.jpg"
        alt="Kendi's How to be an anti-racist"
      />
    </section>
    <section id="bio">
      <h2>Where I grew up</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      architecto a eveniet. Eaque eos deleniti doloremque similique molestias
      est natus ad harum repellendus et odio, quidem rerum dolore tempora
      voluptatibus voluptates modi vero autem expedita illo ea saepe.
      Perspiciatis modi aliquam vel quam, repellat non consequatur et eaque
      explicabo tempore!
      <img
        src="/media/thousand-hills.jpeg"
        alt="born in Rwanda, land of a thousand hills"
      />
    </section>
    <section id="programing">
      <h2>Path to Programming</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
      architecto a eveniet. Eaque eos deleniti doloremque similique molestias
      est natus ad harum repellendus et odio, quidem rerum dolore tempora
      voluptatibus voluptates modi vero autem expedita illo ea saepe.
      Perspiciatis modi aliquam vel quam, repellat non consequatur et eaque
      explicabo tempore!
      <img
        src="/media/stanford-intro-cs.png"
        alt="cs106a, cs106b, cs107 - stanford courses that introduced me to programming"
      />
    </section>
  </div>
);

export default About;
