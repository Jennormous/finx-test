import React from "react";
import Profile from "./overview/Profile";
import Snapshot from "./overview/Snapshot";
import Summary from "./overview/Summary";

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Profile />
      <Summary />
      <Snapshot />
    </div>
  );
}
