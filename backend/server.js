const express = require('express');
const cors = require('cors');
const mgnregaRoutes = require('./routes/mgnrega');
require('dotenv').config();

const app = express();
app.use(cors());
app.use('/api/mgnrega', mgnregaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
