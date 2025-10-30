const axios = require('axios');

const fetchData = async (district) => {
  const url = 'https://api.data.gov.in/resource/ee03643a-ee4c-48c2-ac30-9f2ff26ab722';
  const params = {
    'api-key': '579b464db66ec23bdd0000018d172f7737b34f547b6b598e6ac766d5',
    format: 'json',
    limit: 100,
    'filters[state_name]': 'GUJARAT'
  };

  try {
    const response = await axios.get(url, { params });

    const filtered = response.data.records.filter(
  (record) =>
    record['district_name'] &&
    record['district_name'].toLowerCase().includes(district.toLowerCase())
);


    return filtered;
  } catch (error) {
    console.error('Error fetching MGNREGA data:', error.message);
    return [];
  }
};

module.exports = fetchData;
