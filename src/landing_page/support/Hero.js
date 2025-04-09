import React from "react";

function Hero() {
  return (
    <section className="container-fluid text-start" id="supportHero">
      <div className="container">
        <div className="p-4" id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="" className="p-2">Track Tickets</a>
        </div>
        <div className="row p-3 m-3">
          <div className="col-6 p-3">
            <h4 className="p-1">
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input className="ms-1" placeholder="Eg. how do I activate F&O" />
            <br />
            <a href="">Track account opening</a>
            <a href="" className="p-2">Track segment activation</a>
            <a href="" className="p-2">Intraday margins</a><br></br>
            <a href="">Kite user manual</a>
          </div>
          <div className="col-6 p-5">
            <h1 className="fs-3 pb-3">Featured</h1>
            <ol>
              <li className="pb-2 ">
                <a href="" className="p-2">
                  Change in expiry day of NSE derivative contracts from April 04,
                  2025 [Withheld]
                </a>
              </li>
              <li className="pb-2">
                <a href="" className="p-2">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
