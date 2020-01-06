import React from 'react';
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Dashboard from "./components/Dashboard";
import Charts from "./components/Charts";


export default function App() {
  return (
    <div>
      <Header/>
      <Subheader/>
      <Dashboard/>
      <Charts/>
    </div>
  )
}
