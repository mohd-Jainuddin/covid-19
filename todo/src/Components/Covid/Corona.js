import React, { useEffect, useState } from "react";

function Corona() {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch(`https://data.covid19india.org/data.json`);
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0])
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  });

  return (
    <>
      <div className="container">
        <img src="https://openclipart.org/image/800px/234416" alt="img" />
        <h1> Live</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <button>Darkmode</button>
        <button>Light</button>
      </div>

      <div className="record">
        <div className="box">
          <h3>OUR COUNTRY</h3>
          <span className="boxspan">INDIA</span>
        </div>
        <div className="box">
          <h3>TOTAL RECOVERED</h3>
          <span className="boxspan">{data.recovered}</span>
        </div>
        <div className="box">
          <h3>TOTAL CONFIRMED</h3>
          <span className="boxspan">{data.confirmed}</span>
        </div>
        <div className="box">
          <h3>TOTAL DEATH</h3>
          <span className="boxspan">{data.deaths}</span>
        </div>
        <div className="box">
          <h3>TOTAL ACTIVE</h3>
          <span className="boxspan">{data.active}</span>
        </div>
        <div className="box">
          <h3>TOTAL UPDATED</h3>
          <span className="boxspan">{data.lastupdatedtime}</span>
        </div>
      </div>
    </>
  );
}

export default Corona;
