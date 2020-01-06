import React from 'react';
import Penetration from "./charts/Penetration";
import Profits from "./charts/Profits";

export default function Charts() {
  return (
    <div className="charts">
      <Penetration />
      <Profits />
    </div>
  )
}
