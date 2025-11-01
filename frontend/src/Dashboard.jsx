import React, { useEffect, useState } from 'react';

const Dashboard = ({ district }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/mgnrega/${district}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [district]);

  if (!data.length) return <p>No data found for {district}</p>;

  const latest = data[data.length - 1];

  return (
    <div>
      <h2>Performance for {latest.district_name}</h2>
      <p>Month: {latest.month}</p>
      <p>Individuals Worked: {latest.Total_Individuals_Worked}</p>
      <p>JobCards Issued: {latest['Total_No_of_JobCards_issued']}</p>
      <p>Wages: ₹{latest.Wages}</p>
      <p>Women Persondays: {latest.Women_Persondays}</p>
    </div>
  );
};

export default Dashboard;
