import React from "react";

export default function About(props) {
  let frmStyle = {
    backgroundColor:
      props.mode === "dark"
        ? "#212529"
        : "#FDF6E4" && props.mode === "danger"
        ? "#ff5252"
        : "#FDF6E4",
    color:
      props.mode === "dark"
        ? "white"
        : "black" && props.mode === "danger"
        ? "white"
        : "black",
    fontWeight: "bolder",
  };
  return (
    <div className="container my-4">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item" style={frmStyle}>
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              style={frmStyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              About us
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <img
              alt="img"
              className="img"
              src="https://imageio.forbes.com/specials-images/imageserve/5d2509b44c687b00085c325f/avengers-1/960x0.jpg?format=jpg&width=960"
            />
            <div class="accordion-body">
              The Avengers are a fictional team of superheroes and the
              protagonists of the Marvel Cinematic Universe (MCU) media
              franchise, based on the Marvel Comics team of the same name
              created by Stan Lee and Jack Kirby in 1963. Founded by
              S.H.I.E.L.D. Director Nick Fury, the team is a United States-based
              organization composed primarily of superpowered and gifted
              individuals, described as "Earth's Mightiest Heroes", who are
              committed to the world's protection from a variety of threats. The
              Avengers are depicted as operating in the state of New York:
              originally from the Avengers Tower in Midtown Manhattan and
              subsequently from the Avengers Compound in Upstate New York.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={frmStyle}>
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              style={frmStyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              About TextUtils
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
            <img
            className="hey"
              alt="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9gOlbqG92X7opAkH40f8mjLIOtxKD6uHcQ&usqp=CAU"
            />
              Text-Utils.com is described as a central repository of tools for
              helping with developer activities. It includes tools such as for
              such as to convert case, remove accents, . And this is actually
              only a subset of what we have.Text-Utils.com was born in 2014 as
              part of a learning exercise to practice our programming skills. In
              almost 10 years of existence, we continue to refactor, redesign,
              improve, and implement new features. And we could say that we
              learned a lot since we started, by including the experience here
              and in the overall development world. As long our spirit allows us
              to continue learning and coding, we will continue improving this
              website.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
