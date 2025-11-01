import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PerformanceChart({ district }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/mgnrega/${district}`)
      .then((res) => setData(res.data))
      .catch(() => setData([]));
  }, [district]);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Performance for {district}</h2>
      {data.length === 0 ? (
        <p>No data found for this district.</p>
      ) : (
        <ul className="list-disc ml-6">
          {data.map((item, idx) => (
            <li key={idx}>
              Month: {item.month}, Individuals Worked: {item.Total_Individuals_Worked}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PerformanceChart;
