import React, { useState } from 'react';
import DistrictSelector from './DistrictSelector';
import PerformanceChart from './PerformanceChart';
import Dashboard from './Dashboard'; // ✅ Add this line

function App() {
  const [district, setDistrict] = useState('');

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">MGNREGA Dashboard – Gujarat</h1>
      <DistrictSelector setDistrict={setDistrict} />
      {district && (
        <>
          <Dashboard district={district} />         {/* ✅ Shows latest record */}
          <PerformanceChart district={district} />  {/* ✅ Optional chart view */}
        </>
      )}
    </div>
  );
}

export default App;
