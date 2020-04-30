const express = require('express');
const path = require('path');
const app = express();
const PORT = 3003;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));