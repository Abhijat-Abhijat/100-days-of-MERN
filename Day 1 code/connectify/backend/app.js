const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/test/data', (req, res) => {
    const data = { message: 'This is data from the backend!' };
    res.json(data);
});

app.listen(port, () => {
    console.log(`Connectify listening on Port ${port}`);
});
