import React from "react";
import { NftCard } from "../Components";
import { swipe, colorful, cubes } from "../nftcard/NftImg";
export default function Tranding() {
  return (
    <>
      <div className="recently-added-section">
        <h2 className="section-heading mb-3">Recently Added</h2>
        <div className="nft-row row">
          <div className="nft-col">
            <NftCard
              name="Swipe Circles"
              owner="By Peter Will"
              price="2.30"
              img={swipe}
            />
          </div>
          <div className="nft-col">
            <NftCard
              name="Colorful Heaven"
              owner="By Mark Benjamin"
              price="1.30"
              img={colorful}
            />
          </div>
          <div className="nft-col">
            <NftCard
              name="3D Cubes Art"
              owner="By Manny Gates"
              price="6.58"
              img={cubes}
            />
          </div>
        </div>
      </div>
    </>
  );
}
