import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="card-container">
      <div className="image-container">
        {/* <Image
          src="./images/image-equilibrium.jpg"
          alt="cube image"
          width="290"
          height="290"
        /> */}
        <div className="overlay">
          <img src="./images/icon-view.svg" alt="view" />
        </div>
      </div>
      <h2 className=" text-2xl">Equilibrium #3429</h2>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <div className="small-container">
        <div className="price">
          <img src="./images/icon-ethereum.svg" />
          <p>0.041 ETH</p>
        </div>
        <div className="expiry">
          <img src="./images/icon-clock.svg" />
          <p>3 days left</p>
        </div>
        <hr />
        <div className="author-container">
          <img
            src="./images/image-avatar.png"
            alt="author image"
            width="40px"
            height="40px"
          />
          <div className="author-text">
            <p>Creation of</p>
            <p className="author">Jules Wyvern</p>
          </div>
        </div>
      </div>
    </div>
  );
}
