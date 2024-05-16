import React from "react";
import { Banner, Tranding, RecentlyAdded, TopCreators, History } from "../Components";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-head">
        <p>Pages / Dashboard</p>
        <h2 className="section-heading mb-4">Dashboard</h2>
      </div>
      <div className="dashboard-middle-section col-xxl-8">
        <Banner />
        <Tranding />
        <RecentlyAdded />
      </div>
      <div className="dashboard-right-section col-xxl-4">
        <TopCreators/>
        <History/>
      </div>
    </>
  );
}
