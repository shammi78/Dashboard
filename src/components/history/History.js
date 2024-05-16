import React from "react";
import Table from "react-bootstrap/Table";
import { nfts } from "./Data";

export default function TopCreators() {
  return (
    <>
      <div className="panel-card creator-section mb-3">
        <div className="panel-head row align-items-center">
          <div className="col">
            <h3>History</h3>
          </div>
          <div className="col-auto">
            <button className="see-all">See all</button>
          </div>
        </div>
        {nfts.map((list, i) => (
          <div className="history-list" key={i}>
            <div className="history-list-img">
              <img src={list.url} alt={list.name} />
            </div>
            <div className="history-list-name">
              <h4>{list.name}</h4>
              <p>By {list.owner}</p>
            </div>
            <div className="history-list-price">
              <b>{list.price} ETH</b>
            </div>
            <div className="history-list-time">
              <span>30s ago</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
