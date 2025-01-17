import React from "react";
import viewers from "../../assets/shami.jpg";
export default function NftCard(props) {
  return (
    <>
      <div className="nftcard">
        <div className="nft-img">
          <img src={props.img} alt="Abstract Colors" />
          <div className="nft-like">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9437 1.4004C11.9594 -0.00848705 9.50906 0.648993 8.18619 2.26139C6.86331 0.648993 4.41298 -0.0163142 2.42867 1.4004C1.37638 2.15181 0.714942 3.4198 0.669844 4.75825C0.564616 7.79518 3.15024 10.2294 7.09632 13.963L7.17148 14.0334C7.74272 14.5735 8.62213 14.5735 9.19338 14.0256L9.27606 13.9473C13.2221 10.2216 15.8002 7.78735 15.7025 4.75042C15.6574 3.4198 14.996 2.15181 13.9437 1.4004ZM8.26135 12.7967L8.18619 12.875L8.11102 12.7967C4.53324 9.42323 2.17311 7.19249 2.17311 4.93044C2.17311 3.36501 3.30056 2.19094 4.80383 2.19094C5.96135 2.19094 7.0888 2.96583 7.48717 4.03815H8.89272C9.28357 2.96583 10.411 2.19094 11.5685 2.19094C13.0718 2.19094 14.1993 3.36501 14.1993 4.93044C14.1993 7.19249 11.8391 9.42323 8.26135 12.7967Z"
                fill="#4318FF"
              />
            </svg>
          </div>
        </div>
        <div className="nft-content">
          <div className="row">
            <div className="col">
              <h4>{props.name}</h4>
              <p>{props.owner}</p>
            </div>
            <div className="col-auto">
              <div className="viewers">
                <span>
                  <img src={viewers} />
                </span>
                <span>18+</span>
              </div>
            </div>
          </div>
          <div className="row align-items-center nft-price">
            <div className="col">
              <h5>Current Bid: {props.price} ETH</h5>
            </div>
            <div className="col-auto">
              <button className="secondary-btn">Place Bid</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
