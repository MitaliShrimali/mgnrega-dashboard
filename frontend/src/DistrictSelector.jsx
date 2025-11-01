import React from 'react';

const districts = ['AHMADABAD', 'SURAT', 'RAJKOT', 'VADODARA'];

function DistrictSelector({ setDistrict }) {
  return (
    <select onChange={(e) => setDistrict(e.target.value)} className="mt-4 p-2 border">
      <option value="">Select District</option>
      {districts.map((d) => (
        <option key={d} value={d}>{d}</option>
      ))}
    </select>
  );
}

export default DistrictSelector;
