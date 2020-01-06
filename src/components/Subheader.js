import React, { useEffect, useState } from "react";

export default function Subheader() {
  return (
    <div className="subheader">
      <div className='subheader__name'>
        <h3 className="subheader__name--profile">Profile</h3>
        <select className='subheader__dealer'>
          <option className='subheader__dealer--option' selected="selected">Dealer</option>
          <option className='subheader__dealer--option'>Honda</option>
          <option className='subheader__dealer--option'>Toyota</option>
          <option className='subheader__dealer--option'>Audi</option>
          <option className='subheader__dealer--option'>BMW</option>
        </select>
        </div>
        <div className="subheader__selects">
          <select className='subheader__staff'>
            <option className='subheader__staff--option'>Select staff</option>
            <option className='subheader__staff--option'>Staff 1</option>
            <option className='subheader__staff--option'>Staff 2</option>
            <option className='subheader__staff--option'>Staff 3</option>
            <option className='subheader__staff--option'>Staff 4</option>
          </select>
          <input className="subheader__date" type="date"></input>
          <button className="subheader__print" type="submit">Print</button>
        </div>
      </div>
  );
}
