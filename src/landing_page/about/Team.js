import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/Arjun.jpeg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Arjun Gupta</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            👋 Hi! I'm Arjun Gupta, an emerging tech enthusiast and budding Web
            Developer, currently diving deep into the fascinating world of
            full-stack development. 🌐 My journey includes crafting responsive
            web applications that prioritize user engagement and seamless
            interface interactions.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="https://www.linkedin.com/in/arjun-gupta01/">Linkedin</a> /{" "}
            <a href="https://github.com/arjungupta01">Github</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
