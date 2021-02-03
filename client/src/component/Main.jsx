import React from "react";
import { Button } from "react-bootstrap";
const Main = () => {
  return (
    <div className="container">
      <h3>Apple</h3>
      <h2>iPhone XS Max</h2>
      <div className="main">
        <img
          src="../assets/images/iphone_xs_max.png"
          alt="q-link"
          className="image"
        />
        <p>
          Get Exactly what you need with the perfomrance and reliability of this
          phone, which <br /> comes with a 5.8-inch edge-to-edge Infinity
          Display. It comes backed with a long-lasting <br /> battery (23 hours
          of talk time) and keeps everything with 32GB built in memory. <br />{" "}
          Finally, capture those high-quality moments with a built in 8 MP
          camera.
        </p>
      </div>
      <div>
        <i className="fas fa-shipping-fast">
          <p>Free Shipping</p>
        </i>
        <i className="fas fa-sim-card mx-2">
          <p>Free SIM card included</p>
        </i>
      </div>
      <strong>Color:Black</strong>
      <div>
        <span className="dot mx-2" style={{ backgroundColor: "black" }}></span>
        <span
          className="dot mx-2"
          style={{ backgroundColor: "#f0e68c" }}
        ></span>
        <span
          className="dot mx-2"
          style={{ backgroundColor: "#f8f8ff" }}
        ></span>
      </div>
      <strong>Storage</strong>
      <Button variant="light" className="mx-2">
        64GB
      </Button>
      <Button className="mx-2" variant="light">
        128GB
      </Button>
      <Button className="mx-2" variant="light">
        256GB
      </Button>
      <div>
        <strong>PAYMENT</strong>
      </div>
      <Button className="mx-2" variant="light">
        Pay Monthly
      </Button>
      <Button className="mx-2" variant="light">
        Pay in Full
      </Button>
      <div>
        <strong>FINANCE WITH</strong>
        <p>$10.15 /mo.</p>
      </div>
    </div>
  );
};

export default Main;
