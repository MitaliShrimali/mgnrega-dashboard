const express = require('express');
const router = express.Router();
const fetchData = require('../utils/fetchData');

router.get('/:district', async (req, res) => {
  const { district } = req.params;
  try {
    const data = await fetchData(district);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
