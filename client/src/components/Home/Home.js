import React from "react";
// import Nav from "../Nav/Nav";
import "./Home.css";

const Home = () => (
  <div className="Home" data-testid="Home">
    {/* left side of the home page - huge profile picture  */}
    <img
      id="profile-image"
      src="/media/mugabo-profile-vpr-reed-20201006.jpeg"
      alt="mugabo doing something"
    />
    {/* right side of the home page */}
    <div className="home-content-container">
      {/* <Nav /> */}
      <section className="intro-info">
        <h2>Hello, I'm Mugabo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          architecto a eveniet. Eaque eos deleniti doloremque similique
          molestias est natus ad harum repellendus et odio, quidem rerum dolore
          tempora voluptatibus voluptates modi vero autem expedita illo ea
          saepe. Perspiciatis modi aliquam vel quam, repellat non consequatur et
          eaque explicabo tempore!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          architecto a eveniet. Eaque eos deleniti doloremque similique
          molestias est natus ad harum repellendus et odio, quidem rerum dolore
          tempora voluptatibus voluptates modi vero autem expedita illo ea
          saepe. Perspiciatis modi aliquam vel quam, repellat non consequatur et
          eaque explicabo tempore!
        </p>
      </section>
    </div>
  </div>
);

export default Home;
