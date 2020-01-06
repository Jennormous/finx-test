import React from "react";

export default function Summary() {
  return (
    <div className='summary'>
      <div className='summary__card'>
        <h4 className='summary__card--main'>Customers</h4>
        <h3 className='summary__card--head'>1,532</h3>
        <div className='summary__card--num'>
          <h4 className='green'>
            <i className='fas fa-arrow-up'></i>124
          </h4>
          <h4 className='green'>
            <i className='fas fa-arrow-up'></i>23%
          </h4>
        </div>
        <p className='summary__card--text'>Since Last Month</p>
      </div>
      <div className='summary__card'>
        <h4 className='summary__card--main'>Average</h4>
        <h3 className='summary__card--head'>2,520</h3>
        <div className='summary__card--num'>
          <h4 className='red'>
            <i className='fas fa-arrow-down'></i>$450
          </h4>
          <h4 className='red'>
            <i className='fas fa-arrow-down'></i>-11%
          </h4>
        </div>
        <p className='summary__card--text'>Since Last Month</p>
      </div>
      <div className='summary__card'>
        <h4 className='summary__card--main'>Earning</h4>
        <h3 className='summary__card--head'>$12,930</h3>
        <div className="summary__card--num"> 
          <h4 className='green'>
            <i className='fas fa-arrow-up'></i>$2,560
          </h4>
          <h4 className='green'>
            <i className='fas fa-arrow-up'></i>19%
          </h4>
        </div>
        <p className='summary__card--text'>Since Last Month</p>
      </div>
      <div className='summary__card'>
        <h4 className='summary__card--main'>Growth</h4>
        <h3 className='summary__card--head'>27.52%</h3>
        <div className='summary__card--num'>
          <h4 className='green'>
            <i className='fas fa-arrow-up'></i>12.63%
          </h4>
          <h4 className='green'>
            <i className='fas fa-arrow-up'></i>$13,500
          </h4>
        </div>
        <p className='summary__card--text'>Since Last Month</p>
      </div>
    </div>
  );
}
