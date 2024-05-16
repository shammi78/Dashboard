import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { NftCard } from "../Components";
import { abstract, eth, mesh} from "../nftcard/NftImg";
export default function Tranding() {
  return (
    <>
      <div className="tranding-section row">
      <h2 className="section-heading">Trending NFTs</h2>
        <div className="col">
          <Tabs
            defaultActiveKey="art"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="art" title="Art">
                <div className="nft-row row">
                    <div className="nft-col">
                        <NftCard name="Abstract Colors" owner="By Esthera Jackson" price="0.91" img={abstract}/>
                    </div>
                    <div className="nft-col">
                        <NftCard name="ETH AI Brain" owner="By Nick Wilson" price="2.82" img={eth}/>
                    </div>
                    <div className="nft-col">
                        <NftCard name="Mesh Gradients" owner="By Will Smith" price="0.56" img={mesh}/>
                    </div>
                </div>
              
            </Tab>
            <Tab eventKey="music" title="Music">
              Tab content for Profile
            </Tab>
            <Tab eventKey="collectibles" title="Collectibles">
              Tab content for Contact
            </Tab>
            <Tab eventKey="sports" title="Sports">
              Tab content for Sports
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
