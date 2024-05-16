import React from "react";
import Table from "react-bootstrap/Table";
import { creators } from "./Data";

export default function TopCreators() {
  return (
    <>
      <div className="panel-card creator-section mb-3">
        <div className="panel-head row align-items-center">
          <div className="col">
            <h3>Top Creators</h3>
          </div>
          <div className="col-auto">
            <button className="see-all">See all</button>
          </div>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Artworks</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {creators.map((list, i) => (
              <tr key={i}>
                <td>
                  <div className="profile">
                    <span>
                      <img src={list.url} alt={list.name} />
                    </span>
                    {list.name}
                  </div>
                </td>
                <td>{list.artwork}</td>
                <td>
                  <div className="rating">
                  <span
                    className="rating-percentage"
                    style={{ width: `${list.rating}%` }}
                  ></span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
