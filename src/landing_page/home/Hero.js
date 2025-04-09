import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <img src="media/images/homeHero.png" className="mb-5" alt="" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <Link to="/signup">
          <button
            className="p-2 btn btn-primary fs-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
